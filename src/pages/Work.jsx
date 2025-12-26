import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Work = () => {
    return (
        <div className="container-custom pt-10">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h1 className="text-4xl font-bold mb-4">Selected Work</h1>
                <p className="text-secondary">A collection of projects I've worked on.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                        <Link to={`/work/${project.id}`} className="block group">
                            <div className="aspect-video bg-[#111] overflow-hidden rounded-xl border border-[rgba(255,255,255,0.05)] mb-4 relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={`${import.meta.env.BASE_URL}${project.image}`}
                                    alt={project.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-semibold mb-1 group-hover:text-white transition-colors">{project.title}</h3>
                                    <p className="text-secondary text-sm">{project.category}</p>
                                </div>
                                <span className="text-secondary text-sm">{project.year}</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Work;
