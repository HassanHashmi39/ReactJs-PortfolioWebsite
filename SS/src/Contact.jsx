import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#f3f4f6] dark:bg-black text-[#000] dark:text-white py-16 px-4 sm:px-8 transition-all duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">📩 Contact Me</h2>
        <p className="text-center text-[#374151] dark:text-[#d1d5db] mb-10">
          Have a project in mind? Let's connect. Fill the form or reach out via social links.
        </p>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="bg-white dark:bg-[#1f1f1f] shadow rounded-xl p-6 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-[#000] dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-[#000] dark:text-white"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-[#000] dark:text-white"
          ></textarea>

          <button
            type="submit"
            className="bg-[#facc15] hover:bg-gray-400 text-black font-bold py-2 px-6 rounded transition-all center block mx-auto shadow-md" 
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-lg mb-4">Or connect with me on:</p>
          <div className="flex justify-center space-x-6">
            <a
              href="www.linkedin.com/in/hassanshahhashmi"
              className="text-[#e1306c] hover:text-gray-700 transition dark:text-[#facc15] "
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.calendly.com/hassanhashmi658"
              className="text-[#1da1f2] hover:text-gray-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Calendly
            </a>
           
            <a
              href="https://www.instagram.com/hassan_hashmi39/"
              className="text-[#e1306c] hover:text-gray-700 transition dark:text-[#facc15]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

              </div>


      </div>
        </div>
    </section>
  );
};

export default Contact;
