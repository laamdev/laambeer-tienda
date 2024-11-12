import Link from 'next/link'

import { SectionHeading } from '@/components/globals/section-heading'
import { MaxWidthWrapper } from '@/components/globals/max-width-wrapper'
import { Button } from '@/components/ui/button'
import { BeersGrid } from '@/components/beers/beers-grid'

import { getFeaturedBeers } from '@/sanity/lib/beers/getFeaturedBeers'
import { COMPANY_DESCRIPTION, COMPANY_NAME } from '@/lib/constants'

export default async function HomePage() {
  const featuredBeers = await getFeaturedBeers()

  return (
    <MaxWidthWrapper>
      <section>
        <h1 className='text-center font-serif text-9xl font-black uppercase leading-none sm:text-[20rem]'>
          {COMPANY_NAME}
        </h1>
        <p className='mx-auto max-w-5xl text-center text-xl sm:text-3xl'>
          {COMPANY_DESCRIPTION}
        </p>
      </section>
      <section>
        <SectionHeading title='Novedades' isCentered />
        <div className='mt-6 sm:mt-12'>
          {featuredBeers && featuredBeers.length !== 0 ? (
            <BeersGrid beers={featuredBeers} />
          ) : (
            <p className='text-center'>No hay cervezas destacadas</p>
          )}

          <Button asChild className='mt-12'>
            <Link href='/beers'>Ver todas las cervezas</Link>
          </Button>
        </div>
      </section>
    </MaxWidthWrapper>
  )
}
