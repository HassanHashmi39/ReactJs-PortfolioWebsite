import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Modern and responsive websites using React.js, Node.js, MongoDB, Tailwind CSS, and more.',
  },
  {
    title: 'App Development',
    description: 'Cross-platform mobile apps using React Native with smooth UI and performance.',
  },
  {
    title: 'Graphic Design',
    description: 'Complete branding, social media designs, and eye-catching UI/UX design services.',
  },
  {
    title: 'Programming & Teaching',
    description: 'C++, Python, and software engineering tutoring with real-world coding examples.',
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, Google Ads, and social media marketing strategies for your business.',
  
  }
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#f3f4f6] dark:bg-[#000000] text-[#000000] dark:text-white py-16 px-4 sm:px-8 transition-all duration-300"
    >
      <h2 className="text-4xl font-bold text-center mb-10">💼 My Services</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#1f1f1f] p-6 rounded-2xl shadow hover:shadow-lg transition-transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-[#000000] dark:text-white mb-2">{service.title}</h3>
            <p className="text-[#374151] dark:text-[#d1d5db]">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
