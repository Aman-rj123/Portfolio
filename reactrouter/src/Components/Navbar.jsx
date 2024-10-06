import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

function Navbar() {
    return (
        <div className="shadow-md">
            <AppBar position="static" style={{ backgroundColor: '#1e1e2f' }}> {/* Dark background color */}
                <Toolbar className="container mx-auto flex justify-between items-center">
                    {/* Logo Section */}

                    <div className="flex items-center">
                        <div className="text-2xl font-bold">
                            {/* "Aman Raj" custom logo design */}
                            <span className="bg-yellow-400 text-black px-2 py-1 rounded-lg font-extrabold">A</span> {/* First letter with background */}
                            <span className="text-white">man</span> {/* Remaining letters with different style */}
                        </div>

                    </div>

                    {/* Navbar Buttons */}
                    <div className="flex justify-center">
                        <Button
                            component={Link}
                            to="/"
                            style={{ color: '#ffffff' }} // White text color
                            className="text-lg font-semibold hover:text-yellow-400 transition duration-300 mx-2"
                        >
                            Home
                        </Button>
                        <Button
                            component={Link}
                            to="/contact"
                            style={{ color: '#ffffff' }}
                            className="text-lg font-semibold hover:text-yellow-400 transition duration-300 mx-2"
                        >
                            About Me
                        </Button>
                        <Button
                            component={Link}
                            to="/project"
                            style={{ color: '#ffffff' }}
                            className="text-lg font-semibold hover:text-yellow-400 transition duration-300 mx-2"
                        >
                            Projects
                        </Button>
                        <Button
                            component={Link}
                            to="/skill"
                            style={{ color: '#ffffff' }}
                            className="text-lg font-semibold hover:text-yellow-400 transition duration-300 mx-2"
                        >
                            Skills
                        </Button>
                        <Button
                            component={Link}
                            to="/contactme"
                            style={{ color: '#ffffff' }}
                            className="text-lg font-semibold hover:text-yellow-400 transition duration-300 mx-2"
                        >
                            Contact
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default Navbar;
