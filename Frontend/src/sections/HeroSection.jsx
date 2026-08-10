const HeroSection = () => {
  return (
    <section
      id="hero"
      className="px-8 py-16 text-slate-100 md:px-16 md:py-24"
    >
      <div className="" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl space-y-8">
          
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Calculate your <span className="text-emerald-600">trip fuel cost</span> before you leave
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Enter your route, vehicle details, and split the total fairly with your friends. No guessing, no awkward computation after.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#calculator" 
             className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 sm:w-auto"
            >
              Calculate my trip
            </a>
            <a
              href="#how-it-works"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-600 bg-slate-950/70 px-8 py-4 text-sm font-semibold text-slate-100 transition hover:border-slate-400 hover:text-white sm:w-auto"
            >
              How it works
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-700 bg-slate-950/70 p-6 shadow-xl shadow-slate-950/40 backdrop-blur-sm md:p-8">
          <div className="space-y-4">
            <div className="text-sm uppercase tracking-[0.28em] text-slate-400">
              Your next adventure starts here
            </div>
            <div className="rounded-3xl bg-slate-900 p-6 text-slate-200">
              <p className="text-sm text-slate-400">Example route</p>
              <p className="mt-3 text-2xl font-semibold text-white">Manila → Tagaytay</p>
              <p className="mt-1 text-sm text-slate-400">18 L average trip fuel cost estimate</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900 p-4 text-sm">
                <p className="text-slate-400">Fuel price</p>
                <p className="mt-2 text-xl font-semibold text-emerald-400">₱68 / L</p>
              </div>
              <div className="rounded-3xl bg-slate-900 p-4 text-sm">
                <p className="text-slate-400">Group split</p>
                <p className="mt-2 text-xl font-semibold text-white">Fair & easy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
