import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'

import { Nanum_Brush_Script as NanumBrushScript} from "next/font/google"

const nanumBrushScript = NanumBrushScript({
  subsets: ['latin'],
  weight: '400',
  variable: '--NanumBrush'
})


export const metadata: Metadata = {
  title: "Jigokuraku Hell'sWiki",
  description: 'Wiki de Fã para Fã da obra Jigokuraku',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body className={`bg-black-wlight ${nanumBrushScript.variable}`}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  )
}
