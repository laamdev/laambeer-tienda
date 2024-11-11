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

import { getAllTaps } from '@/sanity/lib/taproom/getAllTaps'
import { getFormattedDate } from '@/lib/utils'
import { Tap } from 'sanity.types'

export const TapsMenu = async () => {
  const taps = await getAllTaps()

  if (!taps) {
    return notFound()
  }

  const latestUpdateTime = taps.reduce((latest: string, tap: Tap) => {
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
            {taps.map((tap: Tap) => (
              <TableRow key={tap._id}>
                <TableCell className='text-3xl font-bold uppercase'>
                  <div className='flex flex-col'>
                    <span>#0{tap.order}</span>
                    <Badge className='w-fit text-xs'>
                      {tap.isCoreRange ? 'Core' : 'Rotativo'}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell className='flex flex-col'>
                  <span className='text-3xl font-bold uppercase tracking-tighter'>
                    {tap.name}
                  </span>
                  <span className='text-xl font-medium text-zinc-700'>
                    {/* @ts-expect-error */}
                    {tap.brewery?.name}
                  </span>
                </TableCell>
                <TableCell className='text-3xl font-bold uppercase tracking-tighter'>
                  {/* @ts-expect-error */}
                  {tap.style?.name}
                </TableCell>
                <TableCell className='text-3xl font-bold uppercase tracking-tighter'>
                  {tap.abv}%
                </TableCell>
                <TableCell className='text-right text-3xl font-bold uppercase tracking-tighter'>
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
