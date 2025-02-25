// "use client";

// import ServiceSection from "./layout";



// const ServicesList = () => {
//   return (
//     <div>
//       <ServiceSection
//         title="Web Development"
//         description="Every business needs a powerful online presence, and our web development services are designed to give you just that. From custom websites to complex web applications, we create digital solutions that are not only visually stunning but also highly functional and user-friendly."
//         images={[
//           "/images/dev1.jpg",
//           "/images/dev2.jpg",
//           "/images/dev3.jpg",
//           "/images/dev4.jpg"
//         ]}
//       />

//       <ServiceSection
//         title="App Development"
//         description="Our mobile app development services ensure your business reaches customers on the go. Whether it's Android or iOS, we build scalable, high-performing, and engaging mobile applications."
//         images={[
//           "/images/app1.jpg",
//           "/images/app2.jpg",
//           "/images/app3.jpg",
//           "/images/app4.jpg"
//         ]}
//       />

//       <ServiceSection
//         title="Content Writing"
//         description="Content is king! Our content writing services include SEO-friendly blogs, articles, website copy, and more to help your business stand out and rank higher in search engines."
//         images={[
//           "/images/content1.jpg",
//           "/images/content2.jpg",
//           "/images/content3.jpg",
//           "/images/content4.jpg"
//         ]}
//       />

//       <ServiceSection
//         title="Digital Marketing"
//         description="Boost your brand's online presence with our digital marketing strategies, including SEO, PPC, social media marketing, and email campaigns."
//         images={[
//           "/images/marketing1.jpg",
//           "/images/marketing2.jpg",
//           "/images/marketing3.jpg",
//           "/images/marketing4.jpg"
//         ]}
//       />

//       <ServiceSection
//         title="WordPress Development"
//         description="We offer custom WordPress development services, including theme customization, plugin development, and complete website setup tailored to your business needs."
//         images={[
//           "/images/wordpress1.jpg",
//           "/images/wordpress2.jpg",
//           "/images/wordpress3.jpg",
//           "/images/wordpress4.jpg"
//         ]}
//       />
//     </div>
//   );
// };

// export default ServicesList;



// "use client";

// import Image from "next/image";

// interface ServiceSectionProps {
//   title: string;
//   description: string;
//   images: string[];
// }

// const ServiceSection: React.FC<ServiceSectionProps> = ({ title, description, images }) => {
//   return (
//     <section className="bg-[#E9DFD2] py-10 px-6">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//         {/* Left Side - Heading */}
//         <div className="flex items-center space-x-3">
//           <div className="w-4 h-4 bg-black rounded-full shadow-md"></div>
//           <h2 className="text-3xl font-bold text-black">{title}</h2>
//         </div>

//         {/* Right Side - Description */}
//         <p className="text-gray-800 text-lg">{description}</p>
//       </div>

//       {/* Image Grid */}
//       <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {images.map((image, index) => (
//           <div key={index} className="rounded-lg overflow-hidden shadow-lg">
//             <Image src={image} alt={`${title} Image ${index + 1}`} width={500} height={300} className="w-full object-cover" />
//           </div>
//         ))}
//       </div>

//       {/* Learn More Button */}
//       <div className="text-center mt-6">
//         <button className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-900">
//           Learn More
//         </button>
//       </div>
//     </section>
//   );
// };

// export default ServiceSection;


// "use client"; // Required for Next.js App Router hooks and animations

// import React from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // Sample Data for Services & Expertise
// const servicesData = [
//   {
//     title: "Web Development",
//     description: "We create high-quality, responsive websites tailored to your needs.",
//     images: ["/web_dev1.jpg", "/web_dev2.jpg"],
//   },
//   {
//     title: "App Development",
//     description: "We build scalable and engaging mobile applications.",
//     images: ["/app_dev1.jpg", "/app_dev2.jpg"],
//   },
// ];

// const expertiseData = [
//   {
//     title: "Graphic Designing",
//     description: "We create visually stunning designs that captivate your audience.",
//     image: "/Expertise_Designing.jpg",
//   },
//   {
//     title: "Digital Marketing",
//     description: "We craft data-driven strategies to grow your business.",
//     image: "/Expertise_Marketing.jpg",
//   },
// ];

