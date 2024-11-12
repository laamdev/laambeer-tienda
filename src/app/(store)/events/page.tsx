import { Metadata } from 'next'

import { MaxWidthWrapper } from '@/components/globals/max-width-wrapper'
import { PageTitle } from '@/components/globals/page-title'
import { PageSummary } from '@/components/globals/page-summary'
import { UpcomingEventCard } from '@/components/events/upcoming-event-card'
import { SectionHeading } from '@/components/globals/section-heading'
import { EventsGrid } from '@/components/events/events-grid'
import { EmptyState } from '@/components/globals/empty-state'

import { getAllEvents } from '@/sanity/lib/events/getAllEvents'

export const metadata: Metadata = {
  title: 'Eventos',
  description:
    'Catas, presentaciones, meet the brewer y mucho más. Reserva tu plaza para uno de nuestros eventos y disfruta de lo mejor de la escena craft madrileña.'
}

export default async function EventsPage() {
  const events = await getAllEvents()
  const nextEvent = events[0]
  const upcomingEvents = events.slice(1)

  return (
    <MaxWidthWrapper>
      <div>
        <PageTitle title='Eventos' isCentered />
        <PageSummary text='Catas, presentaciones, meet the brewer y mucho más. Reserva tu plaza para uno de nuestros eventos y disfruta de lo mejor de la escena craft madrileña.' />
      </div>

      {upcomingEvents && upcomingEvents.length > 0 && (
        <section className='flex flex-col gap-y-4'>
          <SectionHeading title='Próximo' isCentered />
          <UpcomingEventCard event={nextEvent} />
        </section>
      )}

      <section className='flex flex-col gap-y-4'>
        <SectionHeading title='Futuros' isCentered />
        {upcomingEvents && upcomingEvents.length > 0 ? (
          <EventsGrid events={upcomingEvents} />
        ) : (
          <EmptyState
            message='No hay futuros eventos programados.'
            linkHref='/beers'
            linkLabel='Ver cervezas'
          />
        )}
      </section>
    </MaxWidthWrapper>
  )
}
