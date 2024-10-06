import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { FaReact, FaNodeJs, FaServer, FaDatabase, FaGitAlt, FaGithub, FaNetworkWired, FaLaptopCode } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io";
import { FcLinux } from "react-icons/fc";
const skills = [
    {
        name: 'React',
        description: 'Building user interfaces with React.js',
        icon: <FaReact className="text-5xl text-blue-500" />,
    },
    {
        name: 'Node.js',
        description: 'Server-side programming with Node.js',
        icon: <FaNodeJs className="text-5xl text-green-500" />,
    },
    {
        name: 'Javascript',
        description: 'Used in the both frontend and the backend as well',
        icon: <IoLogoJavascript className="text-5xl text-orange-500" />,
    },
    {
        name: 'Databases',
        description: 'Managing databases with SQL and NoSQL technologies',
        icon: <FaDatabase className="text-5xl text-red-500" />,
    },
    {
        name: 'C++',
        description: 'High-performance programming with C++',
        icon: <FaLaptopCode className="text-5xl text-purple-500" />,
    },
    {
        name: 'Git',
        description: 'Version control and collaboration with Git',
        icon: <FaGitAlt className="text-5xl text-pink-500" />,
    },
    {
        name: 'GitHub',
        description: 'Hosting and sharing code with GitHub',
        icon: <FaGithub className="text-5xl text-gray-800" />,
    },
    {
        name: 'Networking',
        description: 'Understanding and implementing network protocols',
        icon: <FaNetworkWired className="text-5xl text-indigo-500" />,
    },
    {
        name:"Linux",
        description:"Proficient in using and managing Linux operating systems'",
        icon:<FcLinux className='text-5xl text-black' />
    },
    {
        name:"Express.js",
        description:"Building web applications and APIs with Express.j",
        icon: <FaServer className="text-5xl text-gray-800" />,
    }
];

const SkillsSection = () => {
    return (
        <div className="bg-gray-100 py-8">
            <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
            <Grid container spacing={2} className="container mx-auto">
                {skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardContent className="flex flex-col items-center text-center">
                                {skill.icon}
                                <Typography variant="h5" component="h2" className="mt-4 font-semibold">
                                    {skill.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" className="mt-2">
                                    {skill.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default SkillsSection;
