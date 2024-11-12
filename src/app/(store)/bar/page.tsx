import { Metadata } from 'next'

import { MaxWidthWrapper } from '@/components/globals/max-width-wrapper'
import { PageTitle } from '@/components/globals/page-title'
import { FoodMenu } from '@/components/bar/food-menu'
import { TapsMenu } from '@/components/bar/taps-menu'
import { SectionHeading } from '@/components/globals/section-heading'
import { PageSummary } from '@/components/globals/page-summary'

export const metadata: Metadata = {
  title: 'Bar'
}

export default async function BarPage() {
  return (
    <MaxWidthWrapper>
      <div>
        <PageTitle title='El Bar' isCentered />
        <PageSummary text='Disfruta de 5 grifos de las mejores cervezas artesanales nacionales e internacionales. Cada semana podrás encontrar barriles frescos con los últimos lanzamientos de tus cerveceras favoritas.' />
      </div>
      <section className='flex flex-col gap-y-4 sm:gap-y-8'>
        <SectionHeading title='Grifos' isCentered />
        <TapsMenu />
      </section>
      <section className='flex flex-col gap-y-4 sm:gap-y-8'>
        <SectionHeading title='Comida' isCentered />
        <FoodMenu />
      </section>
    </MaxWidthWrapper>
  )
}
