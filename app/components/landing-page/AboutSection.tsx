// const AboutSection = () => {
//     return (
//       <div className="bg-gray-100 h-screen">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
          
//           {/* Left Side - Text Content */}
//           <div className="md:w-1/2 text-left  pb-30">
//             <h2 className="text-3xl font-bold">Welcome to Omada</h2>
//             <p className="mt-4">
//               At Omada Technologies, we understand that your business is unique, and so are your digital needs. That’s why we don’t believe in one-size-fits-all solutions.
//             </p>
//             <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded">
//               Contact Us
//             </button>
//           </div>

//           {/* Right Side - Image */}
//           <div className="md:w-1/2 flex justify-center">
//             <img src="WelcomeToNxVs.jpg" alt="About NexaVista" className="w-full max-w-md rounded-lg shadow-lg" />
//           </div>

//         </div>
//       </div>
//     );
// };

// export default AboutSection;


// components/WhyNexaVistaSection.tsx
"use client"; // Required for using hooks and animations in Next.js App Router

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WelcomeNextaVistaSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Heading and Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-[#f57c00] mb-6">
              Welcome to NexaVista
            </h2>
            <p className="text-[#000000] mb-4 text-sm">
              At NexaVista Technologies, we understand that your business is unique, 
              and so are your digital needs.
            </p>
            <p className="text-[#000000] mb-4 text-sm">
              That’s why we don’t believe in one-size-fits-all solutions.
            </p>
            <p className="text-[#000000] mb-4 text-sm">
              We work closely with you to design and develop digital experiences that are 
              not only functional but also memorable.
            </p>
            <p className="text-[#000000] mb-4 text-sm">
              Our approach is simple: listen, innovate, and deliver excellence.
            </p>
            <Link href="/contact"
                        className="px-4 py-2 border-2 border-[#f57c00] hover:border-[#003366] text-[#f57c00] rounded-full  hover:text-[#003366] transition inline-block"
                        >
                    Contact us                      </Link>
          </motion.div>

          {/* Right Side: Picture */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="WelcomeToNxVs.jpg" // Replace with your actual image path
              alt="Why NexaVista"
            
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
