import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "StartWise AI",

    description:
        "AI-powered co-founder platform helping startups validate ideas, generate execution roadmaps, simulate AI VC interactions, and improve investor readiness.",

    tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Framer Motion",
        "AI Workflows",
    ],

    live: "https://start-wise-ai.vercel.app/",

    github: "https://github.com/GangadharPrathap/StartWise--AI",
  },

  {
    title: "Campus Notify",

    description:
      "Centralized campus communication platform designed to streamline internship updates, hackathons, technical events, cultural activities, and student opportunities through a clean and accessible web experience.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Frontend Development",
    ],

    live: "https://sumareddy-1234.github.io/CampusNotify/",

    github: "https://github.com/sumareddy-1234/CampusNotify",
  },

  {
    title: "AirFly Insights",

    description:
      "Interactive airline analytics platform transforming raw flight operations data into actionable insights through data visualization, trend analysis, predictive modeling, and Streamlit-powered dashboards.",

    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Plotly",
      "Streamlit",
      "Scikit-learn",
      "Data Visualization",
      "Machine Learning",
    ],

    live: "https://airfly-insights-wutz4r573vksss3wscbgjo.streamlit.app/",

    github: "https://github.com/sumareddy-1234/AirFly-Insights",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] px-6 py-32"
    >

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-violet-600/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-cyan-400 to-violet-500">
            Projects
          </h2>

        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
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

              <div className="relative z-10">

                {/* TOP */}
                <div className="flex items-center justify-between mb-8">

                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">

                    <FiArrowUpRight className="text-cyan-400 text-xl" />

                  </div>

                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-3 mb-10">

                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap items-center gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300"
                  >

                    <FiGithub />

                    <span>GitHub</span>

                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="px-5 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 font-medium hover:scale-105 transition duration-300"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;