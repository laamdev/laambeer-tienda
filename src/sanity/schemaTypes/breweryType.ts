import { defineField, defineType } from 'sanity'
import { Factory } from '@phosphor-icons/react'

export const breweryType = defineType({
  name: 'brewery',
  title: 'Brewery',
  type: 'document',
  icon: Factory,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name'
      }
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text'
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'name',
      location: 'location',
      media: 'logo'
    },
    prepare(select) {
      return {
        title: select.title,
        subtitle: select.location,
        media: select.media
      }
    }
  }
})
