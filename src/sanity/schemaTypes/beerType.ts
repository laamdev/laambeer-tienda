import { Cube } from '@phosphor-icons/react'
import { defineType, defineField } from 'sanity'

export const beerType = defineType({
  name: 'beer',
  title: 'Beers',
  type: 'document',
  icon: Cube,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name'
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'style',
      title: 'Style',
      type: 'reference',
      to: [{ type: 'style' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'brewery',
      title: 'Brewery',
      type: 'reference',
      to: [{ type: 'brewery' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'abv',
      title: 'ABV',
      type: 'number',
      description: 'Alcohol by volume of the beer.',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        list: ['Can', 'Bottle']
      },
      description: 'Select the format or recipient of the beer.',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'number',
      description: `Size of the beer's container (ml).`,
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'arrivalDate',
      title: 'Arrival Date',
      description: 'When did this beer arrive in the store?',
      type: 'datetime'
    }),
    defineField({
      name: 'isInStock',
      title: 'Is In Stock?',
      type: 'boolean',
      description: 'Is this beer available to buy in the shop?'
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured?',
      type: 'boolean',
      description: 'Is this beer featured in the home page?'
    }),
    defineField({
      name: 'isGlutenFree',
      title: 'Is Gluten Free?',
      type: 'boolean',
      description: 'Is this beer gluten free?'
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'price',
      brewery: 'brewery.name'
    },
    prepare(select) {
      return {
        title: `${select.title} - ${select.brewery}`,
        subtitle: `${select.subtitle}€`,
        media: select.media
      }
    }
  }
})
