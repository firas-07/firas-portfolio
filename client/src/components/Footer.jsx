import React from 'react';

const Footer = () => {
  return (
    <section className="footer bg-blue-950 text-white p-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="">
          <h3 className="text-xl font-semibold mb-4">Firas Portfolio</h3>
          <p className="text-gray-400">
            Thank you for visiting my personal portfolio website. Connect with me over socials. <br /> <br /> Keep Rising 🚀
          </p>
        </div>

        <div className="">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <a href="#getstarted" className="text-gray-400 block mb-2">
            <i className="fas fa-chevron-circle-right mr-2"></i> Get Started
          </a>
          <a href="#knowme" className="text-gray-400 block mb-2">
            <i className="fas fa-chevron-circle-right mr-2"></i> Know Me
          </a>
          <a href="#techstack" className="text-gray-400 block mb-2">
            <i className="fas fa-chevron-circle-right mr-2"></i> TechStack
          </a>
          <a href="#project" className="text-gray-400 block mb-2">
            <i className="fas fa-chevron-circle-right mr-2"></i> Implementations
          </a>
          <a href="#internship" className="text-gray-400 block mb-2">
            <i className="fas fa-chevron-circle-right mr-2"></i> Internships
          </a>
        </div>

        <div className="">
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p className="text-gray-400 mb-2">
            <i className="fas fa-phone mr-2"></i> +91 6382079247
          </p>
          <p className="text-gray-400 mb-2">
            <i className="fas fa-envelope mr-2"></i> muhammadfiras038@gmail.com
          </p>
          <p className="text-gray-400 mb-4">
            <i className="fas fa-map-marked-alt mr-2"></i> Chennai, India
          </p>
          <div className="share flex space-x-4">
            <a href="https://www.linkedin.com/in/muhammad-firas-50041624a/" target="_blank" rel="noreferrer" className="fab fa-linkedin text-2xl"></a>
            <a href="https://github.com/firas-07" target="_blank" rel="noreferrer" className="fab fa-github text-2xl"></a>
            <a href="mailto:firas020604@gmail.com" target="_blank" rel="noreferrer" className="fas fa-envelope text-2xl"></a>
            <a href="https://www.facebook.com/muhammad.firas.710" target="_blank" rel="noreferrer" className="fab fa-facebook text-2xl"></a>
            <a href="https://www.instagram.com/firas___07/" target="_blank" rel="noreferrer" className="fab fa-instagram text-2xl"></a>
          </div>
        </div>
      </div>

      <h1 className="credit text-center mt-8 text-gray-400">
        Designed with <i className="fa fa-heart pulse text-red-500"></i> by{' '}
        <a href="https://www.linkedin.com/in/jigar-sable" target="_blank" rel="noreferrer" className="text-blue-400 font-bold">
          Muhammad Firas
        </a>
      </h1>
    </section>
  );
};

export default Footer;
