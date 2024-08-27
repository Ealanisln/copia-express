"use client";

import React from "react";
import SectionHeader from "../Common/SectionHeader";

const impresionesData = [
  {
    maxSheets: "33 HOJAS",
    size: "8 MM",
    price: "$16",
  },
  {
    maxSheets: "74 HOJAS",
    size: "10 MM",
    price: "$18",
  },
  {
    maxSheets: "110 HOJAS",
    size: "13 MM",
    price: "$21",
  },
  {
    maxSheets: "140 HOJAS",
    size: "15 MM",
    price: "$24",
  },
  {
    maxSheets: "160 HOJAS",
    size: "18 MM",
    price: "$26",
  },
  {
    maxSheets: "190 HOJAS",
    size: "21 MM",
    price: "$30",
  },
  {
    maxSheets: "220 HOJAS",
    size: "25 MM",
    price: "$32",
  },
  {
    maxSheets: "250 HOJAS",
    size: "30 MM",
    price: "$36",
  },
  {
    maxSheets: "340 HOJAS",
    size: "38 MM",
    price: "$40",
  },
  {
    maxSheets: "500 HOJAS",
    size: "45 MM",
    price: "$50",
  },
];

const bindingData = [
  {
    type: "Pasta Dura",
    prices: [
      { quantity: "1-2 piezas", price: "$340 c/u" },
      { quantity: "3 piezas en adelante", price: "$300 c/u" },
    ],
  },
  {
    type: "Pasta Blanda",
    prices: [
      { quantity: "1-2 piezas", price: "$250 c/u" },
      { quantity: "3 piezas en adelante", price: "$220 c/u" },
    ],
  },
];

const CombinedPricing = () => {
  return (
    <>
      {/* ===== Impresiones Section Start ===== */}
      <section id="impresiones" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Section Title */}
          <SectionHeader
            headerInfo={{
              title: "Lo que ofrecemos",
              subtitle: "Impresiones",
              description: `Nota: En engargolados tamaño oficio, agregar $7 pesos más el precio normal.`,
            }}
          />
          {/* Pricing Table */}
          <div className="mt-12.5 lg:mt-15 xl:mt-20">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-300 px-4 py-2">Máximo Hojas</th>
                    <th className="border border-gray-300 px-4 py-2">Medida</th>
                    <th className="border border-gray-300 px-4 py-2">Precio Unitario</th>
                  </tr>
                </thead>
                <tbody>
                  {impresionesData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="border border-gray-300 px-4 py-2">{item.maxSheets}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.size}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Impresiones Section End ===== */}

      {/* ===== Empastado Section Start ===== */}
      <section id="binding-pricing" className="py-20 lg:py-25 xl:py-30 bg-gray-50">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Section Title */}
          <SectionHeader
            headerInfo={{
              title: "Empastado",
              subtitle: "",
              description: `Ofrecemos servicios de empastado de alta calidad en Copia Express León. Puedes elegir entre pasta dura y pasta blanda, con precios competitivos para todas las cantidades.`,
            }}
          />
          {/* Binding Pricing */}
          <div className="mt-12.5 lg:mt-15 xl:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bindingData.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-300 p-6 rounded-md shadow-sm bg-white"
                >
                  <h3 className="text-xl font-semibold text-red-700 mb-4">{item.type}</h3>
                  <ul className="space-y-2">
                    {item.prices.map((priceInfo, i) => (
                      <li key={i} className="flex justify-between text-gray-800">
                        <span>{priceInfo.quantity}:</span>
                        <span>{priceInfo.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center text-red-700 font-semibold">
              <p>MÁXIMO 200 HOJAS</p>
              <p className="text-sm font-normal">
                (Preguntar por el precio extra si son más hojas)
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Empastado Section End ===== */}
    </>
  );
};

export default CombinedPricing;
