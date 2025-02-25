// const ExpertiseSection = () => {
//   return (
//     <div className="container mx-auto p-4 h-screen ">
//       <h2 className="text-3xl font-bold text-center">Our Expertise</h2>
//       <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="border p-4 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold">Visionary Approach</h3>
//           <p className="mt-2">
//             We don’t just follow trends—we set them. Our solutions are designed to be ahead of the curve.
//           </p>
//         </div>
//         <div className="border p-4 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold">Client-First Philosophy</h3>
//           <p className="mt-2">
//             Your success is our success. We work collaboratively to ensure every project exceeds expectations.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpertiseSection;










// components/ExpertiseSection.tsx
// "use client"; // Required for using hooks and animations in Next.js App Router

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const expertiseData = [
//   {
//     title: "Graphic Designing",
//     description: "We create visually stunning designs that captivate your audience.",
//     image: "/images/expertise-slide1.jpg",
//   },
//   {
//     title: "Web Development",
//     description: "We build responsive and user-friendly websites that drive results.",
//     image: "/images/expertise-slide2.jpg",
//   },
//   {
//     title: "App Development",
//     description: "We develop mobile apps that are intuitive and engaging.",
//     image: "/images/expertise-slide3.jpg",
//   },
//   {
//     title: "Accounting",
//     description: "We provide accurate and reliable accounting services.",
//     image: "/images/expertise-slide4.jpg",
//   },
//   {
//     title: "Digital Marketing",
//     description: "We craft data-driven strategies to grow your business.",
//     image: "/images/expertise-slide5.jpg",
//   },
// ];

// export default function ExpertiseSection() {
//   return (
// <section className="py-16" style={{ backgroundColor: "rgb(236, 228, 217)" }}>
// <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">Our Expertise</h2>
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//           modules={[Pagination]}
//           className="mySwiper"
//         >
//           {expertiseData.map((expertise, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//                 <img
//                   src={expertise.image}
//                   alt={expertise.title}
//                   className="w-full h-48 object-cover rounded-t-lg"
//                 />
//                 <h3 className="text-xl font-bold mt-4">{expertise.title}</h3>
//                 <p className="text-gray-600 mt-2">{expertise.description}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }


"use client"; // Required for using hooks and animations in Next.js App Router

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const expertiseData = [
  {
    title: "Graphic Designing",
    description: "We create visually stunning designs that captivate your audience.",
    image: "Expertise_Designing.jpg", // Replace with your image path
  },
  {
    title: "Web Development",
    description: "We build responsive and user-friendly websites that drive results.",
    image: "Expertise_WebDev.jpg", // Replace with your image path
  },
  {
    title: "App Development",
    description: "We develop mobile apps that are intuitive and engaging.",
    image: "Expertise_AppDev.jpg", // Replace with your image path
  },
  {
    title: "Accounting",
    description: "We provide accurate and reliable accounting services.",
    image: "Expertise_Copywriting.jpg", // Replace with your image path
  },
  {
    title: "Digital Marketing",
    description: "We craft data-driven strategies to grow your business.",
    image: "Expertise_Marketing.jpg", // Replace with your image path
  },
  {
    title: "Content Writing",
    description: "We create engaging content that resonates with your audience.",
    image: "Expertise_Copywriting.jpg", // Replace with your image path
  },
];

export default function ExpertiseSection() {
  return (
    <section className="py-16 bg-[#000000]">
      <div className="container mx-auto px-4">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-4 text-[#f57c00]"
        >
          Our Expertise
        </motion.h2>

        {/* Text Animation */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl text-center mb-8 text-[#f57c00]"
        >
          Our services are crafted to empower your business at every stage of its digital journey.
        </motion.p>

        {/* Slider */}
        <div className="relative mt-12 w-full max-w-10xl ">
          <Swiper
            slidesPerView={3} // Show 3 slides at a time
            spaceBetween={30} // Space between slides
            centeredSlides={true} // Center the active slide
            loop={true} // Infinite loop
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-scroll
            pagination={{ clickable: true, el: ".custom-pagination" }} // Custom dots container
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }} // Custom navigation arrows
            modules={[Autoplay, Pagination, Navigation]} // Enable autoplay, pagination, and navigation
            breakpoints={{
              320: { slidesPerView: 1 }, // 1 slide on small screens
              768: { slidesPerView: 2 }, // 2 slides on medium screens
              1024: { slidesPerView: 3 }, // 3 slides on large screens
            }}
            className="mySwiper"
          >
            {expertiseData.map((expertise, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-96 w-full bg-cover bg-center rounded-lg shadow-lg flex items-end p-6"
                  style={{ backgroundImage: `url(${expertise.image})` }}
                >
                  <div className="bg-opacity-50 p-4 rounded-lg">
                    <h3 className="text-xl font-bold text-white">{expertise.title}</h3>
                    <p className="text-gray-200">{expertise.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="custom-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-white p-2 rounded-full shadow-lg">
            &lt;
          </div>
          <div className="custom-next absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-white p-2 rounded-full shadow-lg">
            &gt;
          </div>

          {/* Custom Pagination Dots */}
           <div className="custom-pagination flex justify-end mt-4 space-x-2" />
            </div>
      </div>
    </section>
  );
}