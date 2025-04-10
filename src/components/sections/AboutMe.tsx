import sign from '../../../public/images/sign.png';

const AboutMe = () => {
    return (
      <div className="bg-white py-10 w-full text-center ">
        <h1 className="font-outfit text-[#BD9C86] text-3xl font-bold mb-8">Sobre Mí</h1>
        <p className="font-belle-aurore text-grey-800 text-xl md:max-w-2xl mx-auto leading-relaxed mb-4">
          ¡Hola! Soy Ana Belén, una persona apasionada por el aprendizaje y el crecimiento profesional. Siempre estoy en busca de nuevos retos y oportunidades para formarme, como mi actual máster en análisis financiero. Mi objetivo es seguir evolucionando y aportar mi conocimiento al sector financiero.
        </p>

        <p className="font-belle-aurore text-grey-800 text-xl md:max-w-2xl mx-auto leading-relaxed mb-4">
          Además, soy la creadora de PARANØLVIDAR, una empresa de organización de bodas y eventos a la que le he dedicado todo mi corazón, porque es algo que realmente me apasiona.
        </p>

        <p className="font-belle-aurore text-grey-800 text-xl md:max-w-2xl mx-auto leading-relaxed mb-4">
          Si estás interesado en mis servicios, no dudes en contactarme.
        </p>
        <p className="font-belle-aurore text-grey-800 text-xl md:max-w-2xl mx-auto leading-relaxed mb-4">
          ¡Estaré encantada de ayudarte!
        </p>

        <div className="mt-4">
          <img src={sign} alt="Firma de Ana Belén" className="mx-auto w-30" />
        </div>
      </div>
    )
}

export default AboutMe;
