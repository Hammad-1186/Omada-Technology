// import './globals.css';
// import type { Metadata } from 'next';
// import { Poppins} from 'next/font/google';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// const roboto =  Poppins({
//   weight:'600', 
//   subsets: ['latin'],
//   style: 'normal',
// });
// export const metadata: Metadata = {
//   title: 'Omada Technologies',
//   description: 'Turning complex ideas into intuitive digital solutions.',
//   icons: {
//     icon: "/favicon.png", // Ensures the new favicon is used
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={roboto.className}>
//         <Navbar></Navbar>
//         {children}
// <Footer>
  
//   </Footer>      </body>
//     </html>
//   );
// }










// app/layout.tsx
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import type { Metadata } from 'next';
import { Poppins} from 'next/font/google';


const roboto =  Poppins({
  weight:'600', 
  subsets: ['latin'],
  style: 'normal',
});
export const metadata: Metadata = {
  title: 'Omada Technologies',
  description: 'Turning complex ideas into intuitive digital solutions.',
  icons: {
    icon: "/Logo.jpeg", // Ensures the new favicon is used
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}