import { cn } from '@/lib/utils'

export const SectionHeading = ({
  title,
  isCentered,
  className
}: {
  title: string
  isCentered?: boolean
  className?: string
}) => {
  return (
    <h2
      className={cn(
        'font-serif text-7xl font-bold uppercase sm:text-9xl',
        {
          'text-center': isCentered
        },
        className
      )}
    >
      {title}
    </h2>
  )
}
