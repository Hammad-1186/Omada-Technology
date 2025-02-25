"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";

export default function DigitalMarketingPage() {
  return (
    <div>
      {/* First Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center text-customText"
        style={{ backgroundImage: "url('MarketingHero.jpg')" }} // Replace with your image path
      >
        <div className="text-center">
          {/* Typewriter Animation */}
          <h1 className="text-5xl font-bold mb-4">
            <TypeAnimation
              sequence={[
                "Strategic Digital Marketing That ", // Line 1
                1000, // Delay after Line 1
                "Strategic Digital Marketing That \nDrives Results  ", // Line 1 + Line 2
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
            In today’s digital world, visibility is everything. At NexaVista Technologies, we
            understand that reaching your target audience requires more than just a
            presence—it requires strategy, creativity, and a deep understanding of digital
            landscapes. Our digital marketing services are designed to help your business
            stand out, engage, and convert in a crowded online space.
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
            Our Digital Marketing Services
        </motion.h2>

        {/* Buttons Row */}
        <div className="flex flex-wrap gap-4">
          {["Email Marketing", "Social Media Marketing", "SEO[Search Engine Optimization]"].map((text, index) => (
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
            Email remains one of the most powerful tools in your
            marketing arsenal. We create targeted email campaigns
            that resonate with your audience, whether you’re nurturing
            leads, promoting a new product, or driving repeat business.
            From compelling subject lines to persuasive copy, we
            ensure your emails get opened, read, and acted upon.
            </p>
          </div>

          {/* Right Side: Image (No Circular Avatar) */}
          <div className="w-80 h-56 border-2 rounded-lg overflow-hidden" style={{ borderColor: "rgb(236,228,217)" }}>
            <Image
              src="/Email.jpg" // Replace with your image path
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
        style={{ backgroundImage: "url('MarketingWhy.jpg')" }} // Replace with your image path
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
            for Digital Marketing?
          </motion.h2>

          {/* Text Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 mx-auto w-full max-w-3xl">
            {[
              {
                title: "Data Driven Strategies",
                text: "We believe in the power of data. Our digital marketing strategies are grounded in analytics, ensuring that every decision we make is backed by real insights and aimed at achieving measurable results."
              },
              {
                title: "Customize Campaign",
                text: "No two businesses are the same, and neither are our strategies. We tailor our digital marketing efforts to meet the specific goals and challenges of your business, ensuring that every campaign is aligned with your objectives."
              },
              {
                title: "Comprehensive Approach",
                text: "From SEO to social media, we take a holistic approach to digital marketing, ensuring that all channels work together to amplify your message and drive success."
              },
              {
                title: "Continous Optimization",
                text: "Digital marketing is not a set-it-and-forget-it process. We continuously monitor, test, and optimize our campaigns to ensure they are performing at their best, adapting to changes in the digital landscape as needed."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg shadow-lg flex flex-col items-center justify-center h-60 p-6" style={{ backgroundColor: "rgb(63,58,52)",border:"rgb(142,142,148)" }}>
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
                Take Your Digital Presence to the Next Level
                </motion.h2>

        {/* Paragraph Text Animation */}
        <motion.p
          initial={{ opacity: 0, y: 50 }} // Start from bottom
          whileInView={{ opacity: 1, y: 0 }} // Move to original position
          transition={{ duration: 0.8, delay: 0.1 }} // Delayed animation
          className="text-sm mt-6 max-w-2xl mx-auto font-poppins text-center"
          style={{ color: "rgb(63,58,52)" }} // Text color applied
        >
        Ready to amplify your online presence and connect with your audience in meaningful ways? NexaVista Technologies
        is here to help you navigate the digital landscape and achieve your marketing goals.
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