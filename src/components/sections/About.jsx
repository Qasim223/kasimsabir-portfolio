import { RevealOnsScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["Angular", "TypeScript", "Bootstrap", "TailwindCSS", "ReactNative", "React"];

  const backendSkills = ["SQL", ".NET8", "MongoDB", "SupaBase", "Python", "FastAPI", "C#"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnsScroll>
        <div className="max-w-3xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-grey-300 mb-6">
              Passionate developer, who loves to create scalable web
              applications that make a difference.
            </p>
          </div>

          <div className="grid gird-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">FrontEnd</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">BackEnd</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-grey-300 space-y-2">
                <li>
                  <strong>BTECH in Information Technology</strong> - Barking and
                  Dagenham College (2015-2017)
                </li>
                <li>Relevant Coursework: Web Development, Netowrking</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏢 Work Experience</h3>
              <div className="space-y-4 text-grey-300">
                <div>
                  <h4 className="font-semibold">
                    Software Developer at Logma Systems Design Ltd (2023 -
                    Present)
                  </h4>
                  <p>developed and maintained web based applications</p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    IT Support at Lawware Ltd (2022 - 2023)
                  </h4>
                  <p>
                    Supporting internally developed applicartion, while also
                    support Azure Servers and Hosted Servers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnsScroll>
    </section>
  );
};
