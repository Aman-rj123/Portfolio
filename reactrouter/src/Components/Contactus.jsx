import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col items-center p-8 max-w-3xl mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
                <p className="text-lg text-gray-600">
                    Hi, I'm <strong>Aman Raj</strong>, a Computer Science graduate from Rajasthan Technical University. 
                    I am passionate about coding, creating clean and efficient solutions, and developing user interfaces with an eye for color harmony. 
                    My goal is to combine creativity with logic to build aesthetically pleasing and functional web applications.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Skill Set</h2>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Programming Languages: C++, JavaScript, HTML, CSS</li>
                    <li>Frameworks: Express.js, MongoDB</li>
                    <li>Tools: Git, GitHub, Virtualization, Postman</li>
                </ul>
            </div>

            <div className="flex justify-center space-x-4">
                <a href="https://drive.google.com/drive/u/0/folders/1W_GRFAErr9oA6_YLfy6gHcRR3aLgj5j5" download>
                    <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300">
                        Download Resume
                    </button>
                </a>
                <a href="https://github.com/Aman-rj123" target="_blank" rel="noopener noreferrer">
                    <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300">
                        GitHub Profile
                    </button>
                </a>
            </div>
        </div>
    );
}

export default About;
