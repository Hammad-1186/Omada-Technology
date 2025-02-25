"use client"; // Required for using hooks and animations in Next.js App Router

import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform } from "framer-motion"; // For animations
import Link from "next/link";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


export default function IntroSection() {
  const servicesData = [
    { title: "Generative AI", image: "/images/service1.jpg" },
    { title: "Dynamics 365", image: "/images/service2.jpg" },
    { title: "Mobile App Development", image: "/images/service3.jpg" },
    { title: "Staff Augmentation", image: "/images/service4.jpg" },
    { title: "Cloud Computing", image: "/images/service5.jpg" },
    { title: "Cybersecurity", image: "/images/service6.jpg" },
    { title: "UI/UX Design", image: "/images/service7.jpg" },
    { title: "Blockchain Solutions", image: "/images/service8.jpg" },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Scroll detection
  });

  // 1st Column - Moves Up until top aligns with Column 2
  const firstColumnY = useTransform(scrollYProgress, [0, 1], [50, -200]);

  // Column 3 moves down (starts normal, shifts downward)
  const thirdColumnY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? servicesData : servicesData.slice(0, 3);
  const brands = [
    "/logo1.jpg",
    "/logo2.jpg",
    "/logo3.jpg",
    "/logo4.jpg",
    "/logo5.jpg",
    "/logo6.jpg",
    "/logo7.jpg",
    "/logo8.jpg",
    "logo88.jpg",
    "logo10.jpg",
    "logo11",

  ];
  
  const brandsBottom = [
    "/logo1.jpg",
    "/logo2.jpg",
    "/logo3.jpg",
    "/logo4.jpg",
    "/logo5.jpg",
    "/logo6.jpg",
    "/logo7.jpg",
    "/logo8.jpg",
    "logo88.jpg",
    "logo10.jpg",
    "logo11"

  ];
  
  // const sections = [
  //   {
  //     title: "Web Development",
  //     description:
  //       "Every business needs a powerful online presence, and our web development services are designed to give you just that. From custom websites to complex web applications, we create digital solutions that are not only visually stunning but also highly functional and user-friendly.",
  //       images: ["/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg"],
  //     },
  //   {
  //     title: "App Development",
  //     description:
  //       "Our app development services deliver high-performance mobile applications, providing seamless user experiences across all platforms.",
  //       images: ["/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg"],
  //     },
  //   {
  //     title: "Graphical Designing",
  //     description:
  //       "Our expert designers craft visually appealing graphics, ensuring your brand stands out with stunning visuals.",
  //     images: ["/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg"],
  //   },
  //   {
  //     title: "Content Writing",
  //     description:
  //       "High-quality content is key to engagement. We provide compelling content that resonates with your audience.",
  //       images: ["/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg"],
  //     },
  //   {
  //     title: "Digital Marketing",
  //     description:
  //       "We help businesses grow online through targeted digital marketing strategies and expert SEO services.",
  //       images: ["/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg"],
  //     },
  // ];



  

  return (
     
      
    <div>

    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-customText"
      style={{ backgroundImage: "url('IntroServices.jpg')" }} // Replace with your image path
    >
      <div className="text-center">
        {/* Typewriter Animation */}
        <h1 className="text-5xl font-bold mb-4">
          <TypeAnimation
            sequence={[
              "From Web to App to Words,We bring", // Line 1
              1000, // Delay after Line 1
              "From Web to App to Words,We bring\nyour brand closer to your audience", // Line 1 + Line 2
              1000, // Delay after Line 2
              "", // Reset to empty (start over)
              500, // Delay before restarting
            ]}
            speed={50} // Typing speed
            repeat={Infinity} // Loop the animation
            style={{
              fontSize: "3.5rem",
              whiteSpace: "pre-line", // Allow line breaks
              display: "block", // Ensure the text container is a block element
            }}
            cursor={true} // Show the typing cursor
          />
        </h1>

        {/* Paragraph Text */}
        <motion.p
          initial={{ opacity: 0, y: 50 }} // Start from bottom
          whileInView={{ opacity: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.8, delay: 0.1 }} // Delay to start after typewriter animation
          className="text-s mt-8 max-w-2xl mx-auto font-poppins" // Limit width for 2-3 lines
        >
         At NexaVista Technologies, we offer a comprehensive range of digital services designed to help your business thrive in today’s competitive landscape. Whether youre looking to build a dynamic website, develop a cutting-edge mobile app, or craft compelling content, our expert team is here to turn your vision into reality.


        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start from bottom
          whileInView={{ opacity: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.8, delay: 0.1 }} // Delay to start after paragraph
          className="mt-8"
        >
          <Link
            href="/appointment"
            className="px-12 py-4 bg-customText text-gray-600 rounded-full text-sm shadow-md hover:bg-gray-200 transition duration-300"
          >
            Discover the Possibilities
          </Link>
        </motion.div>
      </div>
    </section>
                  {/* Section 2 */}

                    {/* <section>
                      <div className="bg-[#EDE6DD] py-16 px-8 flex flex-col items-center">
                        {sections.map((section, index) => (
                          <div key={index} className="mb-16 max-w-5xl w-full">
                            {/* Heading & Text in One Row */}
                            {/* <motion.div
                              initial={{ opacity: 0, y: -30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              className="flex flex-col md:flex-row items-center justify-between text-center md:text-left w-full"
                            > */}
                              {/* Left Side: Title */}
                              {/* <h3 className="text-2xl font-bold text-black flex items-center w-full md:w-1/3">
                                <span className="w-4 h-4 bg-black rounded-full mr-3"></span>
                                {section.title}
                              </h3>
                   */}
                              {/* Right Side: Description */}
                              {/* <p className="text-gray-700 max-w-xl w-full md:w-2/3">{section.description}</p>
                            </motion.div> */}
                  
                            {/* Image Grid */}
                            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 mx-auto w-full max-w-2xl">
                              {section.images.map((src, idx) => (
                                <div key={idx} className="relative overflow-hidden rounded-lg shadow-lg group">
                                  <Image
                                    src={src}
                                    alt={`Section Image ${idx + 1}`}
                                    layout="responsive"
                                    width={500}
                                    height={300}
                                    className="w-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                                  />
                                </div>
                              ))}
                            </div> */}
                  
                            {/* Learn More Button */}
                            {/* <div className="flex justify-center mt-6">
                              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                                Learn More
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      </section> */} 
                   <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          {/* Animated Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-8 text-[#FFFFFF]"
          >
            Our Projects
          </motion.h2>
  
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#F57C00] p-8 rounded-lg shadow-lg text-center border-2 border-[#000000] transform hover:scale-105 transition duration-200 ease-in-out relative"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-[#F57C00]">{service.title}</h3>
              </motion.div>
            ))}
          </div>
  
          {/* Show More / Show Less Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center mx-auto bg-teal-700 text-[#FFFFFF] px-6 py-3 rounded-full font-semibold hover:bg-[#000000] transition duration-200 border-2 border-[#000000] hover:border-teal-700"
            >
              {showAll ? "Show Less" : "View More Services"}
              {showAll ? (
                <ChevronUp className="ml-2 w-5 h-5" />
              ) : (
                <ChevronDown className="ml-2 w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </section>
                      <section>
                      
                                <div className="relative bg-gradient-to-b from-teal-700 to-teal-800 py-10 overflow-hidden">
                                  {/* Upper Marquee (Moves Left) */}
                                  <div className="marquee-container h-20">
                                    <div className="marquee animate-marquee-left">
                                      {[...brands, ...brands, ...brands].map((logo, index) => (
                                        <img key={index} src={logo} alt="Brand Logo" className="h-16 mx-10" />
                                      ))}
                                    </div>
                                  </div>

                                  {/* Lower Marquee (Moves Right) */}
                                  <div className="marquee-container mt-6 h-20">
                                    <div className="marquee animate-marquee-right">
                                      {[...brandsBottom, ...brandsBottom, ...brandsBottom].map((logo, index) => (
                                        <img key={index} src={logo} alt="Brand Logo" className="h-16 mx-10" />
                                      ))}
                                    </div>
                                  </div>
                                </div>


                      </section>








                     



                      <section>
                                            <div className="w-full h-[800] bg-black p-10 flex flex-col md:flex-row items-center justify-center gap-10">
                              {/* Left Section: Heading and Text */}
                              <div className="text-white w-full md:w-1/3 flex flex-col gap-4">
                                <h1 className="text-4xl font-bold">Heading Title</h1>
                                <p className="text-lg">
                                  This is the description text. You can add more details here.
                                </p>
                              </div>

                              {/* Right Section: Animated Divs */}
                              <div
                                ref={containerRef}
                                className="relative w-full md:w-2/3 h-[1200] flex justify-center items-center gap-4 overflow-hidden"
                              >
                                {/* Column 1 (Moves Up on Scroll) */}
                                <motion.div className="flex flex-col gap-2" style={{ y: firstColumnY }}>
                                  <div className="bg-cover bg-center text-white p-5 w-60 h-40 rounded-lg shadow-lg border-4 border-red-500 flex items-center justify-center"        style={{ backgroundImage: "url('/case2.jpg')" }}>
                                  <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>

                                    <h3 className="text-lg font-bold">Div 1</h3>
                                  </div>
                                  <div className="bg-cover bg-center text-white p-5 w-60 h-40 rounded-lg shadow-lg border-4 border-blue-500 flex items-center justify-center"        style={{ backgroundImage: "url('/case3.jpg')" }}>
                                  
                                    <h3 className="text-lg font-bold">Div 2</h3>
                                  </div>
                                </motion.div>

                                {/* Column 2 (Fixed in Place) */}
                                <div className="flex flex-col gap-2">
                                  <div className="bg-cover bg-center text-white p-5 w-60 h-40 rounded-lg shadow-lg border-4 border-green-500 flex items-center justify-center"       style={{ backgroundImage: "url('/blog2.jpg')" }}>
                                  <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>

                                    <h3 className="text-lg font-bold">Div 3</h3>
                                  </div>
                                  <div className="bg-cover bg-center text-white p-5 w-60 h-40 rounded-lg shadow-lg border-4 border-yellow-500 flex items-center justify-center"       style={{ backgroundImage: "url('/blog3.jpg')" }}>

                                    <h3 className="text-lg font-bold">Div 4</h3>
                                  </div>
                                  <div className="bg-cover bg-center text-white p-5 w-60 h-40 rounded-lg shadow-lg border-4 border-yellow-500 flex items-center justify-center"       style={{ backgroundImage: "url('/blog3.jpg')" }}>

                                    <h3 className="text-lg font-bold">Div 5</h3>
                                  </div>
                                </div>

                                {/* Column 3 (Moves Down) */}
                                <motion.div className="flex flex-col gap-2 " style={{ y: thirdColumnY }}>
                                  <div className="bg-cover bg-center text-white p-5 w-60 h-40 rounded-lg shadow-lg border-4 border-purple-500 flex items-center justify-center"       style={{ backgroundImage: "url('/blog4.jpg')" }}>
                                  <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>

                                    <h3 className="text-lg font-bold">Div 6</h3>
                                  </div>
                                  <div className="bg-cover bg-center text-white p-5 w-60 h-40 rounded-lg shadow-lg border-4 border-purple-500 flex items-center justify-center"       style={{ backgroundImage: "url('/blog4.jpg')" }}>

                                    <h3 className="text-lg font-bold">Div 7</h3>
                                  </div>
                                  <div className="bg-cover bg-center text-white p-5 w-60 h-40 rounded-lg shadow-lg border-4 border-purple-500 flex items-center justify-center"       style={{ backgroundImage: "url('/case4.jpg')" }}>

                                    <h3 className="text-lg font-bold">Div 8</h3>
                                  </div>
                                </motion.div>
                              </div>
                            </div>

                      </section>
    </div>

  );
}
