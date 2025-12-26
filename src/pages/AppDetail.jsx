import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScreenshotSlideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(timer);
    }, [images.length]);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="relative max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl border-[8px] border-[#1a1a1a] bg-[#111]">
            <div className="aspect-[9/19] relative">
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={currentIndex}
                        src={`${import.meta.env.BASE_URL}${images[currentIndex]}`}
                        alt={`Screenshot ${currentIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    />
                </AnimatePresence>

                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                    {images.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/30'}`}
                        />
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white/70 hover:text-white hover:bg-black/70 transition-all z-10">
                    <ChevronLeft size={20} />
                </button>
                <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white/70 hover:text-white hover:bg-black/70 transition-all z-10">
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};


const AppDetail = () => {
    const { appId } = useParams();
    const project = projects.find(p => p.id === appId);

    if (!project) {
        return <div className="container-custom pt-20">Project not found.</div>;
    }

    return (
        <div className="container-custom pt-10">
            <Link to="/work" className="inline-flex items-center gap-2 text-secondary hover:text-white mb-8 text-sm group transition-colors">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Work
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="mb-12 text-center">
                    <div className="flex flex-col items-center gap-6 mb-6">
                        {project.icon && (
                            <img src={`${import.meta.env.BASE_URL}${project.icon}`} alt={`${project.title} icon`} className="w-24 h-24 rounded-2xl shadow-lg" />
                        )}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                            <div className="flex items-center justify-center gap-4 text-secondary text-sm">
                                <span>{project.category}</span>
                                <span>•</span>
                                <span>{project.year}</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                    <p className="text-secondary leading-relaxed mb-12 text-lg">
                        {project.description}
                    </p>

                    {project.features && (
                        <div className="mb-12 md:mb-16">
                            <h2 className="text-xl font-semibold mb-6 md:mb-8">Key Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left">
                                {project.features.map((feature, i) => (
                                    <div key={i} className="glass-panel p-5 md:p-6 rounded-xl border-white/5 hover:bg-white/5 transition-colors">
                                        <h3 className="font-medium text-white mb-2 text-lg flex items-center gap-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-secondary text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {project.screenshots && project.screenshots.length > 0 && (
                        <div className="mb-16">
                            <h2 className="text-xl font-semibold mb-6">Screenshots</h2>
                            <ScreenshotSlideshow images={project.screenshots} />
                        </div>
                    )}

                    {project.whyChoose && (
                        <div className="mb-12 md:mb-16">
                            <h2 className="text-xl font-semibold mb-6">Why Choose MoneySplit?</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left mx-auto max-w-2xl px-4 md:px-0">
                                {project.whyChoose.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-secondary">
                                        <span className="text-green-400 shrink-0">✅</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Placeholder for future detailed content */}
                    <div className="flex justify-center gap-4">
                        {/* <button className="glass-panel px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                            Visit Website <ExternalLink size={16} />
                        </button> */}
                        {project.privacyPolicy && (
                            <Link to={`/work/${project.id}/privacy`} className="px-8 py-4 rounded-full glass-panel font-medium text-secondary hover:text-white hover:bg-white/10 transition-all">
                                Privacy Policy
                            </Link>
                        )}
                    </div>
                </div>
            </motion.div >
        </div >
    );
};

export default AppDetail;
