import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/utils'

import { Badge } from '@/components/ui/badge'

export const BeerCard = ({ beer }: { beer: any }) => {
  return (
    <Link
      key={beer._id}
      href={`/beers/${beer.slug}`}
      className={cn('flex flex-col', beer.isInStock ? 'opacity-50' : '')}
    >
      <div className='group relative aspect-square w-full overflow-hidden rounded-xl'>
        <Image
          src={urlForImage(beer.image)?.height(980).width(980).url() as string}
          alt={beer.name}
          fill
        />
        <div className='tw-animation absolute inset-0 bg-background opacity-0 group-hover:opacity-25' />
      </div>
      <div className='mt-4 flex flex-col'>
        <Badge className='w-fit'>{beer.style}</Badge>
        <h2 className='mt-1 text-xl font-bold uppercase tracking-tighter'>
          {beer.name} - {beer.brewery}
        </h2>

        <h3 className='text-base font-medium text-zinc-700'>
          {beer.price.toFixed(2)} €
        </h3>

        {/* <p className='mt-2 line-clamp-2 text-sm text-gray-600'>
          {beer.description
            ?.map(block =>
              block._type === 'block'
                ? block.children?.map(child => child.text).join('')
                : ''
            )
            .join(' ') || 'No description available.'}
        </p> */}
      </div>
    </Link>
  )
}
