export default function CoreTechnologies() {
  return (
    <section
      id="core-technologies"
      className="py-24 px-6
                 bg-white dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
                 text-gray-900 dark:text-white transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold text-sm mb-2">
            Technologies
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Core Technologies
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I regularly use when building and deploying real-world
            applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Languages */}
          <div className="p-8 rounded-xl border border-gray-200 dark:border-slate-700
                          bg-gray-50 dark:bg-slate-900/60 backdrop-blur-sm
                          shadow-md dark:shadow-[0_0_20px_rgba(14,165,233,0.05)]">
            <h3 className="text-xl font-semibold mb-4 text-cyan-600 dark:text-cyan-400">
              Languages
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              HTML · CSS · JavaScript · TypeScript · Python
            </p>
          </div>

          {/* Frontend */}
          <div className="p-8 rounded-xl border border-gray-200 dark:border-slate-700
                          bg-gray-50 dark:bg-slate-900/60 backdrop-blur-sm
                          shadow-md dark:shadow-[0_0_20px_rgba(14,165,233,0.05)]">
            <h3 className="text-xl font-semibold mb-4 text-cyan-600 dark:text-cyan-400">
              Frontend
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              React · Tailwind CSS
            </p>
          </div>

          {/* Backend */}
          <div className="p-8 rounded-xl border border-gray-200 dark:border-slate-700
                          bg-gray-50 dark:bg-slate-900/60 backdrop-blur-sm
                          shadow-md dark:shadow-[0_0_20px_rgba(14,165,233,0.05)]">
            <h3 className="text-xl font-semibold mb-4 text-cyan-600 dark:text-cyan-400">
              Backend
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Node.js · Express · Flask
            </p>
          </div>

          {/* Systems & Deployment */}
          <div className="p-8 rounded-xl border border-gray-200 dark:border-slate-700
                          bg-gray-50 dark:bg-slate-900/60 backdrop-blur-sm
                          shadow-md dark:shadow-[0_0_20px_rgba(14,165,233,0.05)]">
            <h3 className="text-xl font-semibold mb-4 text-cyan-600 dark:text-cyan-400">
              Systems & Deployment
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              REST APIs · Client–Server Architecture · Networked Systems ·
              Vercel · Render
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
