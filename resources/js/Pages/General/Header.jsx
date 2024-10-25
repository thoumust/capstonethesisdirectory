import React from "react";

const Header = () => {
    const handleLogout = () => {
        window.location.href = "/login";
    };

    return (
        <header className="flex items-center justify-between p-4 bg-[#A4231C] text-white sticky top-0 shadow-lg">
            <div className="flex flex-col items-start">
                <h1 className="text-xl font-semibold">College of Information and Computing Sciences</h1>
                <h2 className="text-lg font-medium text-yellow-400">
                    Capstone Projects and Thesis Papers Directory
                </h2>
            </div>
            <button
                className="flex items-center px-4 py-2 bg-yellow-400 text-[#A4231C] rounded-md text-lg hover:bg-yellow-300 transition duration-300 ease-in-out"
                onClick={handleLogout}
            >
                <img src="out.png" alt="Logout" className="w-5 h-5 mr-2" /> Logout
            </button>
        </header>
    );
};

export default Header;
