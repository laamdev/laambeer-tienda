import Link from 'next/link'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Button, buttonVariants } from '../ui/button'

const navLinks = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/beers',
    label: 'Cervezas'
  },
  {
    href: '/bar',
    label: 'Bar'
  },
  {
    href: '/events',
    label: 'Eventos'
  }
]

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger
        className={buttonVariants({
          className: 'absolute inset-x-0 top-4 mx-auto w-fit sm:hidden'
        })}
      >
        Menu
      </SheetTrigger>
      <SheetContent side='top'>
        <SheetHeader>
          <SheetTitle className='sr-only'>Menú</SheetTitle>
        </SheetHeader>

        <ul className='mt-24 flex flex-col gap-y-2'>
          {navLinks.map(link => (
            <li key={link.href}>
              <SheetClose asChild>
                <Link
                  href={link.href}
                  className='text-3xl font-bold uppercase tracking-tighter'
                >
                  {link.label}
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  )
}
