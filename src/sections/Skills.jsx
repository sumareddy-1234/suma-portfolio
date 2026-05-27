import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "React Native",
    ],
  },

  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },

  {
    title: "Databases",
    skills: [
      "MongoDB",
      "SQL",
    ],
  },

  {
    title: "Programming Languages",
    skills: [
      "Python",
      "Java",
      "C",
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "VS Code",
      "Jupyter Notebook",
      "Streamlit",
    ],
  },

  {
    title: "AI & Data",
    skills: [
      "Data Analytics",
      "Data Visualization",
      "Machine Learning",
      "Deep Learning",
      "Power BI",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] px-6 py-32"
    >

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-violet-600/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >

          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Skills &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
              {" "}Technologies
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl leading-relaxed">
            Technologies and tools I use to build scalable applications,
            modern interfaces, and intelligent digital experiences.
          </p>

        </motion.div>

        {/* SKILL GROUPS */}
        <div className="space-y-16">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >

              {/* CATEGORY */}
              <div className="flex items-center gap-4 mb-8">

                <h3 className="text-2xl md:text-3xl font-semibold text-white whitespace-nowrap">
                  {group.title}
                </h3>

                <div className="w-full h-[1px] bg-gradient-to-r from-white/20 to-transparent" />

              </div>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-4">

                {group.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-gray-200 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition duration-300"
                  >
                    {skill}
                  </motion.div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;