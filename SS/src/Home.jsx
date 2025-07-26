import React from "react";
import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";

const skills = [
  {
    title: "Frontend",
    items: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS","React Native","Bootstrap Css"  ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
  },
  {
    title: "Design",
    items: ["Figma", "Photoshop", "Brand Identity", "UI/UX"," Social Media Posts ", "Logo Design"],
  },
  {
    title: "Programming / Teaching",
    items: ["C++", "C", "Python", "DSA Basics","JAVA" , "LinkedIn Growth", ],
  },
];

const stats = [
  { label: "Projects Completed", value: "30+" },
  { label: "Clients Served", value: "20+" },
  { label: "Years of Experience", value: "2+" },
  { label: "Technologies Used", value: "15+" },
  { label: "Happy Clients", value: "25+" },
  { label: "Courses Taught", value: "5+" },
  { label: "Social Media Followers", value: "2000+" }
];

const projects = [
  {
    title: "Budget Tracker (Java GUI)",
    desc:
      "Expense limit warnings, category-wise reports, date sorting & export.",
    link: "https://github.com/HassanHashmi39/Budget-Tracker-Java-GUI-",
    tags: ["Java", "Swing"],
  },
  {
    title: "Task Manager (Java GUI)",
    desc:
      "Task management with due dates, priority levels, and search functionality.",
    link: "https://github.com/HassanHashmi39/Java-GUI-based-Task-Manager-application",
    tags: ["Java", "Swing"],

  },
  {
    title: "Skinze App",
    desc:
      "A React Native app for skin care enthusiasts, featuring product reviews and routines.",  
    link: "https://github.com/HassanHashmi39/ReactNativeApp",
    tags: ["React Native", "Mobile App"],
  },
  {
    title:"Portfolio Website",
    desc:
      "A personal portfolio website built with React.js, showcasing skills and projects.With dark mode and responsive design.",
      link:"https://github.com/HassanHashmi39/ReactJs-PortfolioWebsite",
      tags:[ "React", "Portfolio", "Web Development","Tailwind Css","React Js"]

  },
  {
    title:"Graphics Designs",
    desc:
    "A collection of graphics designs created using Adobe Photoshop and Figma.",
    link:"https://www.behance.net/hassanhashmi39",
    tags: ["Graphics Design", "Adobe Photoshop", "Figma","Logo","LinkedIn Banners","Social Media Posts","Brand Identity","Ux/Ui Designs" ],

  }

];



const HomePage = () => {
  return (
    <main className="bg-[#f3f4f6] dark:bg-[#000000] text-[#000000] dark:text-white transition-colors duration-300">
      <section
        id="home"
        className="min-h-[85vh] flex items-center justify-center px-6 py-16"
      >
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            👋 Hey, I'm{" "}
            <span className="text-[#facc15]">Hassan Shah Hashmi</span>
          </h1>

          <p className="text-lg md:text-xl text-[#374151] dark:text-[#9ca3af] mb-6">
            I offer <span className="font-semibold">Web Development</span>,{" "}
            <span className="font-semibold">App Development</span>,{" "}
            <span className="font-semibold">Graphic Designing</span>, and{" "}
            <span className="font-semibold">Programming Tutoring</span>. Let’s
            build something amazing together!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="#services"
            className="bg-[#facc15] text-black font-medium px-6 py-3 rounded-xl shadow hover:scale-105 transition"
          >
            Explore Services
          </a>

          <a
            href="https://calendly.com/YOUR-CALENDLY-USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#000000] text-white font-medium px-6 py-3 rounded-xl shadow hover:scale-105 transition"
          >
            Book a Meeting
          </a>
        </div>

          {/* Socials */}
          <div className="flex justify-center gap-6 mt-8 text-2xl">
            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] dark:text-white hover:text-[#facc15] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/YOUR-GITHUB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] dark:text-white hover:text-[#facc15] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.behance.net/YOUR-BEHANCE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] dark:text-white hover:text-[#facc15] transition"
            >
              <FaBehance />
            </a>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="px-6 py-16 bg-white dark:bg-[#111111] transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            🔧 Skills Highlights
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((block, i) => (
              <div
                key={i}
                className="bg-[#f3f4f6] dark:bg-[#1f1f1f] rounded-xl p-6 shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{block.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {block.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-sm px-3 py-1 rounded-full bg-white dark:bg-[#2b2b2b] text-[#000000] dark:text-white shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="stats"
        className="px-6 py-16 bg-[#f3f4f6] dark:bg-[#000000] transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            📈 Quick Stats
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#1f1f1f] rounded-xl p-6 text-center shadow"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-[#facc15]">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-[#374151] dark:text-[#9ca3af]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="px-6 py-16 bg-white dark:bg-[#111111] transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            💼 Recent Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-[#f3f4f6] dark:bg-[#1f1f1f] rounded-xl p-6 shadow flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-[#374151] dark:text-[#9ca3af] flex-1">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 my-4">
                  {p.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded bg-white dark:bg-[#2b2b2b] text-[#000000] dark:text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto bg-[#facc15] hover:bg-yellow-400 text-black font-medium px-4 py-2 rounded-lg shadow transition"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* ============== FINAL CTA ============== */}
      <section
        id="cta"
        className="px-6 py-16 bg-white dark:bg-[#111111] transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to work with me?
          </h2>
          <p className="text-[#374151] dark:text-[#9ca3af] mb-8">
            Let’s discuss your project and bring it to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/booking"
              className="bg-[#facc15] hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl shadow transition"
            >
              Book a Service
            </a>
            <a
              href="/contact"
              className="bg-[#000000] hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl shadow transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
