import React, { useState, useEffect, useRef } from 'react';
import logo1 from '../assets/logo-preview1.png';
import logo2 from '../assets/logo-preview.png';
import Slider from '../components/Slider';
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.png'
import frontend1 from '../assets/icons/html-5.png'
import frontend2 from '../assets/icons/css-3.png'
import frontend3 from '../assets/icons/js.png'
import frontend4 from '../assets/icons/react.png'
import frontend5 from '../assets/icons/vite.png'
import frontend6 from '../assets/icons/tailwind.png'
import backend1 from '../assets/icons/express.png'
import backend2 from '../assets/icons/node.png'
import database1 from '../assets/icons/mongodb.png'
import database2 from '../assets/icons/sql.png'
import program1 from '../assets/icons/java.png'
import program2 from '../assets/icons/python.png'
import program3 from '../assets/icons/C.png'
import tool1 from '../assets/icons/git.png'
import tool2 from '../assets/icons/github.png'
import tool3 from '../assets/icons/vercel.png'
import Project from '../components/Project';
import contact from '../assets/contact1.png'
import Footer from '../components/Footer';
import axios from 'axios'
const Portfolio = () => {
  const [activeItem, setActiveItem] = useState('');
  const [showNavbar, setShowNavbar] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideIn'); // Add slide-in animation
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animated-section'); // Add this class to sections
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const section = document.querySelector('.tech-stack-section');

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Set the section as visible when it comes into view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  const navitems = [
    { name: "Get Started", id: "getstarted" },
    { name: "Know Me", id: "knowme" },
    { name: "TechStack", id: "techstack" },
    { name: "Implementations", id: "project" },
    { name: "Internships", id: "internship" }
  ];

  const handleItemClick = (item) => {
    setActiveItem(item);
    const section = document.getElementById(item.toLowerCase().replace(' ', ''));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const details = [
    {
      company: "Error Makes Clever",
      role: "Full Stack Developer | Internship",
      duration: "April 2024 - May 2024",
      certificateLink: "https://drive.google.com/file/d/1c8bz-SyPARNfDi9W-xg-qhECltpchNA-/view?usp=sharing",
    },
    {
      company: "Sync Interns",
      role: "Website Developer | Internship",
      duration: "May 2023 - June 2023",
      certificateLink: "https://drive.google.com/file/d/1c8bz-SyPARNfDi9W-xg-qhECltpchNA-/view?usp=sharing",
    },
    {
      company: "Oasis Infobyte",
      role: "Website Developer | Internship",
      duration: "June 2023 - July 2023",
      certificateLink: "https://drive.google.com/file/d/1y2ml0vNLgX2MefCrsm9GTRXD_6W6bZpg/view?usp=sharing",
    },
    {
      company: "TAS Innovation",
      role: "UI/UX Designing | Internship",
      duration: "July 2023 - August 2023",
      certificateLink: "https://drive.google.com/file/d/1rqhl5zP2MrHcaVhwmyJWSBdTQnOIHW46/view?usp=sharing",
    },
    {
      company: "Farm Direct 24",
      role: "Website Designer & Marketting | Internship",
      duration: "June 2023 - July 2023",
      certificateLink: "https://drive.google.com/file/d/14sdpneraOOkvIKMu7Ls8XAFLoxLU6YrW/view?usp=sharing",
    },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target;
            card.classList.add('animate-slideUp');
            card.style.transitionDelay = `${(entry.time * 1000).toFixed(0)}ms`; // Set transition delay in milliseconds
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/submit-form', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert("Your Response was Submitted, Thank You for Contacting!")
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      {/* Nabar Section */}
      <nav className='p-5 sticky top-0 bg-white shadow-xl z-40 shadow-gray-200 px-10 flex items-center justify-between'>
        <div className='flex items-center gap-24'>
          <div className='flex items-center relative w-[15%] md:w-[10%] lg:w-[5%]'>
            <img src={logo1} alt="Logo 1" className='md:ml-0 -ml-5' />
            <p className='md:ml-[-22%] -ml-3 font-bold md:text-xl'>UHAMMAD</p>
          </div>
          <div className='flex items-center relative w-[15%] md:w-[10%] lg:w-[5%]'>
            <img src={logo2} alt="Logo 2" className='md:ml-0 -ml-9' />
            <p className='md:ml-[-22%] -ml-2.5 font-bold text-xl'>IRAS</p>
          </div>
        </div>

        <ul className='md:hidden lg:flex hidden items-center gap-5 font-bold text-[#0f1f2a] ml-[-50%] text-lg cursor-pointer'>
          {navitems.map((item) => (
            <a href={`#${item.id}`} key={item.name} aria-label={`Navigate to ${item.name}`}>
              <li
                className={`hover:text-[#4b6de9] ${activeItem === item.name ? 'text-[#4b6de9]' : ''}`}
                onClick={() => handleItemClick(item.name)}
              >
                {item.name}
              </li>
            </a>
          ))}
        </ul>

        <a href="#contact">
          <button className='mr-10 hidden md:hidden lg:block start-page text-white p-1 px-2 rounded-md font-bold' aria-label="Contact Button">
            Contact
          </button>
        </a>

        <i class="fa-solid fa-bars lg:hidden" onClick={() => setShowNavbar(true)} aria-label="Menu Button"></i>
      </nav>

      {/* Side Navbar Section */}
      {showNavbar ? (
        <nav className={`flex flex-col gap-24 h-[100vh] fixed start-page w-[50%] top-0 right-0 z-50 text-white transition-all duration-1000 ${showNavbar ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='flex justify-end p-5 cursor-pointer' onClick={() => setShowNavbar(false)}>
            <i class="fa-solid fa-xmark text-xl" aria-label="Close Menu Button"></i>
          </div>
          <div className='flex flex-col items-center gap-72'>
            <ul className='text-center flex flex-col gap-3 font-bold'>
              {navitems.map((item) => (
                <a href={`#${item.id}`} key={item.name} aria-label={`Navigate to ${item.name}`}>
                  <li
                    className={`hover:text-blue-300 ${activeItem === item.name ? 'text-blue-300' : ''}`}
                    onClick={() => handleItemClick(item.name)}
                  >
                    {item.name}
                  </li>
                </a>
              ))}
            </ul>
            <a href="#contact">
              <button className='flex md:hidden bg-blue-600 text-white p-1 px-2 rounded-md font-bold' aria-label="Contact Button">
                Contact
              </button>
            </a>
          </div>
        </nav>
      ) : (
        ""
      )}

      {/* Get Started Section */}
      <main className='p-5 flex flex-col justify-center items-center' id='getstarted'>
        <div className='text-center'>
          <h1 className='text-[36px] md:text-[48px] lg:text-[60px] my-5 font-bold text-black'>
            Get Started with <u>My Portfolio</u>
          </h1>
          <h1 className='text-[28px] md:text-[40px] lg:text-[50px] font-bold'>
            Welcome to My Digital Workspace,
          </h1>
          <h1 className='text-[28px] md:text-[40px] lg:text-[50px] font-bold'>
            Creative Full Stack Developer Specialized in
          </h1>
          <h1 className='text-[28px] md:text-[40px] lg:text-[50px] font-bold'>
            MERN Stack Technology
          </h1>
          <p className='mt-10 text-lg md:text-xl lg:text-2xl font-semibold text-gray-500'>
            Success is not just about achieving goals; it's about the journey of Learning, Growing, and Experience
          </p>
        </div>

        <div className='mt-10 md:w-[85%] w-full'>
          <Slider />
        </div>
      </main>

      {/* About Me Section */}
      <main className='mb-5 animated-section' id='knowme'>
        <h1 className='md:text-[48px] lg:text-[55px] text-[36px] mx-10 md:mx-0 font-bold text-center'>Know More <u>About Me</u></h1>
        <div className='md:text-xl m-5 md:text-center'>
          <p>A Bachelor of Engineering <b>Computer Science Engineer</b> student with a deep passion for technology and the latest trends in the field. Beyond my academic pursuits, <b>I am dedicated to helping students who face challenges</b> in learning new skills or overcoming obstacles in the problem-solving. <br className='hidden md:block' /> Having experienced the learning curve myself, I understand the frustration of feeling stuck and unable to find solutions. <b>That’s why I’m committed <br className='hidden md:block' /> to guiding and mentoring students</b> through those difficult phases, providing the support and knowledge to unlock their potential and succeed.</p>
        </div>
        <div className='flex flex-col lg:flex-row gap-[8%]'>
          <div className='md:mt-10 mx-10 lg:ml-24 flex flex-col md:flex-row items-center gap-5'>
            <img src={about2} alt="" />
            <img src={about3} className='md:h-[405px] w-full' alt="" />
          </div>
          <div className='mt-10 lg:w-[50%] mx-5 lg:mx-0 lg:mr-10 p-3 pb-[-55px] shadow-gray-600 shadow-2xl rounded-xl'>
            <h1 className='text-3xl ml-10 text-center font-bold text'>What I Do</h1>
            <p className='mt-2 font-bold'>Role: MERN Stack Developer</p>
            <p>I'm a passionate and versatile Full-Stack Developer in the MERN Stack
              <b> (MongoDB, Express.js, React, and Node.js).</b>
              I have a deep understanding of both Frontend and Backend development
              I thrive in collaborative environments and am equally comfortable working independently. Whether it's building a new project from the ground up or refining an existing application, I am dedicated to delivering high-quality work that exceeds expectations.</p>
            <p className='font-bold mt-10'><span className='text'>Email:</span> firas020604@gmail.com</p>
            <p className='font-bold mt-2'><span className='text'>Place:</span> Nandanam, Chennai</p>
            <button className='mt-5 font-bold start-page text-white p-1 px-2'>Resume</button>
          </div>
        </div>
      </main>

      {/* Skills Section */}
      <div id='techstack'
        className={`tech-stack-section animated-section m-5 lg:m-10 text-center transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <h1 className='text-[36px] md:text-[40px] lg:text-[55px] font-bold'>
          <u>Tech Stack</u> Insights
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
          {/* Frontend Development */}
          <div className='tilt-card flex flex-col justify-center h-full gap-5 shadow-gray-400 shadow-xl p-5 rounded-xl py-10'>
            <h1 className='font-bold text-xl md:text-2xl'>Frontend Development</h1>
            <div className='grid grid-cols-3 gap-5 items-center'>
              <img src={frontend1} alt="" className='w-14 mx-auto' />
              <img src={frontend2} alt="" className='w-14 mx-auto' />
              <img src={frontend3} alt="" className='w-12 mx-auto' />
              <img src={frontend4} alt="" className='w-24 mx-auto' />
              <img src={frontend5} alt="" className='w-full mx-auto' />
              <img src={frontend6} alt="" className='w-full mx-auto' />
            </div>
          </div>

          {/* Backend Development */}
          <div className='tilt-card flex flex-col justify-center gap-5 h-full shadow-gray-400 shadow-xl p-5 rounded-xl py-10'>
            <h1 className='font-bold text-xl md:text-2xl'>Backend Development</h1>
            <div className='grid grid-cols-1 gap-5 items-center'>
              <img src={backend1} alt="" className='w-32 mx-auto' />
              <img src={backend2} alt="" className='w-28 mx-auto' />
            </div>
          </div>

          {/* Database Management */}
          <div className='tilt-card flex flex-col justify-center gap-5 h-full shadow-gray-400 shadow-xl p-5 rounded-xl py-10'>
            <h1 className='font-bold text-xl md:text-2xl'>Database Management</h1>
            <div className='grid grid-cols-1 gap-5 items-center'>
              <img src={database1} alt="" className='w-[75px] mx-auto' />
              <img src={database2} alt="" className='w-28 mx-auto' />
            </div>
          </div>

          {/* Programming Language */}
          <div className='tilt-card flex flex-col justify-center h-full gap-5 shadow-gray-400 shadow-xl p-5 rounded-xl py-10'>
            <h1 className='font-bold text-xl md:text-2xl'>Programming Language</h1>
            <div className='grid grid-cols-2 gap-5 items-center'>
              <img src={program1} alt="" className='w-24 mx-auto' />
              <img src={program2} alt="" className='w-14 mx-auto' />
              <img src={frontend3} alt="" className='w-12 mx-auto' />
              <img src={program3} alt="" className='w-20 mx-auto' />
            </div>
          </div>

          {/* Development Tools */}
          <div className='tilt-card flex flex-col justify-center gap-5 h-full shadow-gray-400 shadow-xl p-5 rounded-xl py-10'>
            <h1 className='font-bold text-xl md:text-2xl'>Development Tools</h1>
            <div className='grid grid-cols-1 gap-5 items-center'>
              <img src={tool1} alt="" className='w-[75px] mx-auto' />
              <img src={tool2} alt="" className='w-20 mx-auto' />
            </div>
          </div>

          {/* Deployment */}
          <div className='tilt-card flex flex-col justify-center gap-5 h-full shadow-gray-400 shadow-xl p-5 rounded-xl py-10'>
            <h1 className='font-bold text-xl md:text-2xl'>Deployment</h1>
            <div className='grid grid-cols-1 gap-5 items-center'>
              <img src={tool2} alt="" className='w-[75px] mx-auto' />
              <img src={tool3} alt="" className='w-36 mx-auto' />
            </div>
          </div>
        </div>
      </div>

      {/* Project Section */}
      <div id='project'>
        <h1 className='animated-section text-[36px] md:text-[40px] lg:text-[55px] font-bold text-center mt-10'>Latest <span className='underline'>Projects</span></h1>
        <Project />
      </div>

      {/* Internship Section */}
      <div className="animated-section flex flex-col items-center justify-center" id='internship'>
        <h1 className="text-[36px] md:text-[40px] lg:text-[55px] underline text-center m-3 font-bold">Internships</h1>
        <div className="flex flex-col items-center justify-center w-full px-4">
          {details.map((item, index) => {
            const isEven = index % 2 === 0;
            const alignment = isEven ? 'md:ml-[-50%]' : 'md:ml-[50%]';

            return (
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className={`opacity-0 transform transition-all duration-500 mb-4 flex ${alignment} w-full max-w-md mt-10`}
                key={index}
              >
                <div className="bg-white shadow-xl shadow-gray-500 rounded-lg p-6 text-center w-full">
                  <h2 className="text-xl font-semibold">{item.company}</h2>
                  <h3 className="text-lg">{item.role}</h3>
                  <p className="text-gray-600">{item.duration}</p>
                  <a
                    href={item.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      aria-label={`View ${item.company} certificate`}
                      className="mt-2 px-4 py-2 start-page text-white rounded hover:bg-blue-700 transition duration-200"
                    >
                      Certificate
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Section */}
      <section className="contact animated-section mt-14 mx-4 md:mx-20" id="contact">
        <h2 className="heading text-[32px] md:text-[50px] font-bold text-center mb-6">
          <i className="fas fa-headset"></i> Get in <span className="text-blue-600">Touch</span>
        </h2>

        <div className="container px-4 md:px-20">
          <div className="flex flex-col md:flex-row items-center justify-center p-10 shadow-2xl shadow-gray-600 rounded-xl">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="image-box text-center">
                <img
                  draggable="false"
                  src={contact}
                  alt="Contact"
                  className="max-w-full h-auto mx-auto"
                />
              </div>
            </div>
            <form id="contact-form" onSubmit={handleSubmit} className="w-full md:w-1/2">
              <div className="form-group space-y-6">
                <div className="field relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                  <i className="fas fa-user absolute top-4 right-3 text-gray-400"></i>
                </div>
                <div className="field relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                  <i className="fas fa-envelope absolute top-4 right-3 text-gray-400"></i>
                </div>
                <div className="field relative">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                  <i className="fas fa-phone-alt absolute top-4 right-3 text-gray-400"></i>
                </div>
                <div className="message relative">
                  <textarea
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  ></textarea>
                  <i className="fas fa-comment-dots absolute top-3 right-3 text-gray-400"></i>
                </div>
              </div>
              <div className="button-area mt-6 text-center">
                <button
                  type="submit"
                  className="start-page font-bold text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center mx-auto"
                >
                  Submit <i className="fa fa-paper-plane ml-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Start Arrow button */}
      <a href="#getstarted">
        <button className='sticky bottom-3 left-[100%] m-5 z-40 start-page p-2 px-3.5 text-3xl text-white font-bold rounded-full'>
          <i class="fa-solid fa-angle-up"></i>
        </button>
      </a>

      {/* Footer Section */}
      <div className='animated-section'>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;