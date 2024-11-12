import { notFound } from 'next/navigation'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { EmptyState } from '@/components/globals/empty-state'
import { Badge } from '@/components/ui/badge'

import { getAllTaps } from '@/sanity/lib/bar/getAllTaps'
import { getFormattedDate } from '@/lib/utils'

export const TapsMenu = async () => {
  const taps = await getAllTaps()

  if (!taps) {
    return notFound()
  }

  const latestUpdateTime = taps.reduce((latest, tap) => {
    return new Date(tap._updatedAt) > new Date(latest) ? tap._updatedAt : latest
  }, taps[0]._updatedAt)

  const formattedDate = getFormattedDate(latestUpdateTime)

  return (
    <>
      {taps && taps.length !== 0 ? (
        <Table>
          <TableCaption>
            <div className='flex flex-col'>
              <span>Actualizado por última vez el {formattedDate}.</span>
              <span>
                Un grifo CORE sólo cambia en ocasiones especiales. Un grifo
                ROTATIVO tiene barriles limitados y cambia frecuentemente.
              </span>
            </div>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[150px]'>Tap</TableHead>
              <TableHead>Cerveza</TableHead>
              <TableHead>Estilo</TableHead>
              <TableHead>ABV</TableHead>
              <TableHead className='text-right'>Media pinta / Pinta</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {taps.map((tap: any) => (
              <TableRow key={tap._id}>
                <TableCell className='text-lg font-bold uppercase sm:text-3xl'>
                  <div className='flex flex-col'>
                    <span>#0{tap.order}</span>
                    <Badge className='w-fit text-xs'>
                      {tap.isCoreRange ? 'Core' : 'Rotativo'}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell className='flex flex-col'>
                  <span className='text-lg font-bold uppercase tracking-tighter sm:text-3xl'>
                    {tap.name}
                  </span>
                  <span className='text-sm font-medium text-zinc-700 sm:text-xl'>
                    {tap.brewery?.name}
                  </span>
                </TableCell>
                <TableCell className='text-lg font-bold uppercase tracking-tighter sm:text-3xl'>
                  {tap.style?.name}
                </TableCell>
                <TableCell className='text-lg font-bold uppercase tracking-tighter sm:text-3xl'>
                  {tap.abv}%
                </TableCell>
                <TableCell className='text-right text-lg font-bold uppercase tracking-tighter sm:text-3xl'>
                  {tap.halfPintPrice!.toFixed(2)}€ / €
                  {tap.pintPrice!.toFixed(2)}€
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <EmptyState
          message='No hay grifos disponibles'
          linkHref='/'
          linkLabel='Ver cervezas'
        />
      )}
    </>
  )
}
