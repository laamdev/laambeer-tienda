import { defineQuery } from 'next-sanity'

import { sanityFetch } from '@/sanity/lib/live'

export const getAllTaps = async () => {
  const ALL_TAPS_QUERY = defineQuery(`
    *[_type == "tap"] | order(order asc) {
      _id,
      _updatedAt,
      order,
      name,
      "brewery": brewery->,
      "style": style->,
      abv,
      halfPintPrice,
      pintPrice,
      isCoreRange
    }
  `)

  try {
    const taps = await sanityFetch({
      query: ALL_TAPS_QUERY
    })
    return taps.data || []
  } catch (error) {
    console.error('Error fetching all taps', error)
    return []
  }
}
