"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const CopiaExpressHistory = () => {
  return (
    <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
      <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
        
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
        >
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
            La Historia de Copia Express León: 25 Años de Calidad y Confianza
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 px-4 lg:gap-12">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="animate_top text-center lg:text-left max-w-3xl"
          >
            <p className="mb-6 text-lg">
              En el corazón de León, hace 25 años, nació un sueño: ofrecer servicios de impresión y copiado de alta calidad a la comunidad. Así, en 1998, Copia Express León abrió sus puertas con una pequeña tienda, pero con una gran visión. Desde el principio, nos comprometimos a brindar no solo productos impresos, sino soluciones que facilitaran la vida de nuestros clientes, desde estudiantes hasta grandes empresas.
            </p>
            <p className="mb-6 text-lg">
              Con el paso de los años, nuestro negocio creció, al igual que la confianza de nuestros clientes. Incorporamos tecnologías de vanguardia y ampliamos nuestra gama de servicios, añadiendo impresiones en color de alta resolución, encuadernado profesional y laminado rígido. Sin embargo, lo que realmente nos distingue es nuestra dedicación al detalle y a la satisfacción del cliente. Cada impresión, cada copia, es un reflejo de nuestro compromiso con la calidad.
            </p>
            <p className="mb-6 text-lg">
              Hoy, Copia Express León no es solo un negocio; es una familia que valora cada relación construida y cada proyecto completado. Hemos crecido, pero nuestros valores fundamentales siguen siendo los mismos: ofrecer un servicio excepcional y garantizar que cada cliente se sienta valorado y respetado.
            </p>
            <p className="mb-6 text-lg">
              Estamos orgullosos de ser parte de la comunidad de León y de haber contribuido al éxito de miles de estudiantes, profesionales y empresas a lo largo de estos 25 años. Y, aunque mucho ha cambiado, nuestro compromiso con la calidad y el servicio al cliente sigue siendo tan fuerte como el primer día.
            </p>
            <p className="text-lg font-semibold">
              Gracias por permitirnos ser parte de sus historias. En Copia Express León, seguimos trabajando para ofrecer lo mejor, porque sabemos que su éxito es también el nuestro.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 lg:gap-42.5">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate_top text-center"
          >
            <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              25+
            </h3>
            <p className="text-lg lg:text-para2">Años de Experiencia</p>
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="animate_top text-center"
          >
            <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              100K+
            </h3>
            <p className="text-lg lg:text-para2">Clientes Satisfechos</p>
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="animate_top text-center"
          >
            <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              2M+
            </h3>
            <p className="text-lg lg:text-para2">Páginas Impresas</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CopiaExpressHistory;