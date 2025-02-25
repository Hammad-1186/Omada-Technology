// "use client";
// import React, { useState } from "react";
// import { FaUser, FaEnvelope, FaPhone, FaComment } from "react-icons/fa"; // Importing icons

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   const inputFieldClasses = "pl-10 p-3 border rounded-lg w-full focus:ring-2 focus:ring-yellow-400 transition hover:shadow-lg";

//   return (
//     <div className="bg-gradient-to-r from-[#371802] to-[#5a2a07] min-h-screen flex justify-center items-center">
//       <div className="container mx-auto px-6 pt-40 pb-16">
//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Left Side */}
//           <div className="text-white">
//             <h2 className="text-4xl font-bold mb-6">📞 Contact Us</h2>
//             <p className="mb-6 text-lg leading-relaxed">
//               Have a project in mind? Let’s discuss how we can help bring your ideas to life! 
//               Fill in the form or reach out to us directly.
//             </p>
//             <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300">
//               Book an Appointment
//             </button>
//             <div className="mt-8 text-lg">
//               <p className="font-semibold">📍 Office No 1, Floor No 3, Plaza 74,</p>
//               <p>Spring North Commercial,</p>
//               <p>Bahria Town Phase 7, Islamabad, Pakistan.</p>
//               <p className="mt-4">📞 +92 (336) 8323237</p>
//               <p>📧 sales@nexavistatech.com</p>
//             </div>
//           </div>

//           {/* Right Side (Form) */}
//           <div className=" p-10 rounded-lg shadow-2xl" style={{ backgroundColor: "rgb(236, 228, 217)" }}>
//             <h3 className="text-3xl font-semibold mb-6 text-gray-800">📩 Get in Touch</h3>
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="relative">
//                   <FaUser className="absolute left-3 top-3 text-gray-500" />
//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className={inputFieldClasses}
//                     required
//                   />
//                 </div>
//                 <div className="relative">
//                   <FaUser className="absolute left-3 top-3 text-gray-500" />
//                   <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className={inputFieldClasses}
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="relative">
//                 <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={inputFieldClasses}
//                   required
//                 />
//               </div>
//               <div className="relative">
//                 <FaPhone className="absolute left-3 top-3 text-gray-500" />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone No"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className={inputFieldClasses}
//                   required
//                 />
//               </div>
//               <div className="relative">
//                 <FaComment className="absolute left-3 top-3 text-gray-500" />
//                 <textarea
//                   name="message"
//                   placeholder="Message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className={inputFieldClasses + " h-28"}
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-[#5a2a07] to-[#371802] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//               >
//                 🚀 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
// // 


"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { FaUser, FaEnvelope, FaPhone, FaComment } from "react-icons/fa"; // Importing icons
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const inputFieldClasses =
    "pl-10 p-3 border rounded-lg w-full focus:ring-2 focus:ring-yellow-400 transition hover:shadow-lg";

  return (
    <div>
      {/* Section 1 - Intro */}
      <section className="min-h-[500] bg-gradient-to-r from-[#371802] to-[#5a2a07] flex items-center justify-center text-customText">
        <div className="text-center">
          {/* Typewriter Animation */}
          <h1 className="text-5xl font-bold mb-4">
            <TypeAnimation
              sequence={["Get", 1000, "Get in Touch", 1000, "", 500]}
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

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm mt-8 max-w-2xl mx-auto font-poppins"
          >
            Have questions or want to collaborate? We’d love to hear from you. Let’s build something amazing together!
          </motion.p>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="px-12 py-4 bg-customText text-gray-600 rounded-full text-sm shadow-md hover:bg-gray-200 transition duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Contact Form */}
      <section className="py-16 min-h-[400]">
        <div className="grid md:grid-cols-2 gap-2 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="contact.jpg"
              alt="Why NexaVista"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-10 rounded-lg shadow-2xl"
            style={{ backgroundColor: "rgb(236, 228, 217)" }}
          >
            <h3 className="text-3xl font-semibold mb-6 text-gray-800">📩 Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-500" />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputFieldClasses}
                    required
                  />
                </div>
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-500" />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputFieldClasses}
                    required
                  />
                </div>
              </div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputFieldClasses}
                  required
                />
              </div>
              <div className="relative">
                <FaPhone className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputFieldClasses}
                  required
                />
              </div>
              <div className="relative">
                <FaComment className="absolute left-3 top-3 text-gray-500" />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputFieldClasses} h-28`}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#5a2a07] to-[#371802] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                🚀 Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
