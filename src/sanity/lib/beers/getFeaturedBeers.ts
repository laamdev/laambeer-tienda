import { defineQuery } from 'next-sanity'

import { sanityFetch } from '@/sanity/lib/live'

export const getFeaturedBeers = async () => {
  const FEATURED_BEERS_QUERY = defineQuery(`
    *[_type == "beer" && isFeatured][0...4] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
      price,
      image,
      "brewery": brewery->name,
      "style": style->name,
    }
  `)

  try {
    const featuredBeers = await sanityFetch({
      query: FEATURED_BEERS_QUERY
    })
    return featuredBeers.data || []
  } catch (error) {
    console.error('Error fetching all featured beers', error)
    return []
  }
}
