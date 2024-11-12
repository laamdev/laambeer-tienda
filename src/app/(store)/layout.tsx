import '@/app/globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Nav } from '@/components/navigation/nav'
import { Footer } from '@/components/navigation/footer'

import { cn } from '@/lib/utils'
import { SanityLive } from '@/sanity/lib/live'
import { Banner } from '@/components/navigation/banner'
import { Header } from '@/components/navigation/header'
import { COMPANY_DESCRIPTION, COMPANY_NAME, SITE_URL } from '@/lib/constants'
import { MenuButton, MobileMenu } from '@/components/navigation/mobile-menu'

const foundersGrotesk = localFont({
  src: [
    {
      path: '../../../public/fonts/founders/FoundersGrotesk-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/founders/FoundersGrotesk-LightItalic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/founders/FoundersGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/founders/FoundersGrotesk-RegularItalic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/founders/FoundersGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/founders/FoundersGrotesk-MediumItalic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/founders/FoundersGrotesk-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/founders/FoundersGrotesk-SemBdIta.woff2',
      weight: '600',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/founders/FoundersGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/founders/FoundersGrotesk-BoldItalic.woff2',
      weight: '700',
      style: 'italic'
    }
  ],
  display: 'swap',
  variable: '--font-founders-grotesk'
})

const rightGrotesk = localFont({
  src: [
    {
      path: '../../../public/fonts/right/PPRightGrotesk-TightFine.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/right/PPRightGrotesk-TightFineItalic.woff2',
      weight: '100',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/right/PPRightGrotesk-TightLight.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/right/PPRightGrotesk-TightLightItalic.woff2',
      weight: '200',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/right/PPRightGrotesk-TightRegular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/right/PPRightGrotesk-TightRegularItalic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/right/PPRightGrotesk-TightMedium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/right/PPRightGrotesk-TightMediumItalic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/right/PPRightGrotesk-TightBold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/right/PPRightGrotesk-TightBoldItalic.woff2',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/right/PPRightGrotesk-TightDark.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/right/PPRightGrotesk-TightDarkItalic.woff2',
      weight: '800',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/right/PPRightGrotesk-TightBlack.woff2',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/right/PPRightGrotesk-TightBlackItalic.woff2',
      weight: '900',
      style: 'italic'
    }
  ],
  display: 'swap',
  variable: '--font-right-grotesk'
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: COMPANY_NAME,
    template: `%s | ${COMPANY_NAME}`
  },
  description: COMPANY_DESCRIPTION,
  openGraph: {
    title: COMPANY_NAME,
    description: COMPANY_DESCRIPTION,
    url: SITE_URL,
    siteName: COMPANY_NAME,
    images: [
      {
        url: `${SITE_URL}/images/og.png`,
        width: 1200,
        height: 630
      }
    ],
    locale: 'es-ES',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: COMPANY_NAME,
    site: COMPANY_NAME,
    card: 'summary_large_image',
    description: COMPANY_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/images/og.png`,
        alt: `${COMPANY_NAME} logo`,
        width: 1200,
        height: 630
      }
    ]
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/apple-icon.png'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={cn(
        foundersGrotesk.variable,
        rightGrotesk.variable,
        'bg-background font-sans text-foreground antialiased'
      )}
    >
      <body>
        <main>
          <MobileMenu />
          <Nav />
          <Header />
          {children}
          <Footer />
        </main>

        <SanityLive />
      </body>
    </html>
  )
}
