import React from 'react';
import ev1 from '../../../public/images/pno_event_1.jpg';
import ev2 from '../../../public/images/pno_event_2.jpg';
import ev3 from '../../../public/images/pno_event_3.jpg';
import ev4 from '../../../public/images/pno_event_4.jpg';

import { FaInstagram } from "react-icons/fa6";

const ProjectParaNoOlvidar: React.FC = () => {
  return (
    <section id="paranovlvidar" className="font-outfit py-10 md:py-20 px-6 md:px-16 lg:px-32 bg-[#F9F7F4] text-[#333] shadow-md">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#BD9C86] mb-6">PARANØLVIDAR</h2>
        
        <p className="text-lg text-center mb-10">
          "PARANØLVIDAR" es una empresa dedicada a la organización de bodas y eventos. Nos especializamos en crear momentos únicos y personalizados para cada cliente, asegurándonos de que cada detalle sea perfecto. Desde la planificación hasta la ejecución, nos encargamos de todo para que tú solo te preocupes de disfrutar.
        </p>

        {/* Grid responsive de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <img src={ev1} alt="Evento 1" className="w-full h-auto rounded-lg shadow-lg transform duration-200 hover:scale-105" />
          <img src={ev2} alt="Evento 2" className="w-full h-auto rounded-lg shadow-lg transform duration-200 hover:scale-105" />
          <img src={ev3} alt="Evento 3" className="w-full h-auto rounded-lg shadow-lg transform duration-200 hover:scale-105" />
          <img src={ev4} alt="Evento 4" className="w-full h-auto rounded-lg shadow-lg transform duration-200 hover:scale-105" />
        </div>

        {/* Enlaces y botones */}
        <div className="flex flex-col items-center justify-center gap-4 mt-7">
          <a
            href="https://paranolvidar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-2 rounded-full text-[#BD9C86] border-2 border-[#BD9C86] font-semibold shadow-md hover:shadow-lg transition duration-300 ease-in-out hover:scale-102 hover:text-[#a0806a] active:scale-98"
          >
            Visitar Sitio Web
          </a>
          <div className="flex items-center gap-3 mt-3">
            <p className="font-poppins text-[#333] text-sm">
              Síguenos en:
            </p>
            <a
              href="https://www.instagram.com/paranolvidar_?igsh=NnFtc29neGVpYXJw" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white font-semibold text-xs px-3 py-1 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-102 active:scale-98"
              style={{
                background: 'linear-gradient(45deg, #E1306C, #FDCB82)',
              }}>
              <FaInstagram className="mr-2" /> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectParaNoOlvidar;
