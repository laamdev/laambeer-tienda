import Link from 'next/link'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge'

import { cn, getFormattedCurrency } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/utils'

export const BeerCard = ({ beer }: { beer: any }) => {
  return (
    <Link
      key={beer._id}
      href={`/beers/${beer.slug}`}
      className={cn('flex flex-col', {
        'pointer-events-none': !beer.isInStock
      })}
    >
      <div className='group relative aspect-square w-full overflow-hidden rounded-xl'>
        <Image
          src={urlForImage(beer.image)?.height(980).width(980).url() as string}
          alt={beer.name}
          fill
          className={cn(
            'rounded-xl object-cover object-center transition-transform duration-300'
          )}
        />
        <div className='tw-animation absolute inset-0 bg-background opacity-0 group-hover:opacity-25' />

        {!beer.isInStock && (
          <div className='absolute inset-0 bg-foreground opacity-75' />
        )}

        {!beer.isInStock && (
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
            <p className='text-center text-xl font-bold uppercase tracking-tighter text-white sm:text-3xl'>
              Sold Out
            </p>
          </div>
        )}

        {/* <div
          className={cn({
            'opacity-50': !beer.isInStock
          })}
        >
          {beer.isGlutenFree && <GlutenFreeTooltip />}
        </div> */}
      </div>
      <div className='mt-4 flex flex-col'>
        <Badge className='w-fit'>{beer.style}</Badge>
        <h2 className='mt-1 text-base font-bold uppercase tracking-tighter sm:text-xl'>
          {beer.name}
        </h2>
        <h3 className='text-sm font-medium text-zinc-700'>{beer.brewery}</h3>

        <h4 className='mt-2 text-lg font-medium'>
          {getFormattedCurrency(beer.price)}
        </h4>

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
