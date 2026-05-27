import { motion } from "framer-motion";
import { FaAward, FaLightbulb } from "react-icons/fa";

const achievements = [
  {
    icon: <FaAward />,
    title: "Merit Recognition — Poster Presentation Competition",
    event: "VEDA 2K23 National Level Technical Symposium",
    description:
      "Presented a technical poster focused on the evolution of mobile technologies, applications, and modern digital innovations during Engineers Day 2023.",

    certificate:
      "/certificates/poster-presentation-certificate.webp",
  },

  {
    icon: <FaLightbulb />,
    title: "Round 1 Qualifier — Tata Imagination Challenge 2025",
    event: "National Innovation Challenge by Tata Group",
    description:
      "Qualified the Tata Quiz Round in Tata Imagination Challenge 2025 through analytical thinking, critical reasoning, and problem-solving assessment.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-[#050816] px-6 py-32"
    >

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-cyan-400 to-violet-500">
            Achievements
          </h2>

        </motion.div>

        {/* ACHIEVEMENT CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {achievements.map((item, index) => (
            <motion.div
              key={index}

              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}

              whileHover={{
                y: -8,
              }}

              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden"
            >

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-violet-500/10 to-cyan-400/10" />

              {/* ICON */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center text-2xl text-white shadow-lg shadow-cyan-500/20">

                {item.icon}

              </div>

              {/* CONTENT */}
              <div className="relative z-10 mt-8">

                <h3 className="text-2xl font-semibold text-white leading-relaxed">
                  {item.title}
                </h3>

                <p className="mt-4 text-cyan-400">
                  {item.event}
                </p>

                <p className="mt-6 text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                {/* CERTIFICATE BUTTON */}
                {item.certificate && (
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex mt-8 px-5 py-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/20 transition duration-300"
                  >
                    View Certificate
                  </a>
                )}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;