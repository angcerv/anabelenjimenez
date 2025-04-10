import { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa6";
import introPic from '../../../public/images/perfil_1.jpeg';
import cvFile from '../../../public/pdfFiles/CV_Ana_Belen_Jimenez_Pajuelo.pdf';

const Introduction = () => {
  const [copied, setCopied] = useState(false);
  
  const handleCopyEmail = () => {
    const email = 'anabjipa@hotmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="font-outfit flex flex-col md:flex-row items-center justify-center mt-6 py-6 w-full">
      <section className="text-center md:text-left md:w-1/2">
        <h1 className="text-[#BD9C86] text-4xl font-bold leading-tight mb-4">
          Ana Belén Jiménez Pajuelo
        </h1>
        <p className="text-[#333] font-bold text-2xl leading-relaxed mb-4">
          Finanzas y Contabilidad
        </p>
        <p className="text-gray-500 md:text-justify leading-relaxed mt-4 mb-7 max-w-md md:max-w-lg mx-auto">
          Graduada en Finanzas y Contabilidad con más de 8 años trabajando en contabilidad y gestión financiera. Emprendedora y creadora de PARANØLVIDAR, empresa organizadora de bodas y eventos.
        </p>

        <button
          onClick={handleCopyEmail}
          className="cursor-pointer bg-[#BD9C86] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-[#a6856d] transition duration-200 mb-4 hover:scale-102 active:scale-98"
        >
          {copied ? '¡Correo copiado!' : '¡Hablemos!'}
        </button>

        <div className="flex flex-wrap items-center gap-4 mt-7 justify-center md:justify-start">
          <p className="text-[#333] text-md">Echa un vistazo a:</p>

          <a
            href="https://www.linkedin.com/in/ana-belén-jiménez-pajuelo-157376129/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border-2 border-[#0077b5] text-[#0077b5] font-bold text-md md:text-xs py-2 px-3 rounded-lg shadow-md hover:text-[#005f8b] transition duration-100 transform hover:scale-102 active:scale-98"
          >
            <FaLinkedin className="mr-0 md:mr-2" />
            <span className="hidden md:inline">LinkedIn</span>
          </a>

          <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border-2 border-[#BD9C86] text-[#BD9C86] text-xs font-bold py-2 px-3 rounded-lg shadow-md hover:text-[#a0806a] transition duration-100 hover:scale-102 active:scale-98"
          >
            <FaDownload className="mr-0 md:mr-2" />
            <span className="ml-1 md:ml-0">CV</span>
          </a>
        </div>
      </section>

      <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden mt-10 md:mt-0 md:ml-10">
        <img src={introPic} alt="Perfil Ana Belén" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Introduction;
