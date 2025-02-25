// "use client"; 

// import React from "react";
// import { motion } from "framer-motion"; 
// import Image from "next/image";

// export default function WhyChooseSection() {
//   return (
//     <section 
//       className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 py-16" 
//       style={{ backgroundColor: "rgb(236,228,217)" }}
//     >
//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: -50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-3xl font-bold mb-8"
//         style={{ color: "rgb(63,58,52)" }}
//       >
//         Why Choose Omada Technology
//       </motion.h2>

//       {/* Buttons Row */}
//       <div className="flex flex-wrap gap-4">
//         {["Innovation", "Expertise", "Reliability"].map((text, index) => (
//           <motion.button
//             key={index}
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.3 }}
//             className="px-6 py-3 rounded-full border-2 font-semibold text-lg shadow-lg transition-all duration-300"
//             style={{
//               backgroundColor: "rgb(63,58,52)", // Same as heading
//               color: "rgb(236,228,217)", // Same as section background
//               borderColor: "rgb(63,58,52)",
//             }}
//           >
//             {text}
//           </motion.button>
//         ))}
//       </div>

//       {/* Large Rounded Rectangular Section */}
//       <motion.div
//         className="relative mt-12 w-full max-w-5xl border-2 rounded-2xl p-10 flex items-center shadow-xl overflow-hidden"
//         whileHover={{ scale: 1.02 }}
//         transition={{ duration: 0.3 }}
//         style={{
//           borderColor: "rgb(236,228,217)",
//           backgroundColor: "rgb(63,58,52)",
//           borderRadius: "30px", // More rounded edges
//           minHeight: "300px", // Increased height
//         }}
//       >
//         {/* Virtual Reflection Effect */}
//         <motion.div
//           className="absolute w-full h-full border-2 rounded-2xl opacity-0"
//           style={{ borderColor: "rgb(236,228,217)" }}
//           whileHover={{
//             opacity: 0.3,
//             scale: 1.05,
//             transition: { duration: 0.5 },
//           }}
//         />
//         <motion.div
//           className="absolute w-full h-full border-2 rounded-2xl opacity-0"
//           style={{ borderColor: "rgb(236,228,217)" }}
//           whileHover={{
//             opacity: 0.2,
//             scale: 1.08,
//             transition: { duration: 0.6 },
//           }}
//         />

//         {/* Left Side: Text */}
//         <div className="flex-1 pr-12">
//           <p className="text-xl leading-relaxed" style={{ color: "rgb(236,228,217)" }}>
//             We don’t believe in one-size-fits-all solutions. Every project
//             we undertake is unique, and we tailor our services to meet
//             the specific needs and goals of our clients. Whether you’re
//             a small business looking to establish an online presence or
//             a large corporation seeking to optimize your digital
//             strategy, we have the expertise to deliver solutions that
//             work for you.
//           </p>
//         </div>

//         {/* Right Side: Image (No Circular Avatar) */}
//         <div className="w-80 h-56 border-2 rounded-lg overflow-hidden" style={{ borderColor: "rgb(236,228,217)" }}>
//           <Image
//             src="/TailoredSolutions.jpg" // Replace with your image path
//             alt="Omada Technology"
//             width={320}
//             height={224}
//             className="object-cover w-full h-full"
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// }
