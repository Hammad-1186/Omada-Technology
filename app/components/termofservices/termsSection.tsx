// // app/terms-of-service/page.tsx (for App Router) or pages/terms-of-service.tsx (for Pages Router)
// export default function TermsOfService() {
//     return (
//       <section>
//       <div className="min-h-screen px-6 py-12 bg-[rgb(236,228,217)]">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-3xl font-bold text-[rgb(63,58,52)] text-center mb-6">
//             Terms of Service
//           </h1>
  
//           <p className="text-[rgb(142,142,148)] mb-4">
//             Welcome to NexaVista Technologies. These terms of service (Terms) apply to your access and use of our website and services.
//             By using our website and services, you agree to comply with and be bound by the following terms.
//           </p>
  
//           {/* Section */}
//           <section className="mb-6">
//             <h2 className="text-xl font-semibold text-[rgb(63,58,52)]">1. Acceptance of Terms</h2>
//             <p className="text-[rgb(142,142,148)]">
//               By accessing and using our services, you agree to these Terms. If you do not agree to these Terms, you should not use our services.
//             </p>
//           </section>
  
//           {/* Services Provided */}
//           <section className="mb-6">
//             <h2 className="text-xl font-semibold text-[rgb(63,58,52)]">2. Services Provided</h2>
//             <ul className="text-[rgb(142,142,148)] list-disc ml-6">
//               <li>Web Development</li>
//               <li>Mobile App Development</li>
//               <li>Copywriting</li>
//               <li>Digital Marketing</li>
//               <li>Graphic Designing</li>
//             </ul>
//             <p className="text-[rgb(142,142,148)] mt-2">
//               All services are subject to the terms outlined in any project agreement between NexaVista Technologies and the client.
//             </p>
//           </section>
  
//           {/* More Sections */}
//           <section className="mb-6">
//             <h2 className="text-xl font-semibold text-[rgb(63,58,52)]">3. User Responsibilities</h2>
//             <p className="text-[rgb(142,142,148)]">
//               By using our services, you agree to provide accurate information, maintain confidentiality of your credentials, and comply with laws.
//             </p>
//           </section>
  
//           <section className="mb-6">
//             <h2 className="text-xl font-semibold text-[rgb(63,58,52)]">4. Payment Terms</h2>
//             <p className="text-[rgb(142,142,148)]">
//               Payments are expected as per the invoice. Delays may result in service suspension.
//             </p>
//           </section>
  
//           <section className="mb-6">
//             <h2 className="text-xl font-semibold text-[rgb(63,58,52)]">5. Project Timelines and Delivery</h2>
//             <p className="text-[rgb(142,142,148)]">
//               We strive to meet deadlines, but unforeseen circumstances may cause delays.
//             </p>
//           </section>
  
//           <section className="mb-6">
//             <h2 className="text-xl font-semibold text-[rgb(63,58,52)]">6. Intellectual Property</h2>
//             <p className="text-[rgb(142,142,148)]">
//               NexaVista Technologies retains rights to created assets unless otherwise agreed upon.
//             </p>
//           </section>
  
//           <section className="mb-6">
//             <h2 className="text-xl font-semibold text-[rgb(63,58,52)]">7. Limitation of Liability</h2>
//             <p className="text-[rgb(142,142,148)]">
//               We are not liable for any damages arising from the use of our services.
//             </p>
//           </section>

//           <section className="mb-6">
//           <h2 className="text-xl font-semibold text-[rgb(63,58,52)]">7. Revisions and Modifications</h2>
//           <p className="text-[rgb(142,142,148)]">
//             Project revisions are limited to the number outlined in the agreement with the client.
//             Additional revisions may be subject to additional fees. Any changes in project scope or
//             additional feature requests after the project has commenced will require a new agreement
//             or amendment to the existing agreement.
//           </p>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-xl font-semibold text-[rgb(63,58,52)]">8. Limitation of Liability</h2>
//           <p className="text-[rgb(142,142,148)]">
//             NexaVista Technologies will not be liable for any direct, indirect, incidental, or
//             consequential damages resulting from the use or inability to use our services. We make no
//             warranties, express or implied, about the reliability, suitability, or availability of the
//             services for any purpose.
//           </p>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-xl font-semibold text-[rgb(63,58,52)]">9. Termination</h2>
//           <p className="text-[rgb(142,142,148)]">
//             We reserve the right to suspend or terminate your access to our services at any time, with or
//             without cause, if we believe you have violated these Terms. Upon termination, all licenses and
//             rights granted to you under these Terms will immediately cease.
//           </p>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-xl font-semibold text-[rgb(63,58,52)]">10. Confidentiality</h2>
//           <p className="text-[rgb(142,142,148)]">
//             NexaVista Technologies values the confidentiality of client information and will take all
//             reasonable steps to ensure the protection of any sensitive information shared with us. Both
//             parties agree not to disclose confidential information to third parties without prior consent.
//           </p>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-xl font-semibold text-[rgb(63,58,52)]">11. Third-Party Links</h2>
//           <p className="text-[rgb(142,142,148)]">
//             Our website may contain links to third-party websites or services. NexaVista Technologies does
//             not endorse or assume responsibility for any third-party content or practices. Your use of such
//             third-party websites is at your own risk.
//           </p>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-xl font-semibold text-[rgb(63,58,52)]">12. Governing Law</h2>
//           <p className="text-[rgb(142,142,148)]">
//             These Terms will be governed by and construed in accordance with the laws of USA & Pakistan.
//             Any disputes arising out of or in connection with these Terms will be subject to the exclusive
//             jurisdiction of the courts in USA & Pakistan.
//           </p>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-xl font-semibold text-[rgb(63,58,52)]">13. Changes to Terms</h2>
//           <p className="text-[rgb(142,142,148)]">
//             We reserve the right to modify these Terms at any time. Any changes will be effective
//             immediately upon posting on our website. Your continued use of our services following any
//             modifications constitutes your acceptance of the revised Terms.
//           </p>
//         </section>
  
//           {/* Contact Section */}
//           <section className="mb-6">
//             <h2 className="text-xl font-semibold text-[rgb(63,58,52)]">14. Contact Us</h2>
//             <p className="text-[rgb(142,142,148)]">
//               If you have any questions, contact us at:
//             </p>
//             <p className="text-[rgb(142,142,148)]">Email: <a href="mailto:sales@nexavistatech.com" className="underline">sales@nexavistatech.com</a></p>
//             <p className="text-[rgb(142,142,148)]">
//                 Phone: <a href="tel:+923368323237" className="underline">+92(336)8323237</a>
//                 </p>
//           </section>
//         </div>
//       </div>
//       </section>
//     );
//   }
  