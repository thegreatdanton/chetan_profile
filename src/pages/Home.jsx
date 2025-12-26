import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';

const Home = () => {
    return (
        <div className="container-custom pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-3xl"
            >
                <h2 className="text-secondary font-medium tracking-wide mb-4 text-sm md:text-base">Hello There!</h2>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                    I'm <span className="text-gradient">Chetan Reddy Piduru.</span>
                </h1>

                <h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-8 leading-relaxed max-w-2xl">
                    Architecting Five 9s (99.999%) Availability for 1M TPS IAM Systems | Expert in Mission-Critical Authentication & Authorization
                </h2>

                <p className="text-lg text-secondary max-w-xl mb-12 leading-relaxed">
                    Principal Engineer at Zeta India. Formerly at Microsoft and Nokia.
                    I engineer scalable systems and craft intuitive digital experiences.
                </p>

                <div className="flex items-center gap-6">
                    <Link to="/work" className="group flex items-center gap-2 text-white font-medium hover:opacity-80 transition-opacity">
                        View My Work
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a href="mailto:chetanreddy193@gmail.com" className="text-secondary hover:text-white transition-colors">
                        Get in touch
                    </a>
                </div>
            </motion.div>

            <Skills />

            <Certifications />
        </div>
    );
};

export default Home;
