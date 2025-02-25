import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone,FaHeadphones, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="text-drk p-8 relative" style={{ backgroundColor: "rgb(236, 228, 217)" }}>
        <hr className="w-full border-t-4 border-gray-700 mb-8" />

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center">
            <Image src="/images/Logo.jpeg" alt="NexaVista Logo" width={150} height={50} />
            <p className="mt-4 text-center">Copyright © 2020–2024. All Rights Reserved.</p>
          </div>

          {/* Get Started Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get Started</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-gray-700" />
                <Link href="mailto:sales@nexavistotech.com" className="hover:underline">
                  sales@nexavistotech.com
                </Link>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-gray-700" />
                <Link href="tel:+9233683232327" className="hover:underline">
                  +92 (336) 83232327
                </Link>
              </li>
              <li className="flex items-center">
                <FaHeadphones className="mr-2 text-gray-700" />
                <Link href="/book-appointment" className="hover:underline">
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media, Address, Terms, Privacy Policy */}
          <div className="flex flex-col space-y-4">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-700 hover:text-blue-600">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-700 hover:text-yellow-500">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-700 hover:text-blue-500">
                <FaLinkedin size={24} />
              </Link>
            </div>

            {/* Address */}
            <p className="text-gray-700">
              Office No.1 Floor No.3, Plaza 74, Spring North Commercial, Bahria Town Phase 1, Islamabad, Pakistan.
            </p>

            {/* Terms of Service & Privacy Policy */}
            <div>
              <Link href="/termofservices" className="hover:underline">
                Terms of Service
              </Link>
            </div>
            <div>
              <Link href="/privacypolicy" className="hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-4">
        <Link
          href="https://wa.me/9233683232327"
          target="_blank"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </Link>
      </div>
    </>
  );
}
