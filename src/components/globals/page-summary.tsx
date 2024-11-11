interface PageSummaryProps {
  text: string
}

export const PageSummary = ({ text }: PageSummaryProps) => {
  return (
    <p className='mx-auto max-w-5xl text-center text-3xl text-stone-700'>
      {text}
    </p>
  )
}
