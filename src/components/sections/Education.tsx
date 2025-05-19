import { useState } from 'react';
import { FaUniversity, FaCalendarAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface AdditionalInfoCardProps {
  title: string;
  date: string;
  institution: string;
}

const AdditionalInfoCard: React.FC<AdditionalInfoCardProps> = ({ title, date, institution }) => {
  return (
    <div className="border-b-2 border-[#BD9C86] py-2">
      <p><strong>{title}</strong> - {date} - {institution}</p>
    </div>
  );
};

interface EducationCardProps {
  title: string;
  date: string;
  description: string;
  institution: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ title, date, description, institution }) => {
  return (
    <div className="font-outfit max-w-full lg:max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-lg border-2 border-transparent hover:border-[#BD9C86] transition-all duration-300 ease-in-out">

      <div className="flex justify-center bg-[#BD9C86] p-2 rounded-lg mb-4">
        <h2 className="text-lg md:text-xl font-semibold text-white">{title}</h2>
      </div>

      <div className="flex flex-col md:flex-row mb-4 text-gray-700">
        <div className="flex items-center text-sm md:text-base font-bold mb-2 md:mb-0">
          <FaCalendarAlt className="text-[#BD9C86] text-lg md:text-xl mr-2" />
          <p>{date}</p>
        </div>

        <div className="flex items-center text-sm md:text-base font-bold mt-2 md:mt-0">
          <span className="hidden md:block mx-4 text-[#BD9C86]">|</span>
          <FaUniversity className="text-[#BD9C86] text-xl md:text-2xl mr-2" />
          <p>{institution}</p>
        </div>
      </div>

      {/* Descripción */}
      <p className="font-outfit text-gray-500 text-sm md:text-base">{description}</p>
    </div>
  );
};

const Education: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="py-10 w-full border-t-1 border-[#BD9C86] text-center">
      <h1 className="text-[#BD9C86] text-3xl font-bold mb-6">Educación</h1>

      <div className="flex justify-center space-x-6">
        <div className="w-1 bg-[#BD9C86] h-full relative hidden md:block">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-white"></div>
        </div>

        <div className="space-y-8 lg:space-y-6">
        <EducationCard
            title="Máster en Análisis Financiero"
            date="2025-Presente"
            description="Máster en Análisis Financiero y Presupuestario Empresarial más Derecho Tributario y Financiero."
            institution="Educa Business School"
          />
          <EducationCard
            title="Grado en Finanzas y Contabilidad"
            date="2010-2015"
            description="Grado universitario en Finanzas y Contabilidad con una formación integral en el ámbito financiero."
            institution="Universidad de Sevilla"
          />

          <div className="max-w-full lg:max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-lg border-2 border-transparent hover:border-[#BD9C86] transition-all duration-300 ease-in-out">
            <div className="flex justify-center bg-[#BD9C86] p-2 rounded-lg mb-4">
              <h2 className="font-outfit text-lg md:text-xl font-semibold text-white">Formación Adicional</h2>
            </div>

            <AdditionalInfoCard
              title="FACTURACIÓN ELECTRÓNICA"
              date="Octubre 2016"
              institution="CADE"
            />
            <AdditionalInfoCard
              title="PLAN DE NEGOCIOS: MODELO CANVAS"
              date="Noviembre 2016"
              institution="CADE"
            />
            <AdditionalInfoCard
              title="SEGURIDAD SOCIAL EN LA EMPRESA (Como hacer nóminas, dar alta/baja en la Seguridad Social con el Sistema RED y GESContr@...)"
              date="Noviembre 2016"
              institution="CADE"
            />

            <AnimatePresence>
              {showMore && (
                <motion.div
                  className="mt-4 space-y-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <div className="mt-4 space-y-4">
                    <AdditionalInfoCard
                      title="GESTIÓN Y CONTROL ADMINISTRATIVO DE CAJA"
                      date="120h cursadas - 2017"
                      institution="EUROINNOVA International Online Education"
                    />
                    <AdditionalInfoCard
                      title="ESPECIALIZACIÓN EN CONTABILIDAD FINANCIERA"
                      date="250h cursadas - Octubre 2017"
                      institution="Escuela de Negocios y Dirección"
                    />
                    <AdditionalInfoCard
                      title="PREVENCIÓN DE RIESGOS LABORALES"
                      date="Octubre 2018"
                      institution="CADE"
                    />
                    <AdditionalInfoCard
                      title="PLAN DE IGUALDAD EN LA EMPRESA"
                      date="Febrero 2019"
                      institution="CADE"
                    />
                    <AdditionalInfoCard
                      title="REAV (Régimen Especial de Agencias de Viajes)"
                      date="Enero/Febrero 2019"
                      institution="CADE"
                    />
                    <AdditionalInfoCard
                      title="DEA (Uso de desfibriladores y primeros auxilios)"
                      date="Marzo 2019"
                      institution="CADE"
                    />
                    <AdditionalInfoCard
                      title="EXPERTO EN EL IMPUESTO SOBRE EL VALOR AÑADIDO (IVA)"
                      date="100h cursadas - Noviembre/Diciembre 2019"
                      institution="CADE"
                    />
                    <AdditionalInfoCard
                      title="GESTIÓN FISCAL"
                      date="40h cursadas - Septiembre 2020"
                      institution="Grupo IOE"
                    />
                    <AdditionalInfoCard
                      title="MARKETING BÁSICO EN MEDIOS SOCIALES"
                      date="25h cursadas - Diciembre 2020"
                      institution="Grupo IOE"
                    />
                    <AdditionalInfoCard
                      title="MARKETING ONLINE: DISEÑO Y PROMOCIÓN DE SITIOS WEB"
                      date="30h cursadas - Enero/Febrero 2021"
                      institution="Grupo IOE"
                    />
                    <AdditionalInfoCard
                      title="WEDDING PLANNER AND EVENT DESIGNER"
                      date="750h cursadas - Marzo/Julio 2021"
                      institution="ELLE Education / Universidad Complutense de Madrid"
                    />
                    <AdditionalInfoCard
                      title="MARKETING DIGITAL 360º"
                      date="750h cursadas - The Power MBA"
                      institution="The Power MBA"
                    />
                    <AdditionalInfoCard
                      title="MÁSTER EN ANÁLISIS FINANCIERO Y PRESUPUESTARIO EMPRESARIAL + DERECHO TRIBUTARIO Y FINANCIERO"
                      date="1.500h cursando, actualmente"
                      institution="EUROINNOVA International Online Education"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              className="cursor-pointer text-white bg-[#BD9C86] px-4 py-2 rounded-full mt-4 hover:bg-[#9A7A62] transition duration-100 active:scale-98"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Ver menos' : 'Ver más'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
