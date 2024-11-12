import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { GrainsSlash } from '@phosphor-icons/react/dist/ssr'

export const GlutenFreeTooltip = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <GrainsSlash
            weight='fill'
            className='absolute left-4 top-4 size-8 text-amber-600'
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Gluten Free beer.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
