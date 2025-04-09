import { useState } from 'react';
import { FaDownload } from 'react-icons/fa'; // Importa los íconos
import { FaLinkedin } from "react-icons/fa6";
import introPic from '../../../public/images/perfil_1.jpeg';
import cvFile from '../../../public/pdfFiles/CV_Ana_Belen_Jimenez_Pajuelo.pdf'; // Asegúrate de tener el archivo PDF

const Introduction = () => {
  const [copied, setCopied] = useState(false);
  
  const handleCopyEmail = () => {
    const email = 'anabelen@email.com'; // Cambia este correo por el que quieras
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Mensaje de copia temporal
    });
  };

  return (
    <div className="font-outfit flex items-center justify-center mt-6 py-6 w-full">
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

        {/* Botón de contacto */}
        <button
          onClick={handleCopyEmail}
          className="cursor-pointer bg-[#BD9C86] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-[#a6856d] transition duration-300 mb-4"
        >
          {copied ? '¡Correo copiado!' : '¡Hablemos!'}
        </button>

        {/* Texto y botones de LinkedIn y descarga de CV */}
        <div className="flex items-center gap-4 mt-7">
          <p className="text-[#333] text-md">
            Echa un vistazo a:
          </p>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/ana-belen-jimenez-pajuelo/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border-2 border-[#0077b5] text-[#0077b5] font-bold text-xs py-2 px-4 rounded-lg shadow-md hover:text-[#005f8b] transition duration-200 transform hover:scale-102"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>

          {/* Descargar CV Button */}
          <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border-2 border-[#BD9C86] text-[#BD9C86] text-xs font-bold py-2 px-4 rounded-lg shadow-md hover:text-[#a0806a] transition duration-200"
          >
            <FaDownload className="mr-2" /> Descargar mi CV
          </a>
        </div>
      </section>

      {/* Imagen de perfil */}
      <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden mt-10 md:mt-0 md:ml-10">
        <img src={introPic} alt="Perfil Ana Belén" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Introduction;
