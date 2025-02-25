// "use client"; 

// import React from "react";
// import { motion } from "framer-motion"; 
// import Image from "next/image"; // For optimized images

// export default function MeetTeamSection() {
//   const teamMembers = [
//     {
//       name: "Mirza Tayyab",
//       role: "COO",
//       position: "Chief Operations Officer",
//       coFounder: "Co-Founder",
//       image: "/Mirza Tayyab.jpg", // Replace with the actual image path
//     },
//     {
//       name: "John Doe",
//       role: "CTO",
//       position: "Chief Technology Officer",
//       coFounder: "Co-Founder",
//       image: "/Mirza Talha.jpg",
//     },
//     {
//       name: "Jane Smith",
//       role: "CEO",
//       position: "Chief Executive Officer",
//       coFounder: "Co-Founder",
//       image: "/Qandeel Khalid.jpg",
//     },
//     {
//       name: "Ali Khan",
//       role: "CMO",
//       position: "Chief Marketing Officer",
//       coFounder: "Co-Founder",
//       image: "/Uzair Shabbir.jpg",
//     },
//     {
//       name: "Sara Lee",
//       role: "CFO",
//       position: "Chief Financial Officer",
//       coFounder: "Co-Founder",
//       image: "/Aniqa Noor.jpg",
//     },
//   ];

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
//         >
//           Meet Our Team
//         </motion.h2>

//         {/* Paragraph Text Animation */}
//         <motion.p
//           initial={{ opacity: 0, y: 50 }} // Start from bottom
//           whileInView={{ opacity: 1, y: 0 }} // Move to original position
//           transition={{ duration: 0.8, delay: 0.1 }} // Delayed animation
//           className="text-sm mt-6 max-w-2xl mx-auto font-poppins text-center"
//           style={{ color: "rgb(236,228,217)" }} // Text color applied
//         >
//           Our team is made up of talented professionals with diverse backgrounds and a shared
//           commitment to excellence. We are designers, developers, marketers, and strategists, all working
//           together to deliver outstanding results for our clients. We believe that our strength lies in our
//           diversity, and we are united by a common goal: to help our clients succeed.
//         </motion.p>
//       </div>

//       {/* Team Members */}
//       <div className="flex flex-wrap justify-center mt-12 gap-6">
//         {teamMembers.map((member, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }} // Start from bottom
//             whileInView={{ opacity: 1, y: 0 }} // Move to original position
//             transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered animation
//             className="flex flex-col items-center"
//           >
//             {/* Circular Avatar */}
//             <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-400 shadow-lg">
//               <Image 
//                 src={member.image} 
//                 alt={member.name} 
//                 width={128} 
//                 height={128} 
//                 className="object-cover w-full h-full" 
//               />
//             </div>

//             {/* Member Info */}
//             <h3 className="text-lg font-semibold mt-4" style={{ color: "rgb(236,228,217)" }}>
//               {member.name}
//             </h3>
//             <p className="text-sm" style={{ color: "rgb(236,228,217)" }}>
//               {member.role}
//             </p>
//             <p className="text-xs" style={{ color: "rgb(236,228,217)" }}>
//               {member.position}
//             </p>
//             <p className="text-xs font-semibold" style={{ color: "rgb(236,228,217)" }}>
//               {member.coFounder}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
