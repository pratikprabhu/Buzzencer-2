import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Sidebar</h2>
      </div>
      <ul className="flex flex-col space-y-2">
        <li className="p-4 hover:bg-gray-700">
          <a href="#" className="block">Dashboard</a>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <a href="#" className="block">Profile</a>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <a href="#" className="block">Campaign</a>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <a href="#" className="block">Wishlist</a>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <a href="#" className="block">Wallet</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
