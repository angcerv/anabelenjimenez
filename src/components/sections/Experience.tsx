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
      <div className="flex">
        <div className="w-2 bg-[#7c7f58] mr-4 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-white"></div>
        </div>
        <div className="flex-1">
          <div className="flex justify-center bg-[#7c7f58] p-2 rounded-lg mb-4">
            <h2 className="font-outfit text-lg font-semibold text-white">{title}</h2>
          </div>

          <div className="flex mb-4 text-gray-700">
            <div className="flex text-sm font-bold">
              <FaCalendarAlt className="text-[#7c7f58] text-md mr-2" />
              <p>{date}</p>
            </div>

            <div className="flex text-sm font-bold">
              <span className="mx-4 text-[#7c7f58]">|</span>
              <FaBriefcase className="text-[#7c7f58] text-xl mr-2" />
              <p>{place}</p>
            </div>
          </div>

          <p className="font-outfit text-gray-500 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <div className="py-10 w-full border-t-2 border-[#7c7f58] text-center">
      <h1 className="text-[#7c7f58] text-3xl font-bold mb-6">Experiencia</h1>
      <div className="space-y-8">
        <ExperienceCard
          title="Controller Finance"
          place="LEAN FINANCE, S.L."
          date="2025-Presente"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam dignissim elementum. Maecenas a ex tellus."
        />
        <ExperienceCard
          title="Departamento de nudos (contabilidad)"
          place="Asset Management"
          date="2024-2025"
          description="Trabajando en la gestión de activos y contabilidad dentro del departamento de nudos."
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
