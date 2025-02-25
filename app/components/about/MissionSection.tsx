// "use client"; // Required for using hooks and animations in Next.js App Router

// import React from "react";
// import { motion } from "framer-motion";

// export default function MissionSection() {
//   return (
//     <section className="py-16 flex items-center justify-center min-h-[40]" style={{ backgroundColor: "rgb(236, 228, 217)" }}>
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        
//         {/* Left Side: Heading and Text */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-lg"
//         >
//           <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
//           <p className="text-gray-600">
//             At NexaVista Technologies, our mission is simple: to help our clients succeed in the digital world. We aim to deliver tailored solutions that not only meet but exceed our clients’ expectations. By combining our technical expertise with a deep understanding of our clients’ needs, we create digital experiences that are not only functional but also impactful.
//           </p>
//         </motion.div>

//         {/* Right Side: Picture */}
//         <motion.div
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mt-8 md:mt-0 md:ml-12 flex justify-center"
//         >
//           <img
//             src="OurMission.jpg" // Replace with your image path
//             alt="Why NexaVista"
//             className="rounded-lg shadow-lg max-w-xs md:max-w-md"
//           />
//         </motion.div>

//       </div>
//     </section>
//   );
// }
