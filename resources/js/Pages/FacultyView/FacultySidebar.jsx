import React, { useState } from "react";
import { Link } from '@inertiajs/react';
import logo from '@/assets/logo.svg';
import profile from '@/assets/profile.svg';

const FacultySidebar = () => {
  const [isIPDropdownOpen, setIsIPDropdownOpen] = useState(false);

  const toggleIPDropdown = () => {
    setIsIPDropdownOpen(!isIPDropdownOpen);
  };

  return (
    <nav className="bg-[#A4231C] text-white w-64 h-screen fixed top-0 left-0 flex flex-col justify-between">
      <ul className="mt-6 space-y-4">
        {/* Sidebar Header */}
        <li className="flex justify-center mb-8">
          <img src={logo} alt="Logo" className="w-12 h-12" />
        </li>

        {/* Home Link */}
        <li className="pl-6">
          <a href="/faculty-home" className="flex items-center space-x-3 hover:bg-[#A62F2B] p-2 rounded-md">
            <img src="/home.png" alt="Home" className="w-6 h-6" />
            <span className="label">Home</span>
          </a>
        </li>

        {/* IP Registered with Dropdown */}
        <li className="pl-6">
          <div className="flex items-center space-x-3 cursor-pointer hover:bg-[#A62F2B] p-2 rounded-md" onClick={toggleIPDropdown}>
            <img src="./manage.png" alt="Manage" className="w-6 h-6" />
            <span className="label">IP Registered</span>
            <span>{isIPDropdownOpen ? "▲" : "▼"}</span>
          </div>
          {isIPDropdownOpen && (
            <ul className="ml-10 mt-2 space-y-2">
              <li>
                <Link href="/faculty/ip-registered/IT-cap" className="block hover:text-gray-200">IT Capstones</Link>
              </li>
              <li>
                <Link href="/faculty/ip-registered/IS-cap" className="block hover:text-gray-200">IS Capstones</Link>
              </li>
              <li>
                <Link href="/faculty/ip-registered/CS-thes" className="block hover:text-gray-200">CS Thesis</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Other Sidebar Items */}
        <li className="pl-6">
          <a href="/faculty/BestIT" className="flex items-center space-x-3 hover:bg-[#A62F2B] p-2 rounded-md">
            <img src="./best.png" alt="IT" className="w-6 h-6" />
            <span className="label">IT</span>
          </a>
        </li>
        <li className="pl-6">
          <a href="/faculty/BestIS" className="flex items-center space-x-3 hover:bg-[#A62F2B] p-2 rounded-md">
            <img src="./best.png" alt="IS" className="w-6 h-6" />
            <span className="label">IS</span>
          </a>
        </li>
        <li className="pl-6">
          <a href="/faculty/BestCS" className="flex items-center space-x-3 hover:bg-[#A62F2B] p-2 rounded-md">
            <img src="./best.png" alt="CS" className="w-6 h-6" />
            <span className="label">CS</span>
          </a>
        </li>
      </ul>

      {/* Profile Section */}
      <div className="pl-6 pb-4">
        <a href="/faculty/profile" className="flex items-center space-x-3 hover:bg-[#A62F2B] p-8 rounded-md">
          <img src={profile} alt="Profile" className="w-6 h-6" />
          <span className="label">Profile</span>
        </a>
      </div>
    </nav>
  );
};

export default FacultySidebar;
