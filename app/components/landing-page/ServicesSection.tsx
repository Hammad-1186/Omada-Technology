// // components/WhyNexaVistaSection.tsx
// "use client"; // Required for using hooks and animations in Next.js App Router

// import React from "react";
// import { motion } from "framer-motion";

// export default function WhyNexaVistaSection() {
//   return (
// <section className="py-16" style={{ backgroundColor: "rgb(236, 228, 217)" }}>
// <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex justify-center"
//           >
//             <img
//               src="WhyNxVs.jpg"
//               alt="Why NexaVista"
//               className="rounded-lg shadow-lg"
//             />
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl font-bold mb-6">Why NexaVista Technologies?</h2>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <span className="text-green-500 mr-2">✓</span>
//                 <div>
//                   <h3 className="font-bold">Visionary Approach</h3>
//                   <p className="text-gray-600">
//                     We don’t just follow trends—we set them. Our solutions are designed to be ahead of the curve.
//                   </p>
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-500 mr-2">✓</span>
//                 <div>
//                   <h3 className="font-bold">Client-First Philosophy</h3>
//                   <p className="text-gray-600">
//                     Your success is our success. We work collaboratively to ensure every project exceeds expectations.
//                   </p>
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-500 mr-2">✓</span>
//                 <div>
//                   <h3 className="font-bold">Proven Success</h3>
//                   <p className="text-gray-600">
//                     Our clients’ growth and success stories are a testament to our commitment and expertise.
//                   </p>
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-500 mr-2">✓</span>
//                 <div>
//                   <h3 className="font-bold">Innovation-Driven</h3>
//                   <p className="text-gray-600">
//                     We embrace new technologies and methodologies to deliver innovative and effective solutions.
//                   </p>
//                 </div>
//               </li>
//             </ul>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react"; // Import arrow icons

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

export default function WhyNexaVistaSection() {
    const [showAll, setShowAll] = useState(false);
    const visibleServices = showAll ? servicesData : servicesData.slice(0, 4);
  
    return (
      <section className="py-16 bg-[#003366]">
        <div className="container mx-auto px-4">
          {/* Animated Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-8 text-[#FFFFFF]"
          >
            Why Omada Technology
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
              className="flex items-center mx-auto bg-[#003366] text-[#FFFFFF] px-6 py-3 rounded-full font-semibold hover:bg-[#000000] transition duration-200 border-2 border-[#000000] hover:border-[#f57c00]"
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
    );
  }