"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const expertiseData = [
  {
    title: "Web Development",
    image: "web1.jpg",
   
  },
  {
    title: "Custom Websites",
    image: "WebPivotPoint.jpg",
  },
  {
    title: "No Code Websites",
    image: "WebDev.jpg",
  },

  {
    title: "IntegrateAble Javascript",
    image: "IntegrateJs.jpg",
  },
  {
    title: "UI/UX Design",
    image: "webdev_6.jpg",
  },
  {
    title: "Maintenance & Debugging",
    description: "We develop mobile apps that are intuitive and engaging.",
    image: "Debugging.jpg",
  },
  
    
];

export default function WebDevelopment() {
  return (
    <div>
      {/* First Section */}
      <section className="min-h-screen flex items-center justify-center bg-cover bg-center text-customText" style={{ backgroundImage: "url('webhero.jpg')" }}>
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            <TypeAnimation
              sequence={[
                "Innovative Web Development   ",
                1000,
                "Innovative Web Development  \nSolutions Tailored to Your Business ",
                1000,
                "",
                500,
              ]}
              speed={50}
              repeat={Infinity}
              style={{ fontSize: "3.5rem", whiteSpace: "pre-line", display: "block" }}
              cursor={true}
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm mt-8 max-w-2xl mx-auto font-poppins"
          >
                In today’s digital landscape, your website is often the first point of contact with potential customers. At NexaVista Technologies, we specialize in building custom web solutions that not only look great but also deliver exceptional user experiences. Whether you need a simple business website or a complex web application, our team is equipped to bring your vision to life.          </motion.p>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-8">
            <Link href="/appointment" className="px-12 py-4 bg-customText text-gray-600 rounded-full text-sm shadow-md hover:bg-gray-200 transition duration-300">
              Discover the Possibilities
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 py-16" style={{ backgroundColor: "rgb(236,228,217)" }}>
        <div className="text-center">
          <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl font-bold" style={{ color: "rgb(63,58,52)" }}>
          Our Web Development Services          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-sm mt-6 max-w-2xl mx-auto font-poppins text-center" style={{ color: "rgb(63,58,52)" }}>
          Explore the range of services we offer to create a powerful online presence for your business



</motion.p>
         
        </div>

        {/* Swiper Slider */}
        <div className="relative mt-12 w-full max-w-10xl">
          <Swiper
            slidesPerView={1.8}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{ 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="mySwiper"
          >
            {expertiseData.map((expertise, index) => (
              <SwiperSlide key={index}>
                <div className="h-96 w-full bg-cover bg-center rounded-lg shadow-lg flex items-end p-6" style={{ backgroundImage: `url(${expertise.image})` }}>
                  <div className="bg-opacity-50 p-4 rounded-lg">
                    <h3 className="text-xl font-bold text-white">{expertise.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-white p-2 rounded-full shadow-lg">&#8249;</div>
          <div className="custom-next absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-white p-2 rounded-full shadow-lg">&#8250;</div>
          <div className="custom-pagination flex justify-end mt-4 space-x-2" />
        </div>
      </section>




                {/* section 3 */}

                <section className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 py-16" style={{ backgroundColor: "rgb(236,228,217)" }}>
        <div className="text-center">
          <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl font-bold" style={{ color: "rgb(63,58,52)" }}>
          Web Application Development
         </motion.h2>
          <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-sm mt-6 max-w-2xl mx-auto font-poppins text-center" style={{ color: "rgb(63,58,52)" }}>
          Building Robust Web Applications for the Modern Business
          </motion.p>
         
        </div>
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Heading and Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold mb-6">Web applications are the backbone of many successful businesses, providing the functionality and scalability needed to meet growing demands. At NexaVista Technologies, we develop high-performance web applications using the latest technologies to ensure your business stays ahead of the curve.

</h2>
            <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
            <p>We work with a wide range of technologies to build applications that are secure, scalable, and tailored to your business needs:</p>

      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>
          <strong>Languages:</strong> HTML, CSS, JavaScript, React.js, Next.js, Three.js, Node.js, PHP.
        </li>
        <li>
          <strong>API Integration:</strong> Seamless integration with third-party services to enhance functionality.
        </li>
        <li>
          <strong>Database:</strong>  MySQL, MongoDB for robust data management.
        </li>
        <li>
          <strong>AI Application:</strong>  Incorporating artificial intelligence to enhance user experience and business operations.
        </li>
      </ul>
          </motion.div>

          {/* Right Side: Picture */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="webdev_4.jpg" // Replace with your image path
              alt="Why NexaVista"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
      

      <div className="text-center mt-20">
          <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl font-bold" style={{ color: "rgb(63,58,52)" }}>
          Why Choose Us?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-sm mt-6 max-w-2xl mx-auto font-poppins text-center" style={{ color: "rgb(63,58,52)" }}>
          Our web applications are designed with your business in mind, ensuring they are user-friendly, efficient, and scalable. We prioritize security and performance, ensuring your application runs smoothly and securely at all times. </motion.p>
          </div>

          <div className="mt-8 ">
           <Link
             href="/contact"
             className="px-12 py-4 text-white rounded-full text-sm  shadow-md hover:bg-gray-200 transition duration-300" style={{ background: "rgb(63,58,52)" }}>
           
             Contact Us to learn More</Link>
         </div>
      </section>  
                                       {/* section 4 */}
                                       <section className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 py-16" style={{ background: "rgb(63,58,52)" }}>
        <div className="text-center">
          <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl font-bold text-white">
          Custom Websites
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-sm mt-6 max-w-2xl mx-auto font-poppins text-center text-white">
          Tailored Website Solutions for Unique Business Needs
          </motion.p>
         
        </div>
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Heading and Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold mb-6 text-white">Every business is unique, and your website should reflect that. NexaVista Technologies specializes in creating custom websites that are designed to meet your specific goals. Whether you need a professional business website, a dynamic e-commerce platform, or a targeted landing page, we’ve got you covered.

</h2>
            <h2 className="text-2xl font-bold mb-4 text-white">What We Offer
            </h2>
<p className="text-white">We work with a wide range of technologies to build applications that are secure, scalable, and tailored to your business needs:</p>
      <ul className="list-disc list-inside text-white mb-6">
        <li>
          <strong>Business Websites: :</strong> Professional websites that establish your brand and engage visitors
        </li>
        <li>
          <strong>E-commerece:</strong> Powerful platforms for selling products and services online
        </li>
        <li>
          <strong>Landing Page:</strong> High-converting pages designed for marketing campaigns and lead generation
        </li>
        <li>
          <strong>Sales Funnel:</strong>  Optimized funnels to guide customers through the buying process
        </li>
      </ul>
          </motion.div>

          {/* Right Side: Picture */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="webdev_2.jpg" // Replace with your image path
              alt="Why NexaVista"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
      

      <div className="text-center mt-20">
          <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl font-bold text-white">
          Our Approach
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-sm  mt-6 max-w-2xl mx-auto font-poppins text-center text-white">
          We take the time to understand your business and your customers, ensuring that every element of your website is designed to convert visitors into loyal customers. Our designs are modern, responsive, and built with SEO in mind.
           </motion.p>
          </div>

          <div className="mt-8 ">
           <Link
             href="/contact"
             className="px-12  bg-customText text-[rgb(63,58,52)] py-4 bg-white rounded-full text-sm  shadow-md hover:bg-gray-200 transition duration-300 "  >
           
             Get Started With Your Custom Website</Link>
         </div>
      </section> 

                  {/* section 5 */}






      <section className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 py-16" style={{ backgroundColor: "rgb(236,228,217)" }}>
        <div className="text-center">
          <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl font-bold" style={{ color: "rgb(63,58,52)" }}>
          No Code Websites

          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-sm mt-6 max-w-2xl mx-auto font-poppins text-center" style={{ color: "rgb(63,58,52)" }}>
          Efficient and Scalable No-Code Website Solutions

          </motion.p>
         
        </div>
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Heading and Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold mb-6">For businesses looking for a quick and cost-effective way to get online, our no-code website solutions are the perfect choice. We leverage platforms like WordPress, Shopify, Wix, Squarespace, Webflow, ClickFunnels, and GoHighLevel to create websites that are easy to manage and update without the need for complex coding.</h2>
            <h2 className="text-2xl font-bold mb-4">PlatForm We use</h2>

      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>
          <strong>WordPress:</strong> Flexible and widely used for all types of websites.
        </li>
        <li>
        <strong>Shopify:</strong>  Powerful e-commerce platform for online stores.
        </li>
        <li>
          <strong>Wix & SquareSpace: </strong> Simple, drag-and-drop website builders perfect for small businesses.
        </li>
        <li>
          <strong>WebFlow: </strong>Advanced design capabilities with no coding required.
        </li>
        <li>
          <strong>QuickFunnel & GoHighLevel: </strong>  Specialized platforms for building sales funnels and managing customer relationships.
        </li>
      </ul>
          </motion.div>

          {/* Right Side: Picture */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="WebDev.jpg" // Replace with your image path
              alt="Why NexaVista"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
      

      <div className="text-center mt-20">
          <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl font-bold" style={{ color: "rgb(63,58,52)" }}>
          Why React Native?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-sm mt-6 max-w-2xl mx-auto font-poppins text-center" style={{ color: "rgb(63,58,52)" }}>
          React Native is a powerful framework that allows for efficient and scalable mobile app development. Our expertise in React Native ensures that you get the best of both worlds—cost-effective development with no compromise on performance or quality.          </motion.p>
          </div>

          <div className="mt-8 ">
           <Link
             href="/contact"
             className="px-12 py-4 text-white rounded-full text-sm  shadow-md hover:bg-gray-200 transition duration-300" style={{ background: "rgb(63,58,52)" }}>
           
            Learn More About Our CrossPlatform Development</Link>
         </div>
      </section>
    </div>
  );
}
