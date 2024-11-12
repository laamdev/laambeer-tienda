interface PageSummaryProps {
  text: string
}

export const PageSummary = ({ text }: PageSummaryProps) => {
  return (
    <p className='mx-auto max-w-5xl text-center text-xl text-stone-700 sm:text-3xl'>
      {text}
    </p>
  )
}
