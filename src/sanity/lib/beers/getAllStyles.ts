import { defineQuery } from 'next-sanity'

import { sanityFetch } from '@/sanity/lib/live'

export const getAllStyles = async () => {
  const ALL_STYLES_QUERY = defineQuery(`
    *[_type == "style"] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
    }
  `)

  try {
    const styles = await sanityFetch({
      query: ALL_STYLES_QUERY
    })
    return styles.data || []
  } catch (error) {
    console.error('Error fetching all styles', error)
    return []
  }
}
