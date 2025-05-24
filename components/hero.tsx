"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpCircle, Mail, Phone, Instagram } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 flex flex-col items-center justify-center min-h-[90vh]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Hi, I&apos;m <span className="gradient-text">Aakanksha Tayade</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl">
              <span className="js-only">
                <span>Senior Associate Interior Designer</span>
              </span>
              <noscript>
                <span>
                  Senior Associate Interior Designer | 16+ Years Experience | Commercial & Residential Specialist
                </span>
              </noscript>
            </p>
          </div>
          <div className="max-w-[700px] text-muted-foreground">
            <p className="text-lg">
              Creating exceptional interior spaces that blend aesthetics with functionality for over 16 years
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="#projects">View Portfolio</Link>
            </Button>
          </div>
          <div className="flex gap-4 mt-6">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById("contact")
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById("contact")
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://instagram.com/aakankshatayade" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block js-only">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <ArrowUpCircle className="h-10 w-10 text-primary animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}
