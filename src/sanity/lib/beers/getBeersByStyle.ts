import { defineQuery } from 'next-sanity'

import { sanityFetch } from '@/sanity/lib/live'

export const getBeersByStyle = async (styleSlug: string) => {
  const BEER_BY_STYLE_QUERY = defineQuery(`
    *[_type == "beer" && references(*[_type == "style" && slug.current == $styleSlug]._id)] | order(name asc)
  `)

  try {
    const styles = await sanityFetch({
      query: BEER_BY_STYLE_QUERY,
      params: { styleSlug }
    })
    return styles.data || []
  } catch (error) {
    console.error('Error fetching beers by style:', error)
    return []
  }
}