// export default function ServicesExpertiseSection() {
//   return (
//     <section className="bg-[#E9DFD2] py-16">
//       <div className="container mx-auto px-6">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl font-bold text-center mb-6"
//         >
//           Our Services & Expertise
//         </motion.h2>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {servicesData.map((service, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-bold mb-2">{service.title}</h3>
//               <p className="text-gray-800 mb-4">{service.description}</p>

//               {/* Image Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {service.images.map((image, imgIndex) => (
//                   <div key={imgIndex} className="rounded-lg overflow-hidden shadow-md">
//                     <Image
//                       src={image}
//                       alt={`${service.title} Image ${imgIndex + 1}`}
//                       width={500}
//                       height={300}
//                       className="w-full object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Expertise Slider */}
//         <div className="mt-12 relative">
//           <Swiper
//             slidesPerView={3}
//             spaceBetween={30}
//             loop={true}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             pagination={{ clickable: true, el: ".custom-pagination" }}
//             navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
//             modules={[Autoplay, Pagination, Navigation]}
//             breakpoints={{
//               320: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             className="mySwiper"
//           >
//             {expertiseData.map((expertise, index) => (
//               <SwiperSlide key={index}>
//                 <div
//                   className="h-96 w-full bg-cover bg-center rounded-lg shadow-lg flex items-end p-6"
//                   style={{ backgroundImage: `url(${expertise.image})` }}
//                 >
//                   <div className="bg-opacity-50 p-4 rounded-lg">
//                     <h3 className="text-xl font-bold text-white">{expertise.title}</h3>
//                     <p className="text-gray-200">{expertise.description}</p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//         

//         

//         {/* Learn More Button */}
//         <div className="text-center mt-10">
//           <button className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-900">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// const sections = [
//   {
//     title: "Web Development",
//     description:
//       "Every business needs a powerful online presence, and our web development services are designed to give you just that. From custom websites to complex web applications, we create digital solutions that are not only visually stunning but also highly functional and user-friendly.",
//       images: ["/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg"],
//     },
//   {
//     title: "App Development",
//     description:
//       "Our app development services deliver high-performance mobile applications, providing seamless user experiences across all platforms.",
//       images: ["/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg"],
//     },
//   {
//     title: "Graphical Designing",
//     description:
//       "Our expert designers craft visually appealing graphics, ensuring your brand stands out with stunning visuals.",
//     images: ["/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg"],
//   },
//   {
//     title: "Content Writing",
//     description:
//       "High-quality content is key to engagement. We provide compelling content that resonates with your audience.",
//       images: ["/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg"],
//     },
//   {
//     title: "Digital Marketing",
//     description:
//       "We help businesses grow online through targeted digital marketing strategies and expert SEO services.",
//       images: ["/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg", "/Expertise_Designing.jpg"],
//     },
// ];

// export default function ServicesSection() {
//   return (
//     <section>
//     <div className="bg-[#EDE6DD] py-16 px-8 flex flex-col items-center">
//       {sections.map((section, index) => (
//         <div key={index} className="mb-16 max-w-5xl w-full">
//           {/* Heading & Text in One Row */}
//           <motion.div
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col md:flex-row items-center justify-between text-center md:text-left w-full"
//           >
//             {/* Left Side: Title */}
//             <h3 className="text-2xl font-bold text-black flex items-center w-full md:w-1/3">
//               <span className="w-4 h-4 bg-black rounded-full mr-3"></span>
//               {section.title}
//             </h3>

//             {/* Right Side: Description */}
//             <p className="text-gray-700 max-w-xl w-full md:w-2/3">{section.description}</p>
//           </motion.div>

//           {/* Image Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 mx-auto w-full max-w-2xl">
//             {section.images.map((src, idx) => (
//               <div key={idx} className="relative overflow-hidden rounded-lg shadow-lg group">
//                 <Image
//                   src={src}
//                   alt={`Section Image ${idx + 1}`}
//                   layout="responsive"
//                   width={500}
//                   height={300}
//                   className="w-full object-cover transform transition-transform duration-300 group-hover:scale-110"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Learn More Button */}
//           <div className="flex justify-center mt-6">
//             <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
//               Learn More
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//     </section>
//   );
// }
