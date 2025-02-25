// "use client"; // Required for using hooks and animations in Next.js App Router

// import { motion } from "framer-motion";
// import React from "react";

// export default function ValueSection() {
//     return (
//       <section className="py-16 bg-[rgb(236,228,217)]"
//       style={{ backgroundImage: "url('Values.jpg')" }} // Replace with your image path
// >
//         <div className="container mx-auto px-4">
//           {/* Heading Animation */}
//           <motion.h2
//             initial={{ opacity: 0, y: -50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-3xl font-bold text-center mb-4 text-white"
//           >
//             Our Values
//           </motion.h2>
  
//           {/* Text Animation */}

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 mx-auto w-full max-w-3xl ">
//   {[
//     {
//       title: "Innovation",
//       text: "Innovation is at the heart of everything we do. We are constantly exploring new technologies and methodologies to provide our clients with cutting-edge solutions that give them a competitive edge. Whether it’s developing a custom website, creating a mobile app, or crafting a digital marketing strategy, we approach each project with fresh ideas and a forward-thinking mindset."
//     },
//     {
//       title: "Client-Centricity",
//       text: "Our clients are the cornerstone of our success. We believe in building long-term relationships based on trust, transparency, and mutual respect. We listen to our clients, understand their goals, and work collaboratively to deliver solutions that truly make a difference. Our client-centric approach ensures that every project is a partnership, with your success as our ultimate goal."
//     },
//     {
//       title: "Excellence",
//       text: "We strive for excellence in every aspect of our work. From the initial consultation to the final delivery, we maintain the highest standards of quality. Our commitment to excellence drives us to go the extra mile, ensuring that every project is completed to the best of our ability and that our clients are satisfied with the results."
//     },
//     {
//       title: "Integrity",
//       text: "Integrity is a core value that guides all our interactions. We believe in doing business the right way, with honesty, transparency, and a strong ethical foundation. Our clients trust us to deliver on our promises, and we take that responsibility seriously. We are committed to being a company that our clients, partners, and employees can rely on."
//     }
//   ].map((item, idx) => (
//     <div
//       key={idx}
//       className="relative overflow-hidden rounded-lg shadow-lg flex flex-col items-center justify-center h-60 p-6" style={{ backgroundColor: "rgb(63,58,52)",border:"rgb(142,142,148)" }}
//     >
//       <h3 className="text-xl font-semibold text-white ">{item.title}</h3>
//       <p className="text-sm text-white text-center mt-3" style={{ color: "rgb(142,142,148)" }}>{item.text}</p>
//     </div>
//   ))}
// </div>
// </div>
//       </section>
//     );
//   }