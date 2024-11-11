import React from 'react'
import { cn } from '@/lib/utils'
export const MaxWidthWrapper = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'mx-auto mt-16 flex max-w-screen-2xl flex-col gap-y-12 px-4 sm:gap-y-24 sm:px-12',
        className
      )}
    >
      {children}
    </div>
  )
}
