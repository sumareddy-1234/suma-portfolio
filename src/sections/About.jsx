import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center relative overflow-hidden px-6 bg-[#050816]"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-600/20 blur-[120px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-5xl mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-white"
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
            Me
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >

          <p className="text-2xl md:text-3xl leading-relaxed text-gray-200 font-light">
            I build modern full-stack applications focused on clean interfaces,
            scalable architecture, and seamless user experiences.
          </p>

          <p className="mt-10 text-lg leading-relaxed text-gray-400 max-w-4xl">
            I enjoy learning through hands-on development, continuously improving
            my technical skills, and exploring how intelligent features can enhance
            modern digital products and user experiences.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default About;