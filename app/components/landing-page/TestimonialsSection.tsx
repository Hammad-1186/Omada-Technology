// const TestimonialsSection = () => {
//     const testimonials = [
//       {
//         name: 'Robert Martinez',
//         role: 'Founder, Market Innovators',
//         comment: 'The copywriting services provided by NexaVista Technologies were top-notch. They understood our brand voice perfectly.',
//       },
//       {
//         name: 'Emily Thompson',
//         role: 'CTO, TechSphere',
//         comment: 'We had an amazing experience working with NexaVista Technologies for our app development project.',
//       },
//     ];
  
//     return (
//       <div className="bg-gray-100 py-5">
//         <div className="container mx-auto p-4">
//           <h2 className="text-3xl font-bold text-center">Testimonials</h2>
//           <div className="mt-6 space-y-4">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="border p-4 rounded-lg shadow-md">
//                 <p className="italic">{testimonial.comment}</p>
//                 <p className="mt-2 font-bold">{testimonial.name}</p>
//                 <p className="text-sm">{testimonial.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default TestimonialsSection;






// // components/TestimonialsSection.tsx
// "use client"; // Required for using hooks and animations in Next.js App Router

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// const testimonialsData = [
//   {
//     name: "Robert Martinez",
//     role: "Founder, Market Innovators",
//     text: "The copywriting services provided by NexaVista Technologies were top-notch. They understood our brand voice perfectly and helped us create engaging content that resonated with our audience. Highly recommend them!",
//   },
//   {
//     name: "Emily Thompson",
//     role: "CTO, TechSphere",
//     text: "We had an amazing experience working with NexaVista Technologies for our app development project. Their attention to detail and commitment to deadlines was truly impressive. The app works flawlessly, and our users love it!",
//   },
//   {
//     name: "Michael Lee",
//     role: "Marketing Director, Govt.",
//     text: "Their digital marketing campaign for our business was invaluable. NexaVista Technologies' strategies are data-driven and tailored to our needs, resulting in significant growth for our business.",
//   },
// ];

// export default function TestimonialsSection() {
//   return (
// <section className="py-16" style={{ backgroundColor: "rgb(236, 228, 217)" }}>
// <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           Check Out What Our Clients Think of NexaVista
//         </h2>
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           modules={[Pagination, Autoplay]}
//           className="mySwiper"
//         >
//           {testimonialsData.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//                 <p className="text-gray-600 italic">{testimonial.text}</p>
//                 <h3 className="text-xl font-bold mt-4">{testimonial.name}</h3>
//                 <p className="text-gray-500">{testimonial.role}</p>
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
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "Putra Cyrillus Rabin",
    role: "CEO, InnovateTech",
    text: "They took our idea during a call and came up with an app prototype that was very impressive and accurate.",
    image: "client1.jpg", // Replace with your image path
  },
  {
    name: "Bachir El Kai",
    role: "Founder, TechSolutions",
    text: "The team delivered a stunning website that perfectly represents our brand. Highly recommended!",
    image: "client2.jpg", // Replace with your image path
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director, BrightIdeas",
    text: "Their digital marketing strategies helped us achieve a 200% increase in online engagement.",
    image: "client3.jpg", // Replace with your image path
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-[#003366]"> {/* Dark Blue Background */}
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-4 text-[#F57C00]" // Orange Text
        >
          OUR TESTIMONIALS
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-md text-center mb-8 text-[#FFFFFF] opacity-90" // White with slight opacity
        >
          Check Out What Our Clients Think of Our Services
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#FFFFFF] p-8 rounded-lg shadow-lg text-center relative border-4 border-[#F57C00] hover:shadow-2xl transition duration-300 ease-in-out" // White Card with Orange Border
            >
              {/* Profile Image */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-[#003366] bg-[#000000] p-1" // Dark Blue Border, Black BG
                />
              </div>

              {/* Testimonial Content */}
              <p className="text-[#000000] italic mb-4">{testimonial.text}</p> {/* Black Text */}
              <h3 className="text-xl font-bold text-[#F57C00]">{testimonial.name}</h3> {/* Orange Name */}
              <p className="text-[#000000] opacity-80">{testimonial.role}</p> {/* Lightened Black Role */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}