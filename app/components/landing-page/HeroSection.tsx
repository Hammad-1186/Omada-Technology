// components/HeroSection.tsx
// "use client"; // Required for using hooks and animations in Next.js App Router

// import React from "react";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion"; // For animations
// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <section
//       className="min-h-screen flex items-center justify-center  bg-cover bg-center text-customText"
//       style={{ backgroundImage: "url('Home.jpg')"}} // Replace with your image path
//     >
//       <div className="text-center">
//         {/* Typewriter Animation */}
//         <h1 className="text-5xl font-bold mb-4">
//           <TypeAnimation
//             sequence={[
//               "We Build Websites, Apps, and", // Line 1
//               1000, // Delay after Line 1
//               "We Build Websites, Apps, and\nStrategies Designed to Boost your", // Line 1 + Line 2
//               1000, // Delay after Line 2
//               "We Build Websites, Apps, and\nStrategies Designed to Boost your\nReach and Revenue", // Line 1 + Line 2 + Line 3
//               1000, // Delay after Line 3
//               "", // Reset to empty (start over)
//               500, // Delay before restarting
//             ]}
//             speed={50} // Typing speed
//             repeat={Infinity} // Loop the animation
//             style={{
//               fontSize: "3.5rem",
//               whiteSpace: "pre-line", // Allow line breaks
//               display: "block", // Ensure the text container is a block element
//             }}
//             cursor={true} // Show the typing cursor
//           />
//         </h1>

//         {/* Paragraph Text */}
//         <motion.p
//           initial={{ opacity: 0, y: 50 }} // Start from bottom
//           whileInView={{ opacity: 1, y: 0 }} // Move to original position
//           transition={{ duration: 0.8, delay: 0.1 }} // Delay to start after typewriter animation
//           className="text-s mt-8 max-w-2xl mx-auto font-poppins" // Limit width for 2-3 lines
//         >
//           NexaVista Technologies is your partner in turning complex ideas into
//           intuitive digital solutions that resonate with your audience.
//         </motion.p>

//         {/* Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }} // Start from bottom
//           whileInView={{ opacity: 1, y: 0 }} // Move to original position
//           transition={{ duration: 0.8, delay: 0.1 }} // Delay to start after paragraph
//           className="mt-8"
//         >
//           <Link
//             href="/appointment"
//             className="px-12 py-4 bg-customText text-gray-600 rounded-full text-sm  shadow-md hover:bg-gray-200 transition duration-300"
//           >
//             Discover the Possibilities
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client"; // Required for using hooks and animations in Next.js App Router

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion"; // For animations
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-[#F57C00]">
      <div className="text-center">
        {/* Typewriter Animation */}
        <h1 className="text-5xl font-bold mb-4">
          <TypeAnimation
            sequence={[
              "We Build Websites, Apps, and",
              1000,
              "We Build Websites, Apps, and\nStrategies Designed to Boost your",
              1000,
              "We Build Websites, Apps, and\nStrategies Designed to Boost your\nReach and Revenue",
              1000,
              "",
              500,
            ]}
            speed={50}
            repeat={Infinity}
            style={{
              fontSize: "3.5rem",
              whiteSpace: "pre-line",
              display: "block",
            }}
            cursor={true}
          />
        </h1>

        {/* Paragraph Text */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg mt-8 max-w-2xl mx-auto font-poppins text-white"
        >
          NexaVista Technologies is your partner in turning complex ideas into
          intuitive digital solutions that resonate with your audience.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8"
        >
          <Link
            href="/appointment"
            className="px-4 py-2 border-2 border-[#f57c00] text-white rounded-full  hover:text-[#f57c00] transition inline-block"
            >
            Discover the Possibilities
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
