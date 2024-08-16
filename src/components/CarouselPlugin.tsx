'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs border bg-red-300"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      style={{
        height: 'calc(100vh - 160px)',
        display: 'flex flex-col',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CarouselContent>
        <CarouselItem 
          className="flex flex-col h-full"
          style={{
            height: '100%',
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="flex-1" key={index}>
              <Card className=" bg-red-900 h-[140.5px]">
                <CardContent className="flex items-center justify-center"
                  style={{
                    // height: 'calc(100vh - 72px / 6)',
                  }}
                >
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          ))}
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
