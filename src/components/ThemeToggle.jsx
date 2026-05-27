import { useEffect, useState } from "react"
import { FiMoon, FiSun } from "react-icons/fi"

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "light") {
      document.documentElement.classList.add("light")
      setDarkMode(false)
    }
  }, [])

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.add("light")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.remove("light")
      localStorage.setItem("theme", "dark")
    }

    setDarkMode(!darkMode)
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-xl hover:text-cyan-400 transition"
    >
      {darkMode ? <FiSun /> : <FiMoon />}
    </button>
  )
}

export default ThemeToggle