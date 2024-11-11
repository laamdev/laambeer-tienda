import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const styleType = defineType({
  name: 'style',
  title: 'Style',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name'
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description'
    }
  }
})
