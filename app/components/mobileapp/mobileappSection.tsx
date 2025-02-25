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
    title: "Graphic Designing",
    description: "We create visually stunning designs that captivate your audience.",
    image: "appdev_1.jpg",
  },
  {
    title: "Web Development",
    description: "We build responsive and user-friendly websites that drive results.",
    image: "appdev_2.jpg",
  },
  {
    title: "App Development",
    description: "We develop mobile apps that are intuitive and engaging.",
    image: "appdev_3.jpg",
  },

  {
    title: "Graphic Designing",
    description: "We create visually stunning designs that captivate your audience.",
    image: "appdev_1.jpg",
  },
  {
    title: "Web Development",
    description: "We build responsive and user-friendly websites that drive results.",
    image: "appdev_2.jpg",
  },
  {
    title: "App Development",
    description: "We develop mobile apps that are intuitive and engaging.",
    image: "appdev_3.jpg",
  },
  
    
];

export default function MobileApp() {
  return (
    <div>
      {/* First Section */}
      <section className="min-h-screen flex items-center justify-center bg-cover bg-center text-customText" style={{ backgroundImage: "url('AppDevHero.jpg')" }}>
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            <TypeAnimation
              sequence={[
                "Transform Your Ideas into  ",
                1000,
                "Transform Your Ideas into  \nHigh-Performing Mobile Apps",
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
            In the mobile-first world, having an app that truly represents your brand and engages your audience is essential.
          </motion.p>
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
            Our Mobile App Development Services
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-sm mt-6 max-w-2xl mx-auto font-poppins text-center" style={{ color: "rgb(63,58,52)" }}>
            Explore the different mobile app development services we offer, tailored to meet your specific needs:
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
                    <p className="text-gray-200">{expertise.description}</p>
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
          iOS Development (Swift)          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-sm mt-6 max-w-2xl mx-auto font-poppins text-center" style={{ color: "rgb(63,58,52)" }}>
          Building Robust iOS Apps for Your Business
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
            <h2 className="text-sm font-bold mb-6">Apple’s iOS platform is known for its smooth performance and high standards, and we are here to help you meet those expectations with a top-tier iOS app. Using Swift, Apple’s powerful programming language, we develop apps that are not only visually stunning but also highly functional and secure.</h2>
            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>

      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>
          <strong>Custom iOS Solutions:</strong> Tailored apps that meet your business objectives
          and provide a seamless user experience.
        </li>
        <li>
          <strong>UI/UX Design:</strong> Intuitive and beautiful designs that align with iOS’s
          sleek aesthetic.
        </li>
        <li>
          <strong>Integration:</strong> Seamlessly integrate with Apple’s ecosystem, including
          features like Siri, Apple Pay, and more.
        </li>
        <li>
          <strong>Performance Optimization:</strong> Ensuring your app runs smoothly and
          efficiently on all iOS devices.
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
              src="appdev_2.jpg" // Replace with your image path
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
          Our expertise in Swift allows us to build apps that leverage the full power of iOS, delivering a product that’s both elegant and powerful. We prioritize performance, security, and user experience, ensuring your app stands out in the App Store.          </motion.p>
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
          Android Development (Flutter)          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-sm mt-6 max-w-2xl mx-auto font-poppins text-center text-white">
          Versatile and Scalable Android Apps with Flutter
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
            <h2 className="text-sm font-bold mb-6 text-white">Android’s open-source nature offers endless possibilities, and our team at NexaVista Technologies is here to harness that potential. Using Flutter, Google’s UI toolkit, we build high-quality Android apps that are scalable, responsive, and designed to deliver an exceptional user experience</h2>
            <h2 className="text-2xl font-bold mb-4 text-white">Our Expertise
            </h2>

      <ul className="list-disc list-inside text-white mb-6">
        <li>
          <strong>Custom Android Apps:</strong> Tailored solutions that cater to your specific business needs.
        </li>
        <li>
          <strong>Rich User Interfaces:</strong>  Create visually compelling and responsive interfaces that perform well on all Android devices.
        </li>
        <li>
          <strong>Cross-Platform Compatibility:</strong>  Efficient development with Flutter that ensures your app performs well across both Android and iOS if needed.
        </li>
        <li>
          <strong>Google Play Integration:</strong> Optimized for seamless deployment and performance on Google Play.
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
              src="appdev_3.jpg" // Replace with your image path
              alt="Why NexaVista"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
      

      <div className="text-center mt-20">
          <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl font-bold text-white">
          Why Choose Us?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-sm  mt-6 max-w-2xl mx-auto font-poppins text-center text-white">
          Flutter’s versatility allows us to create apps that are not only beautiful but also highly functional. We focus on delivering a consistent experience across all Android devices, ensuring your app is accessible to a broad audience.         </motion.p>
          </div>

          <div className="mt-8 ">
           <Link
             href="/contact"
             className="px-12  bg-customText text-[rgb(63,58,52)] py-4 bg-white rounded-full text-sm  shadow-md hover:bg-gray-200 transition duration-300 "  >
           
             Discover More About Our Andriod Development Services</Link>
         </div>
      </section> 

                  {/* section 5 */}






      <section className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 py-16" style={{ backgroundColor: "rgb(236,228,217)" }}>
        <div className="text-center">
          <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl font-bold" style={{ color: "rgb(63,58,52)" }}>
          Cross-Platform Development (React Native)
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-sm mt-6 max-w-2xl mx-auto font-poppins text-center" style={{ color: "rgb(63,58,52)" }}>
          Unified Mobile Experiences with React Native
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
            <h2 className="text-sm font-bold mb-6">For businesses looking to reach both iOS and Android users without doubling development time and cost, React Native offers an ideal solution. At NexaVista Technologies, we use React Native to build high-performance apps that provide a consistent and engaging experience across both platforms.</h2>
            <h2 className="text-2xl font-bold mb-4">Our Services Include</h2>

      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>
          <strong>Unified Codebase:</strong>  One codebase for both iOS and Android, saving time and resources.
        </li>
        <li>
          <strong>Consistent User Experience:</strong>  Ensure your app looks and feels the same on both platforms.
        </li>
        <li>
          <strong>Native Performance: </strong> React Native allows for near-native performance, providing a smooth user experience.
        </li>
        <li>
          <strong>Continuous Updates: </strong> Easily manage updates and maintenance with a single codebase.
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
              src="appdev_1.jpg" // Replace with your image path
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
