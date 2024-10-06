import React from 'react';

import { FaLinkedin, FaFileDownload,FaTwitter} from 'react-icons/fa'; // Import icons from react-icons

function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-black via-purple-900 to-pink-500 text-white">

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center h-screen space-y-8">
                <div className="rounded-full overflow-hidden w-40 h-40 border-4 border-white shadow-lg">
                    <img src={"/Profile.JPG"} alt="Aman Raj" className="object-cover w-full h-full" />
                </div>

                <h1 className="text-5xl font-bold">Hello, I'm Aman Raj</h1>
                <p className="text-lg font-light">Full Stack Developer | Tech Enthusiast</p>

                {/* Resume and LinkedIn Section */}
                <div className="flex space-x-6 mt-4">
                    {/* LinkedIn Button */}
                    <a href="https://www.linkedin.com/in/aman5604" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-500 transition duration-300">
                        <FaLinkedin />
                    </a>
                    
                    {/* Resume Download Button */}
                    <a href="https://drive.google.com/drive/u/0/folders/1W_GRFAErr9oA6_YLfy6gHcRR3aLgj5j5" download className="text-white text-3xl hover:text-green-400 transition duration-300">
                        <FaFileDownload />
                    </a>
                    <a href='https://x.com/Aman_5684?t=AMdVh3aLr2o77wPTbOTxSw&s=09' target="_blank" className='"text-white text-3xl hover:text-blue-500 transition duration-300'>
                        <FaTwitter/>
                    </a>
                </div>

                {/* Call to Action */}
                <div className="space-x-4 mt-8">
                    <a href="/project" className="px-6 py-3 bg-white text-indigo-600 rounded-full shadow-lg font-semibold hover:bg-indigo-600 hover:text-white transition duration-300">
                        View My Projects
                    </a>
                    <a href="/contactme" className="px-6 py-3 bg-transparent border-2 border-white rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition duration-300">
                        Contact Me
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-indigo-900 text-center py-6">
                <p>&copy; 2024 Aman Raj. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default HomePage;
