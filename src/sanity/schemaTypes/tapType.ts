import { Hash } from '@phosphor-icons/react'
import { defineType, defineField } from 'sanity'

export const tapType = defineType({
  name: 'tap',
  title: 'Taps',
  type: 'document',
  icon: Hash,
  fields: [
    defineField({
      name: 'order',
      title: 'Tap Number',
      type: 'number',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'name',
      title: 'Beer Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'brewery',
      title: 'Beer Brewery',
      type: 'reference',
      to: [{ type: 'brewery' }]
    }),
    defineField({
      name: 'style',
      title: 'Style',
      type: 'reference',
      to: [{ type: 'style' }]
    }),
    defineField({
      name: 'abv',
      title: 'Alcohol Percentage',
      type: 'number',
      description: 'Alcohol by volume of the beer.',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'halfPintPrice',
      title: 'Half-Pint Price',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'pintPrice',
      title: 'Pint Price',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'isCoreRange',
      title: 'Is Core Range?',
      type: 'boolean'
    })
  ],
  orderings: [
    {
      title: 'Tap #',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'brewery.name',
      order: 'order'
    },
    prepare(select) {
      return {
        title: `#${select.order} - ${select.title}`,
        subtitle: `${select.subtitle}`
      }
    }
  }
})
