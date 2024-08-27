import React from "react";
import SectionHeader from "../Common/SectionHeader";
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const CarouselPage = () => {
    const images = [
        { src: "/images/carousel/1.webp", alt: "Business photo 1" },
        { src: "/images/carousel/2.webp", alt: "Business photo 2" },
        { src: "/images/carousel/3.webp", alt: "Business photo 3" },
        { src: "/images/carousel/4.webp", alt: "Business photo 4" },
      ]

  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Galeria`,
                subtitle: `Nuestros trabajos`,
                description: `Explora nuestra galería y descubre la calidad y precisión en cada uno de nuestros trabajos. Desde impresiones en alta resolución hasta encuadernados profesionales, cada imagen refleja nuestro compromiso con la excelencia en el servicio de copiado y diseño.`,
              }}
            />
          </div>
        </div>
        <Carousel className="w-full max-w-xl mx-auto py-8">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-[3/2] items-center justify-center p-2">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="object-cover rounded-md"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
      </section>
    </>
  );
};

export default CarouselPage;
