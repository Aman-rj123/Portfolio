import React from 'react';
import ProjetCard from './Projectcard';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function Project() {
    // Sample project data
    const projects = [
        {
            title: 'Farm2Door',
            description: 'Farm to Door is a comprehensive e-commerce platform designed to empower farmers by providing them with a direct channel to sell their products to consumers. This user-friendly website bridges the gap between farmers and end-users, ensuring that fresh produce reaches homes efficiently and at fair prices.',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1661717632444-f45a279aceda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFybWVyJTIwZSUyMGNvbW1lcnNlJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D', 
             projectlink:'https://ecommerce-website-eight-xi.vercel.app/signup',// Replace with actual image URL
             techstack:["React.js","Express.js","mongodb","TailwindCss"]
        },

        {
            title: 'Discord clone',
            description: 'The Discord Clone is a real-time communication platform designed to replicate the core functionalities of Discord, enabling users to connect, chat, and collaborate seamlessly through text, voice, and video. This application is particularly aimed at communities, gamers, and professionals seeking a robust solution for group communication and social interaction.',
            imageUrl: 'https://images.unsplash.com/photo-1636487658531-16237360bc30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpc2NvcmQlMjBjbG9uZXxlbnwwfHwwfHx8MA%3D%3D',
            projectlink:'https://github.com/Aman-rj123/Discord_clone',
            techstack:["React.js","Express.js","mongodb","TailwindCss"],
        },
        {
            title: 'Weather- App',
            description: 'Weather Wizard is a dynamic weather application that provides users with real-time weather forecasts and meteorological data for any location worldwide. With an intuitive interface and user-friendly design, the app aims to deliver accurate weather information to help users plan their daily activities effectively.',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1675968514495-7f3be70dddd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYXRoZXIlMjBhcHAlMjB3ZWJzaXRlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
            projectlink:'https://weatherchecking1.netlify.app/',
            techstack:["React.js","Express.js","mongodb","TailwindCss"],
        },
        // Add more projects as needed
    ];
    const navigate=useNavigate();

    function homehandler(){
        navigate("/") 
       }

    return (
        <div className="p-4">
            <h1 className="text-3xl font-extrabold mb-6 text-center text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 rounded-lg shadow-lg">
                All Collection of the Projects
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <ProjetCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        projectLink={project.projectlink}
                        techstack={project.techstack}
                    />


                ))}
            </div>
            <div className='flex justify-center items-center '>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={homehandler}
                style={{ marginTop: '20px' }} // Optional custom styling
            >
                Back to Home
            </Button>
        </div>
        </div>
    );
}

export default Project;
