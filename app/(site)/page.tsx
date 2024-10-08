import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Precios";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import CarouselPage from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Copia Express León - Copiado e Impresión Digital de Alta Calidad en León",
  description: "Descubre Copia Express León, el centro de copiado e impresión digital con más de 20 años de experiencia. Ofrecemos copias en blanco y negro, impresión a color, empastado, enmicado y entrega a domicilio gratis en pedidos mayores a $999. Calidad y rapidez en cada servicio.",
  // other metadata
};


export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      {/* <Integration /> */}
      <CTA />
      <FAQ />
      <Testimonial />
      <CarouselPage />
      <Pricing />
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
