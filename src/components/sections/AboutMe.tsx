import sign from '../../../public/images/sign.png';

const AboutMe = () => {
    return (
      <div className="bg-white py-4 md:py-10 px-4 md:px-0 w-full text-center">
        <h1 className="font-outfit text-[#BD9C86] text-3xl md:text-4xl font-bold mb-8">Sobre Mí</h1>
        <p className="font-dancing text-gray-800 text-md md:text-xl md:max-w-2xl mx-auto leading-relaxed mb-6">
          ¡Hola! Soy Ana Belén, una persona apasionada por el aprendizaje y el crecimiento profesional. Siempre estoy en busca de nuevos retos y oportunidades para formarme, como mi actual máster en análisis financiero. Mi objetivo es seguir evolucionando y aportar mi conocimiento en el sector financiero.
        </p>

        <p className="font-dancing text-gray-800 text-md md:text-xl md:max-w-2xl mx-auto leading-relaxed mb-6">
            Además, soy la creadora de PARANØLVIDAR, una empresa de organización de bodas y eventos a la que le he dedicado todo mi esfuerzo, al ser también otro sector que me apasiona mucho. La mezcla de ambos hace que tenga diferentes enfoques y adaptabilidad.
        </p>

        <p className="font-dancing text-gray-800 text-md md:text-xl md:max-w-2xl mx-auto leading-relaxed mb-6">
            Siempre que se trate de alguno de ellos, no dudes en contactar conmigo.¡Estaré encantada de ayudarte!
        </p>

        <div className="mt-4">
          <img src={sign} alt="Firma de Ana Belén" className="mx-auto w-15 md:w-22 lg:w-30" />
        </div>
      </div>
    );
}

export default AboutMe;
