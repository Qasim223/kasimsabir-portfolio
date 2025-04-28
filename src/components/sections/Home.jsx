import { RevealOnsScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnsScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Kasim Sabir
          </h1>
          <p className="text-grey-400 text-lg mb-8 max-w-lg mx-auto">
            A passionate Fullstack Angular Developer with a strong drive for
            continuous learning and growth. Skilled in building dynamic,
            responsive web applications using Angular, along with solid backend
            expertise. Always eager to explore new technologies, deepen existing
            knowledge, and deliver high-quality solutions through innovation and
            dedication.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overlfow-hidden hover:-translate-y-0.5 hover:shadow-[0)0)15px_rgba(59, 130 , 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0)0)15px_rgba(59, 130 , 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnsScroll>
    </section>
  );
};
