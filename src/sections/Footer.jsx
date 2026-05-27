function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050816] border-t border-white/10 px-6 py-8">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-violet-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          {/* LEFT */}
          <p className="text-gray-500 text-sm">
            Crafted with React, Tailwind CSS & modern UI design.
          </p>

          {/* CENTER */}
          <p className="text-gray-600 text-sm md:absolute md:left-1/2 md:-translate-x-1/2">
            © 2026 All Rights Reserved
          </p>

          {/* RIGHT */}
          <div className="flex justify-end">
            <a
              href="#home"
              className="text-sm text-gray-400 hover:text-cyan-400 transition duration-300"
            >
              Return Home ↑
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;