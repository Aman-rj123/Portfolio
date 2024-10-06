// ProjectCard.js
import React from 'react';

function ProjectCard({ title, description, imageUrl, projectLink }) {
    return (
        <div className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
                <a
                    href={projectLink}
                    target="_blank" // Open in a new tab
                    rel="noopener noreferrer" // Security measure
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                    View Project
                </a>
            </div>
        </div>
    );
}
export default ProjectCard;
