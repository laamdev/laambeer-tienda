import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live'

export const getBeersCount = async () => {
  const BEERS_COUNT_QUERY = defineQuery(`
    count(*[_type == "beer"])
  `)

  try {
    const beersCount = await sanityFetch({
      query: BEERS_COUNT_QUERY
    })
    return beersCount.data || 0
  } catch (error) {
    console.error('Error fetching beers count', error)
    return 0
  }
}
