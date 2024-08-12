import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Luis Martínez",
    designation: "Cliente frecuente",
    image: image1,
    content:
      "He usado Copia Express León por años y siempre me sorprende la rapidez y calidad de su trabajo. No importa si es una impresión sencilla o algo más complejo, siempre cumplen con mis expectativas.",
  },
  {
    id: 2,
    name: "María López",
    designation: "Emprendedora",
    image: image2,
    content:
      "Necesitaba unas impresiones urgentes para una presentación importante y Copia Express León me salvó. El servicio a domicilio fue puntual y el acabado profesional. Sin duda los recomiendo.",
  },
  {
    id: 3,
    name: "Carlos Gómez",
    designation: "Estudiante universitario",
    image: image1,
    content:
      "La primera vez que usé sus servicios fue para un proyecto final en la universidad. Me ayudaron a elegir el mejor tipo de papel y el empastado quedó impecable. Siempre vuelvo cuando necesito calidad y buen precio.",
  },
  {
    id: 4,
    name: "Ana Rodríguez",
    designation: "Diseñadora gráfica",
    image: image2,
    content:
      "Como diseñadora gráfica, soy muy exigente con las impresiones. En Copia Express León entienden lo que necesito y entregan resultados que me encantan. La atención al detalle es inigualable.",
  },
];
