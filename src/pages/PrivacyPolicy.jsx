import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    const { appId } = useParams();
    const project = projects.find(p => p.id === appId);

    if (!project || !project.privacyPolicy) {
        return (
            <div className="container-custom pt-20 text-center">
                <h1 className="text-2xl font-bold mb-4">Privacy Policy Not Found</h1>
                <Link to="/work" className="text-secondary hover:text-white underline">Back to Work</Link>
            </div>
        );
    }

    return (
        <div className="container-custom pt-10 pb-20">
            <Link to={`/work/${appId}`} className="inline-flex items-center gap-2 text-secondary hover:text-white mb-8 text-sm group transition-colors">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to {project.title}
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
            >
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
                <p className="text-secondary mb-12">Last updated: {project.year}</p>

                <div className="space-y-10">
                    {project.privacyPolicy.map((section, index) => (
                        <div key={index}>
                            <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                            <p className="text-secondary leading-relaxed whitespace-pre-wrap">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicy;
