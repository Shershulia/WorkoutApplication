import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavigationBar = () => {
    const [showNavBar, setShowNavBar] = useState(false);

    const editNavBar = () => {
        setShowNavBar(!showNavBar);
    };

    return (
        <div >
            <div className="flex fixed w-full z-20 top-0 left-0 border-b border-gray-200 justify-between items-center bg-orange-500 text-gray-900">
                <h3 className="mx-4 py-4">Logo</h3> {/* Replace 'Logo' with your actual logo */}
                <nav
                    className={`flex flex-row justify-center items-center bg-orange-500 text-gray-900 ${
                        showNavBar ? 'block' : 'hidden'
                    } animate-fade-in`}
                >
                    <a className="mx-16 text-gray-900 px-16 py-4 hover:bg-orange-700" href="/#">
                        Home
                    </a>
                    <a className="mx-16 text-gray-900 px-16 py-4 hover:bg-orange-700" href="/#">
                        Calculator
                    </a>
                    <a className="mx-16 text-gray-900 px-16 py-4 hover:bg-orange-700" href="/#">
                        Exercises
                    </a>
                    <a className="mx-16 text-gray-900 px-16 py-4 hover:bg-orange-700" href="/#">
                        My calories intake
                    </a>
                </nav>
                <button className={`p-4 ${!showNavBar ? 'hidden' : 'block'}`} onClick={editNavBar}>
                    <FaTimes />
                </button>
                <button className={`p-4 ${showNavBar ? 'hidden' : 'block'}`} onClick={editNavBar}>
                    <FaBars />
                </button>
            </div>
            <style>
                {`
                @keyframes fade-in {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
        
                .animate-fade-in {
                  animation: fade-in 0.5s ease-in-out;
                }
                `}
            </style>
        </div>
    );
};

export default React.memo(NavigationBar);
