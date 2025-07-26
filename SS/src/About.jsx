import React, { useState } from 'react';

const skills = {
  'Web Development': ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Mongoose', 'MERN Stack', 'Tailwind CSS'],
  'App Development': ['React Native'],
  'Graphic Design': ['Brand Identity', 'UX/UI Design', 'LinkedIn Growth', 'Social Media Design'],
  'Programming Languages': ['C++', 'C', 'Python'],
  'SEO': ['On-Page SEO', 'Off-Page SEO', 'Technical SEO'],
};

const About = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (category) => {
    setExpanded(expanded === category ? null : category);
  };

  return (
    <section
      id="about"
      className="bg-[#f3f4f6] dark:bg-black text-[#000] dark:text-white py-16 px-4 sm:px-8 transition-all duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">👨‍💻 About Me</h2>
        <p className="text-lg text-[#374151] dark:text-[#d1d5db] mb-6 text-center">
          I’m a Software Engineering student at UCP (2022–2026), a professional Web & App Developer, Graphic Designer, and LinkedIn Branding Expert.
        </p>

        <div className="space-y-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white dark:bg-[#1f1f1f] rounded-xl shadow p-4">
              <div
                onClick={() => toggleExpand(category)}
                className="cursor-pointer flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold">{category}</h3>
                <span className="text-xl">{expanded === category ? '−' : '+'}</span>
              </div>
              {expanded === category && (
                <ul className="mt-3 list-disc list-inside text-[#374151] dark:text-gray-300">
                  {items.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
