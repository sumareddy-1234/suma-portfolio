import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Form Submitted");

    setLoading(true);
    setErrorMessage("");

    emailjs.sendForm(
        "service_yw8270g",
        "template_m238rsk",
        formRef.current,
        "JI2KYbfOnjHZSwrPl"
    )
      .then(
        (result) => {
          console.log("SUCCESS", result.text);

          setLoading(false);
          setSuccess(true);

          formRef.current.reset();

          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },

        (error) => {
          console.log("FAILED", error);

          setLoading(false);

          setErrorMessage(
            "Something went wrong. Please try again."
          );
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-[#050816] px-6 py-32 overflow-hidden"
    >

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-violet-600/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400 mb-16"
        >
          Let’s Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >

            <p className="text-gray-300 text-lg leading-relaxed">
              I’m open to opportunities, collaborations,
              and building impactful digital products.
            </p>

            {/* CONTACT LINKS */}
            <div className="space-y-4">

              <a
                href="mailto:sumareddy.satti@gmail.com"
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300"
              >
                <FaEnvelope className="text-cyan-400 text-xl" />

                <span className="text-gray-200">
                  sumareddy.satti@gmail.com
                </span>
              </a>

              <a
                href="https://github.com/sumareddy-1234"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300"
              >
                <FaGithub className="text-cyan-400 text-xl" />

                <span className="text-gray-200">
                  GitHub
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/suma-satti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300"
              >
                <FaLinkedin className="text-cyan-400 text-xl" />

                <span className="text-gray-200">
                  LinkedIn
                </span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300"
              >
                <FaFilePdf className="text-cyan-400 text-xl" />

                <span className="text-gray-200">
                  Resume
                </span>
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}

            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: 0.7 }}

            className="space-y-5"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 transition"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 transition"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 transition resize-none"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 font-semibold text-white hover:scale-[1.02] transition duration-300 shadow-lg shadow-cyan-500/20"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* SUCCESS */}
            {success && (
              <p className="text-green-400 text-sm">
                Message sent successfully ✔
              </p>
            )}

            {/* ERROR */}
            {errorMessage && (
              <p className="text-red-400 text-sm">
                {errorMessage}
              </p>
            )}

          </motion.form>

        </div>
      </div>
    </section>
  );
}

export default Contact;