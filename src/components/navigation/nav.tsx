'use client'

import React, { ReactNode, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

export const Nav = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0
  })
  const pathname = usePathname()

  return (
    <ul
      onMouseLeave={() => {
        setPosition(pv => ({
          ...pv,
          opacity: 0
        }))
      }}
      className='sticky top-4 z-50 mx-auto hidden w-fit gap-x-4 rounded-full text-2xl sm:flex'
    >
      <div
        className={cn(
          'absolute inset-0 rounded-full bg-[#eee9e5]/90 backdrop-blur-md'
        )}
      />
      <Tab setPosition={setPosition}>
        <Link href={`/`} className='text-base sm:text-xl'>{`Home`}</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link
          className='text-base sm:text-xl'
          href={`/beers`}
        >{`Cervezas`}</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link className='text-base sm:text-xl' href={`/bar`}>{`Bar`}</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link
          className='text-base sm:text-xl'
          href={`/events`}
        >{`Eventos`}</Link>
      </Tab>

      <Cursor position={position} />
    </ul>
  )
}

const Tab = ({
  children,
  setPosition
}: {
  children: ReactNode
  setPosition: (position: any) => void
}) => {
  const ref = useRef(null)

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return

        // @ts-expect-error
        const { width } = ref.current.getBoundingClientRect()

        setPosition({
          // @ts-expect-error
          left: ref.current.offsetLeft,
          width,
          opacity: 1
        })
      }}
      className='fon-bold relative z-10 block cursor-pointer text-white mix-blend-difference md:px-5 md:py-3 md:text-base'
    >
      {children}
    </li>
  )
}

const Cursor = ({ position }: any) => {
  return (
    <motion.li
      animate={{
        ...position
      }}
      className='absolute z-0 h-12 rounded-full bg-foreground'
    />
  )
}
