import { cn } from '@/lib/utils'

export const PageTitle = ({
  title,
  isCentered
}: {
  title: string
  isCentered?: boolean
}) => {
  return (
    <h1
      className={cn(
        'font-serif text-9xl font-black uppercase sm:text-[12rem]',
        {
          'text-center': isCentered
        }
      )}
    >
      {title}
    </h1>
  )
}
