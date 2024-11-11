import { Metadata } from 'next'

import { MaxWidthWrapper } from '@/components/globals/max-width-wrapper'
import { PageTitle } from '@/components/globals/page-title'
import { FoodMenu } from '@/components/taproom/food-menu'
import { TapsMenu } from '@/components/taproom/taps-menu'

export const metadata: Metadata = {
  title: 'Grifos y Comida'
}

export default async function TaproomPage() {
  return (
    <MaxWidthWrapper>
      <section className='flex flex-col gap-y-8'>
        <PageTitle title='Grifos' />
        <TapsMenu />
      </section>
      <section className='flex flex-col gap-y-8'>
        <PageTitle title='Comida' />
        <FoodMenu />
      </section>
    </MaxWidthWrapper>
  )
}
