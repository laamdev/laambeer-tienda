import { defineQuery } from 'next-sanity'

import { sanityFetch } from '@/sanity/lib/live'

export const getBeerBySlug = async (slug: string) => {
  const BEER_BY_SLUG_QUERY = defineQuery(`
    *[_type == "beer" && slug.current == $slug][0]{
      _id,
      name,
      description,
      "slug": slug.current,
      "brewery": brewery->{
        name, 
        "slug": slug.current
        },
      "style": style->{
        name,
        "slug": slug.current
      },
      image,
      price,
      abv,
      format,
      size,
    }
  `)

  try {
    const beer = await sanityFetch({
      query: BEER_BY_SLUG_QUERY,
      params: { slug }
    })
    return beer.data || null
  } catch (error) {
    console.error('Error fetching all beers', error)
    return null
  }
}
