import React, { useState } from 'react';

const Certificate = () => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div 
            className={`flex flex-col items-center justify-center p-8 transition-colors duration-300 
                ${isClicked ? 'bg-gray-200' : 'bg-white'}`} // Background color toggle
        >
            
            

            {/* Certificate Image */}
            <img
                src="RHCSA.jpeg"
                alt="Certificate"
                onClick={() => setIsClicked(!isClicked)}
                className={`w-full max-w-md rounded shadow-lg transition-transform duration-300 cursor-pointer 
                    ${isClicked ? 'scale-110 bg-gray-200' : 'hover:scale-105'}`}
            />

            {/* Additional Certificates */}
            <img 
                src="FLIPKAR GRID.jpeg"
                alt="Flipkart Grid Certificate"
                className="mt-4 w-full max-w-md rounded shadow-lg"
                onClick={() => setIsClicked(!isClicked)}
                className={`w-full max-w-md rounded shadow-lg transition-transform duration-300 cursor-pointer 
                    ${isClicked ? 'scale-110 bg-gray-209' : 'hover:scale-105'}`}
            />
            
            <img 
                src="Css.jpg"
                alt="CSS Certificate"
                className="mt-4 w-full max-w-md rounded shadow-lg"
                onClick={() => setIsClicked(!isClicked)}
                className={`w-full max-w-md rounded shadow-lg transition-transform duration-300 cursor-pointer 
                    ${isClicked ? 'scale-110 bg-gray-200' : 'hover:scale-105'}`}
            />
        </div>
    );
};

export default Certificate;
