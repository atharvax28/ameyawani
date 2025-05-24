import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Aakanksha Tayade | Senior Associate Interior Designer",
  description:
    "Portfolio of Aakanksha Tayade, a Senior Associate Interior Designer with over 16 years of experience in residential, commercial, and office space design.",
  keywords: [
    "Aakanksha Tayade",
    "Interior Designer",
    "Commercial Design",
    "Residential Design",
    "Office Design",
    "Mumbai",
    "Space Planning",
  ],
  authors: [{ name: "Aakanksha Tayade" }],
  creator: "Aakanksha Tayade",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aakanksha-tayade.com",
    title: "Aakanksha Tayade | Senior Associate Interior Designer",
    description:
      "Portfolio of Aakanksha Tayade, a Senior Associate Interior Designer with over 16 years of experience in residential, commercial, and office space design.",
    siteName: "Aakanksha Tayade Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Aakanksha Tayade Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakanksha Tayade | Senior Associate Interior Designer",
    description:
      "Portfolio of Aakanksha Tayade, a Senior Associate Interior Designer with over 16 years of experience in residential, commercial, and office space design.",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}


import './globals.css'