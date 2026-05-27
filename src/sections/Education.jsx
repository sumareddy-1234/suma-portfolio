import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering (Data Science)",
    institution: "Aditya Engineering College, Surampalem",
    duration: "2023 — 2027",
  },

  {
    degree: "Board of Intermediate Education, Andhra Pradesh",
    institution: "Narayana Junior College, Rajahmundry",
    duration: "2021 — 2023",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#050816] px-6 py-32"
    >

      {/* BACKGROUND */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-600/10 blur-[120px] rounded-full" />

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

          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-cyan-400 to-violet-500">
            Education
          </h2>

        </motion.div>

        {/* TIMELINE */}
        <div className="relative border-l border-white/10 pl-10 space-y-14">

          {/* GLOW LINE */}
          <div className="absolute top-0 left-[-1px] w-[2px] h-full bg-gradient-to-b from-violet-500 to-cyan-400" />

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="relative"
            >

              {/* DOT */}
              <div className="absolute -left-[49px] top-4 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_25px_#06b6d4]" />

              {/* CARD */}
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400/30 transition duration-300">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                  <div>
                    <h3 className="text-2xl font-semibold text-white leading-relaxed">
                      {item.degree}
                    </h3>

                    <p className="mt-3 text-cyan-400">
                      {item.institution}
                    </p>
                  </div>

                  <p className="text-gray-400 whitespace-nowrap">
                    {item.duration}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;