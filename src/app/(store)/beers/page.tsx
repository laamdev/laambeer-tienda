import { MaxWidthWrapper } from '@/components/globals/max-width-wrapper'
import { BeersGrid } from '@/components/beers/beers-grid'
import { PageTitle } from '@/components/globals/page-title'
import { StyleFilters } from '@/components/beers/style-filters'
import { BeerSearch } from '@/components/beers/beer-search'
import { BeerPagination } from '@/components/beers/beer-pagination'

import { getAllBeers } from '@/sanity/lib/beers/getAllBeers'
import { getAllStyles } from '@/sanity/lib/beers/getAllStyles'
import { getBeersCount } from '@/sanity/lib/beers/getBeersCount'
import { BEERS_PER_PAGE } from '@/lib/constants'
import { EmptyState } from '@/components/globals/empty-state'
import { PageSummary } from '@/components/globals/page-summary'

interface BeersPageProps {
  searchParams: Promise<{
    filter: string
    query: string | null
    page: number
  }>
}

export default async function BeersPage({ searchParams }: BeersPageProps) {
  const { filter, query, page } = await searchParams

  const paginationStart = page > 1 ? (page - 1) * BEERS_PER_PAGE : 0
  const paginationEnd = page > 1 ? page * BEERS_PER_PAGE : BEERS_PER_PAGE

  const beers = await getAllBeers(filter, query, paginationStart, paginationEnd)
  const beersCount = await getBeersCount()
  const styles = await getAllStyles()

  const stylesList = styles.map(style => ({
    label: style.name,
    value: style.slug
  }))

  return (
    <MaxWidthWrapper>
      <section>
        <div>
          <PageTitle title='Cervezas' isCentered />
          <PageSummary text='Más de 100 referencias en latas y botellas de cervezas artesanales. Cada semana encontrarás en nuestra tienda los últimos lanzamientos de las mejores cerveceras nacionales e internacionales.' />
        </div>

        <div className='mt-8 flex flex-col gap-y-8'>
          <div className='mx-auto w-full max-w-xl'>
            <BeerSearch placeholder='Buscar cevezas...' />
          </div>
          <div className='mx-auto w-full max-w-2xl'>
            <StyleFilters filters={stylesList} />
          </div>
        </div>

        <div className='mt-4'>
          {beers && beers.length > 0 ? (
            <>
              <div className='mt-12'>
                <div className='mt-6'>
                  <BeersGrid beers={beers} />
                </div>
              </div>

              {BEERS_PER_PAGE < beersCount && (
                <BeerPagination totalDocs={beersCount} />
              )}
            </>
          ) : (
            <EmptyState
              message='No hay cervezas disponibles.'
              linkHref='/'
              linkLabel='Volver a inicio'
            />
          )}
        </div>
      </section>
    </MaxWidthWrapper>
  )
}
