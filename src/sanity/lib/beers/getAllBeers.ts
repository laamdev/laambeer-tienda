import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live'

export const getAllBeers = async (
  filter: string,
  query: string | null,
  paginationStart: number,
  paginationEnd: number
) => {
  const searchFilter = query ? `&& name match $query` : ''
  const ALL_BEERS_QUERY = defineQuery(`
    *[_type == "beer" && ($filter == 'all' || style->slug.current == $filter) ${searchFilter}] | order(name asc) [$paginationStart...$paginationEnd] {
      _id,
      name,
      "slug": slug.current,
      price,
      image,
      format,
      size,
      "brewery": brewery->name,
      "style": style->name,
      "styleFilter": style->slug.current,
    }
  `)

  try {
    const beers = await sanityFetch({
      query: ALL_BEERS_QUERY,
      params: {
        filter: filter || 'all',
        // @ts-expect-error
        query: query ? `*${query}*` : '',
        paginationStart,
        paginationEnd
      }
    })
    return beers.data || []
  } catch (error) {
    console.error('Error fetching all beers', error)
    return []
  }
}
