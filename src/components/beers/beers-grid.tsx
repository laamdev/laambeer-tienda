'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { BeerCard } from '@/components/beers/beer-card'

import { cn } from '@/lib/utils'
import { Beer } from 'sanity.types'

export const BeersGrid = ({
  beers,
  className
}: {
  beers: Beer[]
  className?: string
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4',
        className
      )}
    >
      {beers.map((beer: any) => {
        return (
          <AnimatePresence key={beer._id}>
            <motion.div
              layout
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <BeerCard key={beer._id} beer={beer} />
            </motion.div>
          </AnimatePresence>
        )
      })}
    </div>
  )
}
