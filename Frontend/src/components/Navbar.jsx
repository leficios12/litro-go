

const baseStyle = "text-m font-medium text-slate-300 hover:text-white transition-colors duration-200"

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a] border-b-5 border-[#1e293b] h-35 py-4">
      <div className="max-w-7xl mx-auto px-10 py-2 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img src="/images/LitroGOLogo.png" alt="LitroGo" className="h-20" />
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-20">
          <a href="#how-it-works" className={baseStyle}>
            How it works
          </a>
          <a href="#calculator" className={baseStyle}>
            Calculator
          </a>
          <a href="#about" className={baseStyle}>
            About
          </a>
          <a href="https://github.com/Leficios12" target="_blank" rel="noreferrer" className={baseStyle}>
            Github
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;