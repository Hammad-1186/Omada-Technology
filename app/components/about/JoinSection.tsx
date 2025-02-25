// "use client"; 

// import React from "react";
// import { motion } from "framer-motion"; 
// import Link from "next/link";

// export default function JoinSection() {
//   return (
//     <section 
//       className="min-h-screen[100] flex flex-col items-center justify-center bg-cover bg-center px-4 py-16" 
//       style={{ backgroundColor: "rgb(63,58,52)" }} // Background color applied
//     >
//       <div className="text-center">
        
//         {/* Heading Animation */}
//         <motion.h2
//           initial={{ opacity: 0, y: -50 }} // Move from top
//           whileInView={{ opacity: 1, y: 0 }} // Move to original position
//           transition={{ duration: 0.8 }} // Smooth transition
//           className="text-3xl font-bold"
//           style={{ color: "rgb(236,228,217)" }} // Text color applied
// >
//                 Join Us On Our Journey        </motion.h2>

//         {/* Paragraph Text Animation */}
//         <motion.p
//           initial={{ opacity: 0, y: 50 }} // Start from bottom
//           whileInView={{ opacity: 1, y: 0 }} // Move to original position
//           transition={{ duration: 0.8, delay: 0.1 }} // Delayed animation
//           className="text-sm mt-6 max-w-2xl mx-auto font-poppins text-center"
//           style={{ color: "rgb(236,228,217)" }} // Text color applied
//         >
//         At NexaVista Technologies, we believe that the best is yet to come. We are excited about the
//         future and the opportunities it holds for our clients and our team. We invite you to join us on this
//         journey and discover how we can help your business thrive in the digital age.
//         </motion.p>
//         <div className="mt-8">
//           <Link
//             href="/contact"
//             className="px-12 py-4 bg-customText text-gray-600 rounded-full text-sm  shadow-md hover:bg-gray-200 transition duration-300"
//           >
//             Contact US          </Link>
//         </div>
      
//       </div>

//       {/* Team Members */}
    
//     </section>
//   );
// }
