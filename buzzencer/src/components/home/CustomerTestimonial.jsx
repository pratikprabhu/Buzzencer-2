// import React from 'react';

// const CustomerTestimonials = () => {
//   return (
//     <section className="bg-[#f7f7fD] py-12">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Image */}
//           <div>
//             <img src="public\images\slider.webp" alt="Customer" className="w-full h-auto rounded-lg shadow-lg" />
//           </div>
//           {/* Testimonial */}
//           <div>
//             <blockquote className="text-lg font-light text-gray-700">
//               "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
//             </blockquote>
//             <p className="mt-4 text-gray-500">John Doe, CEO at Company</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomerTestimonials;


// import React from 'react';

// const CustomerTestimonials = () => {
//   return (
//     <section className="bg-[#f7f7fD] py-12">
//       <div className="container mx-auto">
//         <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">What Our Customers Say</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Image */}
//           <div>
//             <img src="/images/customer_image.jpg" alt="Customer" className="w-full h-auto rounded-lg shadow-lg" />
//           </div>
//           {/* Testimonial */}
//           <div>
//             <blockquote className="text-lg font-light text-gray-700">
//               "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
//             </blockquote>
//             <p className="mt-4 text-gray-500">John Doe, CEO at Company</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomerTestimonials;

import React from 'react';

const CustomerTestimonials = () => {
  return (
    <section className="bg-[#f7f7fD] py-12">
      <div className="container mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div>
            <img src="/images/sliderpic.webp" alt="Customer" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          {/* Testimonial */}
          <div>
            <h3 className="text-lg font-bold text-gray-800">What Our Customers Say</h3>
            <blockquote className="text-lg font-light text-gray-700 mt-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            </blockquote>
            <p className="mt-4 text-gray-500">John Doe, CEO at Company</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
