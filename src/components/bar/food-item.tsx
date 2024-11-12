import { Food } from 'sanity.types'

export const FoodItem = ({ dish }: { dish: Food }) => {
  return (
    <div className='flex items-center justify-between gap-x-8'>
      <div>
        <h2 className='text-xl font-bold uppercase tracking-tighter sm:text-3xl'>
          {dish.name}
        </h2>
        <p className='text-base text-stone-700 sm:text-xl'>
          {dish.description}
        </p>
      </div>
      <h3 className='text-xl font-bold sm:text-3xl'>{`${dish.price?.toFixed(2)}€`}</h3>
    </div>
  )
}
