// components/Navbar.tsx
"use client"; // Required for using hooks in Next.js App Router
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // To detect the current page

export default function Navbar() {
  const pathname = usePathname(); // Get the current page path

  return (
    <nav className="p-4 absolute w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the Left */}
        <Link href="/">
          <div> {/* ✅ Wrapping Image inside a div */}
            <Image
              src="/images/Logo.jpeg" // ✅ Correct path
              alt="Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Centered Navigation Links */}
        <div className="flex flex-col items-center space-y-2">
          {/* First Row */}
          <div className="flex space-x-6">
            {[{ name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "About Us", path: "/about" },
              { name: "Contact Us", path: "/contact" }].map((item, index, arr) => (
              <span key={item.path} className="flex items-center">
                <Link
                  href={item.path}
                  className={`text-[#f57c00] hover:text-white${
                    pathname === item.path ? "border-b-2 border-white" : ""
                  }`}
                >
                  {item.name}
                </Link>
                {index !== arr.length - 1 && <span className="mx-2 text-yellow-50">|</span>}
              </span>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex space-x-6">
            {[{ name: "Web Development", path: "/webdevelopment" },
              { name: "App Development", path: "/mobileapp" },
              { name: "Copywriting", path: "/copywriting" },
              { name: "Digital Marketing", path: "/digitalmarketing" },
              { name: "Graphic Designing", path: "/graphicdesigning" }].map((item, index, arr) => (
              <span key={item.path} className="flex items-center">
                <Link
                  href={item.path}
                  className={`text-[#f57c00] hover:text-white ${
                    pathname === item.path ? "border-b-2 border-white" : ""
                  }`}
                >
                  {item.name}
                </Link>
                {index !== arr.length - 1 && <span className="mx-2 text-yellow-50">|</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Book Appointment Button on the Right */}
        <div>
          <Link
            href="/appointment"
            className="px-4 py-2 border-2 border-[#f57c00] text-[#f57c00] rounded-full  hover:text-[white] transition inline-block"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
