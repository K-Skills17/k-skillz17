import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stephen Komando — Technical Growth Marketing Specialist | Google Ads & Paid Media',
  description:
    'Technical growth marketer with 4+ years driving customer acquisition through Google Ads, Meta, funnels, and conversion tracking. Native English, remote from Brazil. Proven sub-R$1 cost-per-lead track record.',
  metadataBase: new URL('https://stephenkomando.website'),
  openGraph: {
    title: 'Stephen Komando — Technical Growth Marketing Specialist',
    description:
      "I build the whole acquisition engine — ads, funnel, site, and the tracking that proves it. Remote, native English.",
    url: 'https://stephenkomando.website',
    siteName: 'Stephen Komando',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stephen Komando — Technical Growth Marketing Specialist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stephen Komando — Technical Growth Marketing Specialist',
    description:
      "I build the whole acquisition engine — ads, funnel, site, and the tracking that proves it. Remote, native English.",
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/*
          ── Analytics ─────────────────────────────────────────────────────────
          Set env vars in .env.local, then uncomment the blocks below.
          GA4:     NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
          Clarity: NEXT_PUBLIC_CLARITY_ID=XXXXXXXXXX
          ──────────────────────────────────────────────────────────────────── */}

        {/* GA4 */}
        {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`} /> */}
        {/* <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA4_ID}');` }} /> */}

        {/* Microsoft Clarity */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_ID}");` }} /> */}
      </head>
      <body>{children}</body>
    </html>
  )
}
