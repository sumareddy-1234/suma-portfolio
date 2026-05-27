import { motion } from "framer-motion";

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050816] px-6 py-32"
    >

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-violet-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
              Experience
            </span>
          </h2>

        </motion.div>

        {/* TIMELINE */}
        <div className="relative border-l border-white/10 pl-10">

          {/* GLOW LINE */}
          <div className="absolute top-0 left-[-1px] w-[2px] h-full bg-gradient-to-b from-violet-500 to-cyan-400" />

          {/* EXPERIENCE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            {/* TIMELINE DOT */}
            <div className="absolute -left-[49px] top-4 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_25px_#06b6d4]" />

            {/* CARD */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400/30 transition duration-300">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Full Stack Development with React Native Intern
                  </h3>

                  <p className="mt-2 text-cyan-400">
                    Technical Hub Private Limited
                  </p>
                </div>

                <p className="text-gray-400">
                  May 2025 — June 2025
                </p>

              </div>

              <p className="mt-8 text-gray-300 leading-relaxed text-lg">
                Contributed to backend development for StartWise AI by working on scalable APIs, server-side functionality, database integration, and AI-driven application workflows within a modern full-stack architecture.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Experience;