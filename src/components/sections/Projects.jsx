import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Ekrem's Store</h3>
              <p className="text-gray-400 mb-3">
                A fast, modern, and responsive e-commerce application built with
                Next.js, Shadcn UI, TailwindCSS, Zustand, and Stripe.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TailwindCSS",
                  "Shadcn/UI",
                  "Zustand",
                  "Stripe",
                  "Vercel",
                ].map((tech, key) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://ekrems-store.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project ➜{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                FlowCRM | Customer Relationship Management System
              </h3>
              <p className="text-gray-400 mb-3">
                Functional, scalable, and secure Customer Relationship
                Management (CRM) system built using modern technologies. It
                helps businesses manage customer data, track sales, and improve
                internal workflows.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TailwindCSS",
                  "Shadcn/UI",
                  "Node.js",
                  "JWT",
                  "Bcrypt",
                  "PostgreSQL",
                ].map((tech, key) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Ekremyilmazz/FlowCRM.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project ➜{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                Recipe Sharing Platform{" "}
              </h3>
              <p className="text-gray-400 mb-3">
                A platform for sharing recipes developed with backend and
                frontend technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Node.js (express.js)",
                  "Cors",
                  "MongoDB",
                  "Docker",
                  "Axios",
                  "Framer Motion",
                  "TailwindCSS",
                ].map((tech, key) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Ekremyilmazz/yemek_tarifi.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project ➜{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Festival App </h3>
              <p className="text-gray-400 mb-3">
                This project is an interactive web application that displays the
                schedule and event information of a fictional music festival.
                Users can filter the festival program by days and stages and
                view detailed information about the events.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Vite",
                  "TailwindCSS",
                  "Local Storage",
                  "Vercel",
                ].map((tech, key) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://festival-app-three.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project ➜{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> BudgetWise </h3>
              <p className="text-gray-400 mb-3">
                The goal of this project was to build a realistic personal
                finance tracking application where users can manage their income
                and expenses. It was designed to demonstrate core and
                intermediate concepts of Redux Toolkit, such as slices,
                reducers, middleware, and async actions, in a real-world
                scenario.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Vite",
                  "Redux Toolkit",
                  "CSS",
                  "Recharts",
                  "Local Storage",
                ].map((tech, key) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://budget-wise-tau.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project ➜{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
