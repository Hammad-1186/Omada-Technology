"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";

export default function GraphicDesigningPage() {
  return (
    <div>
      {/* First Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center text-customText"
        style={{ backgroundImage: "url('Graphic-1.jpg')" }} // Replace with your image path
      >
        <div className="text-center">
          {/* Typewriter Animation */}
          <h1 className="text-5xl font-bold mb-4">
            <TypeAnimation
              sequence={[
                "Creative Design Solutions That ", // Line 1
                1000, // Delay after Line 1
                "Creative Design Solutions That \nElevate Your brand ", // Line 1 + Line 2
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
            Visual identity is a powerful tool in today’s market. At NexaVista Technologies,
            we understand that great design is more than just aesthetics—it’s about
            communicating your brand’s message in a way that resonates with your
            audience. Our graphic designing services are tailored to bring your vision to life,
            ensuring your brand stands out and leaves a lasting impression.
          </motion.p>

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

      {/* Second Section */}
      <section
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 py-16"
        style={{ backgroundColor: "rgb(236,228,217)" }}
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }} // Start from bottom
          whileInView={{ opacity: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8"
          style={{ color: "rgb(63,58,52)" }}
        >
            Our Graphic Designing Services
        </motion.h2>

        {/* Buttons Row */}
        <div className="flex flex-wrap gap-4">
          {["Image& Video Editing", "Logo Designing", "Brand Guides","Flyer & Brochure Design", " Social Media Post Creation"].map((text, index) => (
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
            <p className="text-l leading-relaxed" style={{ color: "rgb(236,228,217)" }}>
            In a world where visuals speak louder than words, high
            -quality images and videos are essential. We offer
            professional image and video editing services that
            enhance your visual content, making it more engaging and
            impactful. Whether it’s for social media, marketing
            campaigns, or your website, we ensure your visuals are
            polished and perfectly aligned with your brand.
            </p>
          </div>

          {/* Right Side: Image (No Circular Avatar) */}
          <div className="w-80 h-56 border-2 rounded-lg overflow-hidden" style={{ borderColor: "rgb(236,228,217)" }}>
            <Image
              src="/Graphic-2.jpg" // Replace with your image path
              alt="Omada Technology"
              width={320}
              height={224}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Third Section */}
      <section
        className="py-16 bg-[rgb(236,228,217)]"
        style={{ backgroundImage: "url('Graphic-3.jpg')" }} // Replace with your image path
      >
        <div className="container mx-auto px-4">
          {/* Heading Animation */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-4 text-white"
          >
            Why Choose NexaVista Technologies
            for Graphic Designing?
          </motion.h2>

          {/* Text Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 mx-auto w-full max-w-3xl">
            {[
              {
                title: "Creative Expertise",
                text: "Our team of designers brings a wealth of creativity and technical skill to every project. We stay on top of design trends while ensuring that your visuals are timeless and aligned with your brand’s unique identity."
              },
              {
                title: "Tailored-Design",
                text: "We don’t believe in one-size-fits-all. Every design we create is customized to meet your specific needs, ensuring that your brand stands out and makes an impact."
              },
              {
                title: "Attention to Detail",
                text: "From concept to final delivery, we pay meticulous attention to every detail, ensuring that your design is flawless and effective in achieving your goals."
              },
              {
                title: "Collaborative Processs",
                text: "We work closely with you throughout the design process, incorporating your feedback and ideas to ensure that the final product not only meets but exceeds your expectations."
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
                 {/* Third Section */}
      <section 
      className="min-h-screen[100] flex flex-col items-center justify-center bg-cover bg-center px-4 py-16" 
      style={{ backgroundColor: "rgb(236,228,217)" }} // Background color applied
    >
      <div className="text-center">
        
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }} // Move from top
          whileInView={{ opacity: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.8 }} // Smooth transition
          className="text-3xl font-bold"
          style={{ color: "rgb(63,58,52)" }} // Text color applied
>
                Let’s Create Something Beautiful Together       </motion.h2>

        {/* Paragraph Text Animation */}
        <motion.p
          initial={{ opacity: 0, y: 50 }} // Start from bottom
          whileInView={{ opacity: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.8, delay: 0.1 }} // Delayed animation
          className="text-sm mt-6 max-w-2xl mx-auto font-poppins text-center"
          style={{ color: "rgb(63,58,52)" }} // Text color applied
        >
       Ready to elevate your brand with stunning visuals? NexaVista Technologies is here to help you make a lasting impression
        with designs that are both beautiful and strategic.
        </motion.p>
       
           <div className="mt-8">
            <Link
            href="/contact"
            className="px-12 py-4  text-white rounded-full text-sm  shadow-md hover:bg-gray-200 transition duration-300" style={{ background: "rgb(63,58,52)" }} // Text color applied

          >
            Contact Us Today</Link>
            </div>
          
      
      </div>

      {/* Team Members */}
    
    </section>
    </div>
)
    }