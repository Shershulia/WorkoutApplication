import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavigationBar = () => {
    const [showNavBar, setShowNavBar] = useState(false);

    const editNavBar = () => {
        setShowNavBar(!showNavBar);
    };

    return (
        <div>
            <div className="flex fixed w-full z-20 top-0 left-0 border-b border-gray-200 justify-center items-center bg-orange-500 text-gray-900 duration-300">
                <div className="flex items-center justify-center duration-300">
                    <img src="assets/TTGlogo.png" className={`h-24 max-w-xs transition duration-300 ease-in-out ${
                            !showNavBar ? ' ' : '-translate-x-full'
                        }`} onClick={editNavBar}/>
                </div>
                <nav
                    className={`flex flex-row justify-center items-center bg-orange-500 text-gray-900 ${
                        showNavBar ? 'block' : 'hidden'
                    } animate-fade-in`}
                >
                    <a className="mx-16 text-gray-900 px-16 py-9 hover:bg-orange-700" href="/#">
                        Home
                    </a>
                    <a className="mx-16 text-gray-900 px-16 py-9 hover:bg-orange-700" href="/#">
                        Calculator
                    </a>
                    <a className="mx-16 text-gray-900 px-16 py-9 hover:bg-orange-700" href="/#">
                        Exercises
                    </a>
                    <a className="mx-16 text-gray-900 px-16 py-9 hover:bg-orange-700" href="/#">
                        My calories intake
                    </a>
                </nav>
                <div className='flex justify-end absolute right-0'>
                    <button className={`p-4 ${!showNavBar ? 'hidden' : 'block'}`} onClick={editNavBar}>
                        <FaTimes />
                    </button>
                    <button className={`p-4  ${showNavBar ? 'hidden' : 'block'}`} onClick={editNavBar}>
                        <FaBars />
                    </button>  
                </div>
                
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
