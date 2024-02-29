// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-[#f7f7fd] text-black py-4 absolute bottom-0 w-full">
//       <div className="container mx-auto text-center">
//       <div className="grid grid-cols-4 gap-4">
//           {/* Logo */}
//           <div>
//             <img src="public\images\buzzencer_logo.svg" alt="Logo" />
//           </div>
//           {/* Sample text */}
//           <div>
//             <p>Sample Text</p>
//           </div>
//           {/* Contact Us */}
//           <div>
//             <p>Contact Us</p>
//             <p>123 Street Name, City, Country</p>
//           </div>
//           {/* Quick Links */}
//           <div>
//             <p>Quick Links</p>
//             <ul>
//               <li><a href="#">Link 1</a></li>
//               <li><a href="#">Link 2</a></li>
//               <li><a href="#">Link 3</a></li>
//             </ul>
//           </div>
//           <div className="text-center mt-4">
//           <p>Follow Us</p>
//           <ul>
//           <div className="flex justify-center mt-2">
//             <li><a href="#" className="mr-4"><img src="facebook.png" alt="Facebook" className="h-6 w-6" /></a></li>
//             <li><a href="#" className="mr-4"><img src="instagram.png" alt="Instagram" className="h-6 w-6" /></a></li>
//             <li><a href="#" className="mr-4"><img src="linkedin.png" alt="LinkedIn" className="h-6 w-6" /></a></li>
//             <li><a href="#"><img src="twitter.png" alt="Twitter" className="h-6 w-6" /></a></li>
//           </div>
//           </ul>
//         </div>
//         </div>
        
//         {/* Follow Us */
//       <div className=''>
//         <p>&copy; 2024 Your Company. All rights reserved.</p>  
//       </div>
      
//     </footer>
//   );
// };

// export default Footer;

// import React from 'react';
// import { LuFacebook } from "react-icons/lu";
// import { CiTwitter } from "react-icons/ci";
// import { IoLogoInstagram } from "react-icons/io";
// import { LuLinkedin } from "react-icons/lu";




// const Footer = () => {
//   return (
//     <footer className="bg-[#f7f7fd] text-black py-4 absolute bottom-0 w-full">
//       <div className="container mx-auto text-center">
//         <div className="grid grid-cols-4 gap-4">
//           {/* Logo */}
//           <div>
//             <img src="/images/buzzencer_logo.svg" alt="Logo" />
//             <div className='text-grey-400'>
//             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
//           </div>
//           </div>
//           {/* Contact Us */}
//           <div>
//             <p>Contact Us</p>
//             <p>123 Street Name, City, Country</p>
//           </div>
//           {/* Quick Links */}
//           <div>
//             <p className='text-b'>Quick Links</p>
//             <ul>
//               <li><a href="/" className=' text-grey-400'>Faq</a></li>
//               <li><a href="/">Sitemap</a></li>
//               <li><a href="/">T & C</a></li>
//             </ul>
//           </div>
//           <div>
//           <p>Follow Us</p>
//           <div className="flex justify-center mt-2">
//             <a href="#" className="mr-4"><LuFacebook /></a>
//             <a href="#" className="mr-4"><LuLinkedin /></a>
//             <a href="#" className="mr-4"><IoLogoInstagram /></a>
//             <a href="#"><CiTwitter /></a>
//           </div>
//           </div>
//         </div>
//         </div>
      
//       {/* Copyright */}
//       <div className="container mx-auto text-center mt-4">
//         <p>&copy; 2024 Your Company. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { LuFacebook } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { SlSocialLinkedin } from "react-icons/sl";


const Footer = () => {
  return (
    <footer className="bg-[#f7f7fd] text-black py-4 absolute bottom-0 w-full">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-4 gap-4">
          {/* Logo */}
          <div>
            <img src="/images/buzzencer_logo.svg" alt="Logo" />
            <div className='text-gray-400'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
            </div>
          </div>
          {/* Contact Us */}
          <div>
            <p className='font-bold'>Contact Us</p>
            <p className='text-gray-400'>Narmada Fresh Fruit Exports Flat No.4, Prashant Appt, Nashik - 422 009, Maharashtra</p>
            <div className='text-gray-400'>
            <a href='tel:9218540407'>
            +91 9218540407
            </a>
            </div>
            <div className='text-gray-400'>
            <a href='mailto:sanjay@narmadafresh.com'>
            sanjay@narmadafresh.com
            </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <p className='font-bold text-b'>Quick Links</p>
            <ul>
              <li><a href="/" className='text-gray-400'>Faq</a></li>
              <li><a href="/" className='text-gray-400'>Sitemap</a></li>
              <li><a href="/" className='text-gray-400'>T & C</a></li>
            </ul>
          </div>
          {/* Follow Us */}
          <div>
            <p className='font-bold'>Follow Us</p>
            <div className="flex justify-center mt-2">
              <a href="#" className="mr-4 text-gray-700 text-xl"><LuFacebook /></a>
              <a href="#" className="mr-4 text-gray-700 text-xl"><SlSocialLinkedin /></a>
              <a href="#" className="mr-4 text-gray-700 text-xl"><IoLogoInstagram /></a>
              <a href="#" className="text-gray-700 text-xl"><CiTwitter /></a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="col-span-4 mt-4 text-sm text-gray-500  text-center border-t border-gray-300 pt-4">
            <div className=" mx-20">
            <p className="float-left">&copy; 2024 Your Company. All rights reserved.</p>
            <p className="float-right">Developed by Unipolar</p>
            </div>
          </div>
    </footer>
  );
};

export default Footer;



