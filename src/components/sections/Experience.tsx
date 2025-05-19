import { FaCalendarAlt, FaBriefcase } from 'react-icons/fa';

interface ExperienceProps {
  title: string;
  place: string;
  date: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceProps> = ({ title, place, date, description }) => {
  return (
    <div className="max-w-xl mx-auto bg-white p-4 rounded-lg shadow-lg border-2 border-transparent hover:border-[#7c7f58] transition-all duration-300 ease-in-out">
      <div className="flex flex-col md:flex-row">
        <div className="hidden md:block w-2 bg-[#7c7f58] mr-4 md:relative md:w-3 md:mr-6">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-white md:w-3 md:h-3"></div>
        </div>
        <div className="flex-1">
          <div className="flex justify-center bg-[#7c7f58] p-2 rounded-lg mb-4">
            <h2 className="font-outfit text-lg font-semibold text-white">{title}</h2>
          </div>

          <div className="flex flex-col md:flex-row mb-4 text-gray-700">
            <div className="flex items-center text-sm font-bold mb-2 md:mb-0">
              <FaCalendarAlt className="text-[#7c7f58] text-md mr-2" />
              <p>{date}</p>
            </div>

            <div className="flex items-center text-sm font-bold md:mr-2 mb-2 md:mb-0">
              <span className="hidden md:flex mx-4 text-[#7c7f58]">|</span>
              <FaBriefcase className="text-[#7c7f58] text-xl mr-2" />
              <p>{place}</p>
            </div>
          </div>

          <p className="font-outfit text-gray-500 text-sm md:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <div className="py-10 w-full border-t-2 border-[#7c7f58] text-center">
      <h1 className="text-[#7c7f58] text-3xl font-bold mb-6">Experiencia</h1>
      <div className="space-y-8 md:space-y-6">
        <ExperienceCard
          title="Controller Finance"
          place="LEAN FINANCE, S.L."
          date="2025-Presente"
          description="Ayudamos a Startups y Pymes en llevar un control del área financiera, toma de decisiones estratégicas y ahorro en costes."
        />
        <ExperienceCard
          title="Departamento de nudos (contabilidad)"
          place="Asset Management"
          date="2024-2025"
          description="Responsable de la contabilidad para un grupo de empresas, que abarcan diferentes sectores, desde la educación hasta una agencia de viajes."
        />
        <ExperienceCard
          title="Wedding Planner y Event Designer"
          place="PARANØLVIDAR"
          date="2021-2025"
          description="Creadora y organizadora de bodas y eventos, diseñando momentos únicos y especiales."
        />
        <ExperienceCard
          title="Departamento de contabilidad en un grupo de empresas"
          place="PROYECTO GAC 2020, S.L."
          date="2016-2024"
          description="Responsable de la contabilidad para un grupo de empresas dentro de la división de contabilidad."
        />
        <ExperienceCard
          title="Departamento de contabilidad"
          place="INFICON Asesores Empresariales, S.L."
          date="2016"
          description="Soporte en el departamento de contabilidad, gestionando los registros financieros."
        />
      </div>
    </div>
  );
};

export default Experience;
