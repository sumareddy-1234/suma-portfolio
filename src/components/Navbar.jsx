import { useState, useEffect } from "react"
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"
import { Link } from "react-scroll"
import ThemeToggle from "./ThemeToggle"

const navLinks = [
  "home",
  "about",
  "skills",
  "experience",
  "education",
  "projects",
  "certifications",
  "achievements",
  "contact",
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <h1 className="text-2xl font-bold gradient-text">
            Satti Suma
          </h1>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link}
                smooth={true}
                duration={500}
                offset={-80}
                className="capitalize text-sm cursor-pointer hover:text-cyan-400 transition"
              >
                {link}
              </Link>
            ))}

            <ThemeToggle />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden glass mx-4 mb-4 rounded-2xl p-6">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className="capitalize cursor-pointer"
              >
                {link}
              </Link>
            ))}

            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar