// "use client"; // Required for using hooks and animations in Next.js App Router

// import React from "react";
// import { motion } from "framer-motion";

// export default function VisionSection() {
//   return (
// <section className="py-6" style={{ backgroundColor: "rgb(63,58,52)" }}>
// <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex justify-center"
//           >
//             <img
//               src="OurVision.jpg"
//               alt="Why NexaVista"
//               className="rounded-lg shadow-lg"
//             />
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
//             <ul className="space-y-4">
//               <li className="flex items-start">
                
//                   <p className="text-white">
//                   In today’s mobile-first world, having an app that connects with your audience is crucial. We specialize in developing mobile applications that are intuitive, responsive, and engaging, ensuring that your brand is always within reach.                  </p>
                
//               </li>
            
//             </ul>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }