import TechCard from '../components/TechCard';
const AboutSection = () => {
  return (
    <section id="about" className="px-8 py-16 md:px-16 bg-[#0a1020] border-t border-slate-800">
      <div className="mx-auto max-w-6xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — About text */}
          <div>
            <p className="text-emerald-600 text-xs font-semibold tracking-widest mb-3">
              ABOUT
            </p>
            <h2 className="text-white text-3xl font-bold mb-6">
              Built for the group's road trip
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              LitroGo was built to take the stress out of fuel math before every road trip.
              No accounts, no sign-ups, no unnecessary extras just enter your trip details
              and get your answer in seconds.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Powered by the <span className="text-slate-300 font-medium">MERN stack</span> and <span className="text-slate-300 font-medium">OpenRouteService</span> for distance
              calculation, with gas prices refreshed weekly from <span className="text-slate-300 font-medium">DOE Philippines</span> advisories.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Spotted a bug or got an idea? Open an issue on GitHub.
            </p>

            <a
              href="https://github.com/Leficios12/litro-go"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white text-sm font-medium px-6 py-3 rounded-xl transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              View on GitHub
            </a>
          </div>

          {/* Right — Tech stack */}
          <div>
            <p className="text-emerald-600 text-xs font-semibold tracking-widest mb-6">
              TECH STACK
            </p>
            <div className="grid grid-cols-2 gap-3">
              <TechCard header="MongoDB" text="Weekly fuel prices"/>
              <TechCard header="Express.js" text="API backend"/>
              <TechCard header="React" text="Frontend"/>
              <TechCard header="Node.js" text="Server runtime"/>
              <TechCard header="OpenRouteService" text="Distance + autocomplete"/>
              <TechCard header="Tailwind CSS" text=""/>
              <TechCard header="Leaflet.js" text="Interactive map"/>
            </div>
             
          </div>

        </div>
      </div>
    </section>
  )
};

export default AboutSection;