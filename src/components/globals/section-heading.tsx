import { cn } from '@/lib/utils'

export const SectionHeading = ({
  title,
  isCentered
}: {
  title: string
  isCentered?: boolean
}) => {
  return (
    <h2
      className={cn('font-serif text-5xl font-bold uppercase sm:text-7xl', {
        'text-center': isCentered
      })}
    >
      {title}
    </h2>
  )
}
