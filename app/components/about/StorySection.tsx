// "use client"; 

// import React from "react";
// import { motion } from "framer-motion"; 

// export default function StorySection() {
//   return (
//     <section className="min-h-screen[150] flex items-center justify-center bg-cover bg-center text-customText" style={{ backgroundColor: "rgb(236, 228, 217)" }}>
//       <div className="text-center px-4">
        
//         {/* Heading Animation */}
//         <motion.h2
//           initial={{ opacity: 0, y: -50 }} // Move from top
//           whileInView={{ opacity: 1, y: 0 }} // Move to original position
//           transition={{ duration: 0.8 }} // Smooth transition
//           className="text-3xl font-bold"
//           style={{ color: "rgb(63,58,52)" }}
//         >
//           Our Story
//         </motion.h2>

//         {/* Paragraph Text Animation */}
//         <motion.p
//           initial={{ opacity: 0, y: 50 }} // Start from bottom
//           whileInView={{ opacity: 1, y: 0 }} // Move to original position
//           transition={{ duration: 0.8, delay: 0.1 }} // Delayed animation
//           className="text-sm mt-6 max-w-2xl mx-auto font-poppins text-white"
//           style={{ color: "rgb(142,142,148)" }}
//         >
//           NexaVista Technologies began with a simple idea: to create a digital agency that combines
//           technical expertise with a genuine passion for helping businesses succeed. From our humble
//           beginnings, we have grown into a full-service digital agency, serving clients across various industries. Our journey has been one of continuous learning, growth, and adaptation. We are
//           proud of the work we have done and excited for the future as we continue to expand our 
//           services and reach.
//         </motion.p>

//       </div>
//     </section>
//   );
// }
