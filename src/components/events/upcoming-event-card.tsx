import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Event } from 'sanity.types'
import { getFormattedCurrency } from '@/lib/utils'
import { EventDetails } from './even-details'
import { getFormattedDate } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/utils'

interface UpcomingEventCardProps {
  event: Event
}

export const UpcomingEventCard = ({ event }: UpcomingEventCardProps) => {
  const eventCategory =
    event.category === 'tasting'
      ? 'Cata'
      : event.category === 'presentation'
        ? 'Presentación'
        : event.category === 'meet-the-brewer'
          ? 'Meet the Brewer'
          : event.category === 'other'
            ? 'Evento'
            : 'Evento'

  const formattedDate = getFormattedDate(event.startDate!)
  const formattedPrice = getFormattedCurrency(event.price!)

  return (
    <div className='flex flex-col items-center rounded-2xl bg-card md:flex-row'>
      <div className='relative aspect-video w-full rounded-l-2xl rounded-r-none md:w-1/3'>
        <Image
          src={
            (urlForImage(event.image)
              ?.height(1920)
              .width(1080)
              .url() as string) ?? '/images/event-1.webp'
          }
          alt={event.name ?? 'Evento LamBeer.'}
          layout='fill'
          className='rounded-l-2xl rounded-r-none'
        />
        <Badge variant='secondary' className='absolute left-4 top-4'>
          {eventCategory}
        </Badge>
      </div>
      <div className='flex w-full flex-col justify-between p-8 leading-normal md:w-2/3'>
        <h2 className='text-4xl font-bold uppercase tracking-tighter'>
          {event.name}
        </h2>
        <h3 className='stone-700 text-base font-medium uppercase'>
          {formattedDate}
        </h3>
        <div className='mt-4'>
          <EventDetails event={event} />
        </div>
        <div className='mt-8 flex items-center justify-between'>
          <Button>Reservar Plaza</Button>
          <h4 className='text-2xl font-bold text-stone-700'>
            {event.price ? <span>{formattedPrice}</span> : <span>Gratis</span>}
          </h4>
        </div>
      </div>
    </div>
  )
}
