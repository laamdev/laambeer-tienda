import { defineQuery } from 'next-sanity'

import { sanityFetch } from '@/sanity/lib/live'

export const getEventBySlug = async (slug: string) => {
  const EVENT_BY_SLUG_QUERY = defineQuery(`
    *[_type == "event" && slug.current == $slug][0]{
      _id,
      name,
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
      abv
    }
  `)

  try {
    const event = await sanityFetch({
      query: EVENT_BY_SLUG_QUERY,
      params: { slug }
    })
    return event.data || null
  } catch (error) {
    console.error('Error fetching the event:', error)
    return null
  }
}
