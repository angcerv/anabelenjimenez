import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Introduction from './sections/Introduction';
import AboutMe from './sections/AboutMe';
import Experience from './sections/Experience';
import Education from './sections/Education';
import ProjectParaNoOlvidar from './sections/ProjectParaNoOlvidar';

const ScrollSections = () => {
  const [clickedSection, setClickedSection] = useState<string | null>(null);

  const { ref: introRef, inView: introInView } = useInView({ triggerOnce: false });
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: false });
  const { ref: experienceRef, inView: experienceInView } = useInView({ triggerOnce: false });
  const { ref: educationRef, inView: educationInView } = useInView({ triggerOnce: false });
  const { ref: paranolvidarRef, inView: paranolvidarInView } = useInView({ triggerOnce: false });

  const activeSection = introInView
    ? 'intro'
    : aboutInView
    ? 'about'
    : experienceInView
    ? 'experience'
    : educationInView
    ? 'education'
    : paranolvidarInView
    ? 'paranolvidar'
    : '';

  const handleNavClick = (sectionId: string) => {
    setClickedSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionMotionProps = (id: string, inView: boolean) => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: inView || clickedSection === id ? 1 : 0, y: inView || clickedSection === id ? 0 : 50 },
    transition: { duration: 0.8 },
  });

  return (
    <div className="font-outfit w-full bg-[#F2F1F0] text-[#333]">
      <header className="fixed top-0 left-0 w-full bg-[#F2F1F0] shadow-md z-50">
        <nav className="flex justify-center space-x-8 py-4 flex-wrap">
          {[
            ['intro', 'Inicio'],
            ['about', 'Sobre mí'],
            ['experience', 'Experiencia'],
            ['education', 'Formación'],
            ['paranolvidar', 'PARANØLVIDAR'],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`hover:text-[#BD9C86] transition-colors font-semibold cursor-pointer active:text-[#a0806a] active:scale-98 ${
                activeSection === id ? 'text-[#BD9C86]' : ''
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      <main className="pt-24 space-y-24 px-6 sm:px-12 md:px-16 lg:px-32">
        <motion.section id="intro" ref={introRef} className="scroll-mt-24" {...sectionMotionProps('intro', introInView)}>
          <Introduction />
        </motion.section>

        <motion.section id="about" ref={aboutRef} className="scroll-mt-24" {...sectionMotionProps('about', aboutInView)}>
          <AboutMe />
        </motion.section>

        <motion.section id="experience" ref={experienceRef} className="scroll-mt-24" {...sectionMotionProps('experience', experienceInView)}>
          <Experience />
        </motion.section>

        <motion.section id="education" ref={educationRef} className="scroll-mt-24" {...sectionMotionProps('education', educationInView)}>
          <Education />
        </motion.section>

        <motion.section id="paranolvidar" ref={paranolvidarRef} className="scroll-mt-24" {...sectionMotionProps('paranolvidar', paranolvidarInView)}>
          <ProjectParaNoOlvidar />
        </motion.section>
      </main>
    </div>
  );
};

export default ScrollSections;
