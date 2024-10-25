import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-20 text-white py-4 fixed bottom-0 left-0 z-0 w-full">
      <div className="container mx-auto text-center ml-32">
        <p className="mb-2 text-[#A4231C]">
          Terms of Use | Privacy Policy |{" "}
          <a href="https://www.ust.edu.ph" className="hover:underline text-[#A4231C]">
            UST website
          </a>
        </p>
        <p className="text-[#A4231C]">
          UST Blessed Pier Giorgio Frassati Building, España Blvd, Sampaloc,
          Manila, 1000 Metro Manila
        </p>
      </div>
    </footer>
  );
};

export default Footer;
