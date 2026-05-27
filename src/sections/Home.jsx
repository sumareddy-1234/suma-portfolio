import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden px-6 bg-[#050816]"
    >

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* GLOW EFFECTS */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-violet-600/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >

          

          <p className="text-cyan-400 text-lg mb-4">
            Hi, I’m
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Satti{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
              Suma
            </span>
          </h1>

          {/* ROLE */}
          <div className="text-2xl md:text-4xl font-semibold mb-6 h-20 text-white">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2500,
                "Building AI-Powered Applications",
                2500,
                "Designing Scalable Digital Products",
                2500,
              ]}
              speed={60}
              repeat={Infinity}
            />
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-8">
            I build modern full-stack applications and explore AI-driven
            experiences to create clean, functional, and user-focused products.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">

            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20">
              Explore My Work
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300"
            >
              View Resume
            </a>

          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >

          {/* OUTER GLOW */}
          <div className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 blur-3xl opacity-30 animate-pulse" />

          {/* MAIN GLASS */}
          <div className="relative w-[300px] h-[300px] rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">

            {/* INNER RING */}
            <div className="absolute inset-6 rounded-full border border-white/10" />

            {/* CENTER DOT */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_25px_#06b6d4]" />
            </div>

          </div>

          {/* FLOATING CARDS */}
          <div className="absolute top-10 -left-6 px-4 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <p className="text-sm text-gray-300">
              React + Node.js
            </p>
          </div>

          <div className="absolute bottom-10 -right-6 px-4 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <p className="text-sm text-gray-300">
              AI-driven Features
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Home;