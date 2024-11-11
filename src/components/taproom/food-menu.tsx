import { getAllDishes } from '@/sanity/lib/taproom/getAllDishes'

import { FoodItem } from '@/components/taproom/food-item'
import { EmptyState } from '../globals/empty-state'

export const FoodMenu = async () => {
  const dishes = await getAllDishes()

  return (
    <>
      {dishes && dishes.length !== 0 ? (
        <div className='flex flex-col gap-y-8'>
          {dishes.map(dish => (
            // @ts-expect-error
            <FoodItem key={dish._id} dish={dish} />
          ))}
        </div>
      ) : (
        <EmptyState
          message='No hay platos disponibles.'
          linkHref='/'
          linkLabel='Ir a inicio'
        />
      )}
    </>
  )
}
