// const CtaSection = () => {
//     return (
//       <div className="bg-blue-600  h-screen py-20 text-white text-center">
//         <h2 className="text-3xl font-bold">Get Started</h2>
//         <p className="mt-4">
//           Your next big opportunity is just a conversation away. Whether you re looking to revamp your website, launch a mobile app, or need a full-fledged digital strategy, NexaVista Technologies is here to help.
//         </p>
//         <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded">
//           Book an Appointment
//         </button>
//       </div>
//     );
//   };
  
//   export default CtaSection;

// components/GetStartedSection.tsx
"use client"; // Required for using hooks and animations in Next.js App Router

import React from "react";
import { motion } from "framer-motion";

export default function GetStartedSection() {
  return (
    <section className="py-16 bg-gradient-to-r  text-white" style={{ backgroundColor: "rgb(107,97,89)" }}>
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-4"
        >
          Get Started
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl mb-8"
        >
          Your next big opportunity is just a conversation away. Whether youre looking to revamp your website, launch a mobile app, or need a full-fledged digital strategy, NexaVista Technologies is here to help.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <button  className="px-6 py-2 bg-white text-gray-600 rounded-full text-sm font-semibold shadow-md hover:bg-gray-200 transition duration-300">
            Book an Appointment
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8"
        >
          <div className="w-24 h-1 bg-white mx-auto animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
}



