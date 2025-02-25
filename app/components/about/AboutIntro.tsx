"use client"; // Required for using hooks and animations in Next.js App Router

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion"; // For animations
import Link from "next/link";
import Image from "next/image"; // For optimized images

export default function ElevateBrand() {
  const teamMembers = [
    {
      name: "Mirza Tayyab",
      role: "COO",
      position: "Chief Operations Officer",
      coFounder: "Co-Founder",
      image: "/Mirza Tayyab.jpg", // Replace with the actual image path
    },
    {
      name: "John Doe",
      role: "CTO",
      position: "Chief Technology Officer",
      coFounder: "Co-Founder",
      image: "/Mirza Talha.jpg",
    },
    {
      name: "Jane Smith",
      role: "CEO",
      position: "Chief Executive Officer",
      coFounder: "Co-Founder",
      image: "/Qandeel Khalid.jpg",
    },
    {
      name: "Ali Khan",
      role: "CMO",
      position: "Chief Marketing Officer",
      coFounder: "Co-Founder",
      image: "/Uzair Shabbir.jpg",
    },
    {
      name: "Sara Lee",
      role: "CFO",
      position: "Chief Financial Officer",
      coFounder: "Co-Founder",
      image: "/Aniqa Noor.jpg",
    },
  ];

  return (
    <div>
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-customText"
      style={{ backgroundImage: "url('AboutIntro.jpg')" }} // Replace with your image path
    >
      <div className="text-center">
        {/* Typewriter Animation */}
        <h1 className="text-5xl font-bold mb-4">
          <TypeAnimation
            sequence={[
              "Our Journey,Mission,Vision at", // Line 1
              1000, // Delay after Line 1
              "Our Journey,Mission,Vision at\nOmada Technologies", // Line 1 + Line 2
              1000, // Delay after Line 2
              "", // Reset to empty (start over)
              500, // Delay before restarting
            ]}
            speed={50} // Typing speed
            repeat={Infinity} // Loop the animation
            style={{
              fontSize: "3.5rem",
              whiteSpace: "pre-line", // Allow line breaks
              display: "block", // Ensure the text container is a block element
            }}
            cursor={true} // Show the typing cursor
          />
        </h1>

        {/* Paragraph Text */}
        <motion.p
          initial={{ opacity: 0, y: 50 }} // Start from bottom
          whileInView={{ opacity: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.8, delay: 0.1 }} // Delay to start after typewriter animation
          className="text-s mt-8 max-w-2xl mx-auto font-poppins" // Limit width for 2-3 lines
        >
          NexaVista Technologies was founded with a clear mission: to empower businesses by providing innovative, high-quality digital solutions. We are a team of passionate professionals, each bringing unique expertise and a shared commitment to excellence. Our core belief is that technology, when applied creatively and strategically, can transform businesses and drive growth in meaningful ways.        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start from bottom
          whileInView={{ opacity: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.8, delay: 0.1 }} // Delay to start after paragraph
          className="mt-8"
        >
          <Link
            href="/appointment"
            className="px-12 py-4 bg-customText text-gray-600 rounded-full text-sm shadow-md hover:bg-gray-200 transition duration-300"
          >
            Discover the Possibilities
          </Link>
        </motion.div>
      </div>
    </section>


                          {/* Section 2 */}

      <section className="py-16 flex items-center justify-center min-h-[40]" style={{ backgroundColor: "rgb(236, 228, 217)" }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        
        {/* Left Side: Heading and Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600">
            At NexaVista Technologies, our mission is simple: to help our clients succeed in the digital world. We aim to deliver tailored solutions that not only meet but exceed our clients’ expectations. By combining our technical expertise with a deep understanding of our clients’ needs, we create digital experiences that are not only functional but also impactful.
          </p>
        </motion.div>

        {/* Right Side: Picture */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 md:mt-0 md:ml-12 flex justify-center"
        >
          <img
            src="OurMission.jpg" // Replace with your image path
            alt="Why NexaVista"
            className="rounded-lg shadow-lg max-w-xs md:max-w-md"
          />
        </motion.div>

      </div>
    </section>


                                {/* Section 3 */}


                 <section className="py-6" style={{ backgroundColor: "rgb(63,58,52)" }}>
                 <div className="container mx-auto px-4">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                           <motion.div
                             initial={{ opacity: 0, x: -100 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             transition={{ duration: 0.8 }}
                             className="flex justify-center"
                           >
                             <img
                               src="OurVision.jpg"
                               alt="Why NexaVista"
                               className="rounded-lg shadow-lg"
                             />
                           </motion.div>
                           <motion.div
                             initial={{ opacity: 0, x: 100 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             transition={{ duration: 0.8 }}
                           >
                             <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
                             <ul className="space-y-4">
                               <li className="flex items-start">
                                 
                                   <p className="text-white">
                                   In today’s mobile-first world, having an app that connects with your audience is crucial. We specialize in developing mobile applications that are intuitive, responsive, and engaging, ensuring that your brand is always within reach.                  </p>
                                 
                               </li>
                             
                             </ul>
                           </motion.div>
                         </div>
                       </div>
                     </section>


                     {/* Section 4                */}
                   <section className="py-16 bg-[rgb(236,228,217)]"
                        style={{ backgroundImage: "url('Values.jpg')" }} // Replace with your image path
                  >
                          <div className="container mx-auto px-4">
                            {/* Heading Animation */}
                            <motion.h2
                              initial={{ opacity: 0, y: -50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              className="text-3xl font-bold text-center mb-4 text-white"
                            >
                              Our Values
                            </motion.h2>
                    
                            {/* Text Animation */}
                  
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 mx-auto w-full max-w-3xl ">
                    {[
                      {
                        title: "Innovation",
                        text: "Innovation is at the heart of everything we do. We are constantly exploring new technologies and methodologies to provide our clients with cutting-edge solutions that give them a competitive edge. Whether it’s developing a custom website, creating a mobile app, or crafting a digital marketing strategy, we approach each project with fresh ideas and a forward-thinking mindset."
                      },
                      {
                        title: "Client-Centricity",
                        text: "Our clients are the cornerstone of our success. We believe in building long-term relationships based on trust, transparency, and mutual respect. We listen to our clients, understand their goals, and work collaboratively to deliver solutions that truly make a difference. Our client-centric approach ensures that every project is a partnership, with your success as our ultimate goal."
                      },
                      {
                        title: "Excellence",
                        text: "We strive for excellence in every aspect of our work. From the initial consultation to the final delivery, we maintain the highest standards of quality. Our commitment to excellence drives us to go the extra mile, ensuring that every project is completed to the best of our ability and that our clients are satisfied with the results."
                      },
                      {
                        title: "Integrity",
                        text: "Integrity is a core value that guides all our interactions. We believe in doing business the right way, with honesty, transparency, and a strong ethical foundation. Our clients trust us to deliver on our promises, and we take that responsibility seriously. We are committed to being a company that our clients, partners, and employees can rely on."
                      }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="relative overflow-hidden rounded-lg shadow-lg flex flex-col items-center justify-center h-60 p-6" style={{ backgroundColor: "rgb(63,58,52)",border:"rgb(142,142,148)" }}
                      >
                        <h3 className="text-xl font-semibold text-white ">{item.title}</h3>
                        <p className="text-sm text-white text-center mt-3" style={{ color: "rgb(142,142,148)" }}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                  </div>
                        </section>



                        {/* Section 5 */}

                       <section className="min-h-screen[150] flex items-center justify-center bg-cover bg-center text-customText" style={{ backgroundColor: "rgb(236, 228, 217)" }}>
                            <div className="text-center px-4">
                              
                              {/* Heading Animation */}
                              <motion.h2
                                initial={{ opacity: 0, y: -50 }} // Move from top
                                whileInView={{ opacity: 1, y: 0 }} // Move to original position
                                transition={{ duration: 0.8 }} // Smooth transition
                                className="text-3xl font-bold"
                                style={{ color: "rgb(63,58,52)" }}
                              >
                                Our Story
                              </motion.h2>
                      
                              {/* Paragraph Text Animation */}
                              <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start from bottom
                                whileInView={{ opacity: 1, y: 0 }} // Move to original position
                                transition={{ duration: 0.8, delay: 0.1 }} // Delayed animation
                                className="text-sm mt-6 max-w-2xl mx-auto font-poppins text-white"
                                style={{ color: "rgb(142,142,148)" }}
                              >
                                NexaVista Technologies began with a simple idea: to create a digital agency that combines
                                technical expertise with a genuine passion for helping businesses succeed. From our humble
                                beginnings, we have grown into a full-service digital agency, serving clients across various industries. Our journey has been one of continuous learning, growth, and adaptation. We are
                                proud of the work we have done and excited for the future as we continue to expand our 
                                services and reach.
                              </motion.p>
                      
                            </div>
                          </section>
                      


                      {/* Section 6 */}

                       <section 
                            className="min-h-screen[100] flex flex-col items-center justify-center bg-cover bg-center px-4 py-16" 
                            style={{ backgroundColor: "rgb(63,58,52)" }} // Background color applied
                          >
                            <div className="text-center">
                              
                              {/* Heading Animation */}
                              <motion.h2
                                initial={{ opacity: 0, y: -50 }} // Move from top
                                whileInView={{ opacity: 1, y: 0 }} // Move to original position
                                transition={{ duration: 0.8 }} // Smooth transition
                                className="text-3xl font-bold"
                                style={{ color: "rgb(236,228,217)" }} // Text color applied
                              >
                                Meet Our Team
                              </motion.h2>
                      
                              {/* Paragraph Text Animation */}
                              <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start from bottom
                                whileInView={{ opacity: 1, y: 0 }} // Move to original position
                                transition={{ duration: 0.8, delay: 0.1 }} // Delayed animation
                                className="text-sm mt-6 max-w-2xl mx-auto font-poppins text-center"
                                style={{ color: "rgb(236,228,217)" }} // Text color applied
                              >
                                Our team is made up of talented professionals with diverse backgrounds and a shared
                                commitment to excellence. We are designers, developers, marketers, and strategists, all working
                                together to deliver outstanding results for our clients. We believe that our strength lies in our
                                diversity, and we are united by a common goal: to help our clients succeed.
                              </motion.p>
                            </div>
                      
                            {/* Team Members */}
                            <div className="flex flex-wrap justify-center mt-12 gap-6">
                              {teamMembers.map((member, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, y: 50 }} // Start from bottom
                                  whileInView={{ opacity: 1, y: 0 }} // Move to original position
                                  transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered animation
                                  className="flex flex-col items-center"
                                >
                                  {/* Circular Avatar */}
                                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-400 shadow-lg">
                                    <Image 
                                      src={member.image} 
                                      alt={member.name} 
                                      width={128} 
                                      height={128} 
                                      className="object-cover w-full h-full" 
                                    />
                                  </div>
                      
                                  {/* Member Info */}
                                  <h3 className="text-lg font-semibold mt-4" style={{ color: "rgb(236,228,217)" }}>
                                    {member.name}
                                  </h3>
                                  <p className="text-sm" style={{ color: "rgb(236,228,217)" }}>
                                    {member.role}
                                  </p>
                                  <p className="text-xs" style={{ color: "rgb(236,228,217)" }}>
                                    {member.position}
                                  </p>
                                  <p className="text-xs font-semibold" style={{ color: "rgb(236,228,217)" }}>
                                    {member.coFounder}
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          </section>



                          {/* Section 7 */}


                           <section 
                                className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 py-16" 
                                style={{ backgroundColor: "rgb(236,228,217)" }}
                              >
                                {/* Heading */}
                                <motion.h2
                                  initial={{ opacity: 0, y: -50 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.8 }}
                                  className="text-3xl font-bold mb-8"
                                  style={{ color: "rgb(63,58,52)" }}
                                >
                                  Why Choose Omada Technology
                                </motion.h2>
                          
                                {/* Buttons Row */}
                                <div className="flex flex-wrap gap-4">
                                  {["Innovation", "Expertise", "Reliability"].map((text, index) => (
                                    <motion.button
                                      key={index}
                                      whileHover={{ scale: 1.1 }}
                                      transition={{ duration: 0.3 }}
                                      className="px-6 py-3 rounded-full border-2 font-semibold text-lg shadow-lg transition-all duration-300"
                                      style={{
                                        backgroundColor: "rgb(63,58,52)", // Same as heading
                                        color: "rgb(236,228,217)", // Same as section background
                                        borderColor: "rgb(63,58,52)",
                                      }}
                                    >
                                      {text}
                                    </motion.button>
                                  ))}
                                </div>
                          
                                {/* Large Rounded Rectangular Section */}
                                <motion.div
                                  className="relative mt-12 w-full max-w-5xl border-2 rounded-2xl p-10 flex items-center shadow-xl overflow-hidden"
                                  whileHover={{ scale: 1.02 }}
                                  transition={{ duration: 0.3 }}
                                  style={{
                                    borderColor: "rgb(236,228,217)",
                                    backgroundColor: "rgb(63,58,52)",
                                    borderRadius: "30px", // More rounded edges
                                    minHeight: "300px", // Increased height
                                  }}
                                >
                                  {/* Virtual Reflection Effect */}
                                  <motion.div
                                    className="absolute w-full h-full border-2 rounded-2xl opacity-0"
                                    style={{ borderColor: "rgb(236,228,217)" }}
                                    whileHover={{
                                      opacity: 0.3,
                                      scale: 1.05,
                                      transition: { duration: 0.5 },
                                    }}
                                  />
                                  <motion.div
                                    className="absolute w-full h-full border-2 rounded-2xl opacity-0"
                                    style={{ borderColor: "rgb(236,228,217)" }}
                                    whileHover={{
                                      opacity: 0.2,
                                      scale: 1.08,
                                      transition: { duration: 0.6 },
                                    }}
                                  />
                          
                                  {/* Left Side: Text */}
                                  <div className="flex-1 pr-12">
                                    <p className="text-xl leading-relaxed" style={{ color: "rgb(236,228,217)" }}>
                                      We don’t believe in one-size-fits-all solutions. Every project
                                      we undertake is unique, and we tailor our services to meet
                                      the specific needs and goals of our clients. Whether you’re
                                      a small business looking to establish an online presence or
                                      a large corporation seeking to optimize your digital
                                      strategy, we have the expertise to deliver solutions that
                                      work for you.
                                    </p>
                                  </div>
                          
                                  {/* Right Side: Image (No Circular Avatar) */}
                                  <div className="w-80 h-56 border-2 rounded-lg overflow-hidden" style={{ borderColor: "rgb(236,228,217)" }}>
                                    <Image
                                      src="/TailoredSolutions.jpg" // Replace with your image path
                                      alt="Omada Technology"
                                      width={320}
                                      height={224}
                                      className="object-cover w-full h-full"
                                    />
                                  </div>
                                </motion.div>
                              </section>


                                      {/* Section 8 */}

                                      <section 
      className="min-h-screen[100] flex flex-col items-center justify-center bg-cover bg-center px-4 py-16" 
      style={{ backgroundColor: "rgb(63,58,52)" }} // Background color applied
    >
      <div className="text-center">
        
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }} // Move from top
          whileInView={{ opacity: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.8 }} // Smooth transition
          className="text-3xl font-bold"
          style={{ color: "rgb(236,228,217)" }} // Text color applied
>
                Join Us On Our Journey        </motion.h2>

        {/* Paragraph Text Animation */}
        <motion.p
          initial={{ opacity: 0, y: 50 }} // Start from bottom
          whileInView={{ opacity: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.8, delay: 0.1 }} // Delayed animation
          className="text-sm mt-6 max-w-2xl mx-auto font-poppins text-center"
          style={{ color: "rgb(236,228,217)" }} // Text color applied
        >
        At NexaVista Technologies, we believe that the best is yet to come. We are excited about the
        future and the opportunities it holds for our clients and our team. We invite you to join us on this
        journey and discover how we can help your business thrive in the digital age.
        </motion.p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="px-12 py-4 bg-customText text-gray-600 rounded-full text-sm  shadow-md hover:bg-gray-200 transition duration-300"
          >
            Contact US          </Link>
        </div>
      
      </div>

      {/* Team Members */}
    
    </section>
    </div>
  );
}
