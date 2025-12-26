import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications';

const Certifications = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="mt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <h2 className="text-secondary font-medium tracking-wide mb-2 text-sm md:text-base uppercase">Recognition</h2>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Certifications & Awards</h3>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="glass-panel p-6 rounded-2xl group hover:border-white/20 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 rounded-xl bg-white/5 text-white/70 group-hover:text-white transition-colors">
                                <Award size={24} />
                            </div>
                            <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold bg-white/5 px-2 py-1 rounded">
                                {cert.issuer}
                            </span>
                        </div>

                        <h4 className="text-lg font-bold mb-2 leading-snug group-hover:text-gradient transition-all">
                            {cert.title}
                        </h4>

                        <div className="flex flex-wrap items-center gap-4 mt-auto">
                            <div className="flex items-center gap-1.5 text-secondary text-sm">
                                <Calendar size={14} />
                                <span>{cert.date}</span>
                                {cert.expiry && (
                                    <span className="text-white/20 ml-1 italic">
                                        (Exp: {cert.expiry})
                                    </span>
                                )}
                            </div>

                            {cert.credentialId && (
                                <div className="text-[10px] font-mono text-secondary/60 break-all">
                                    ID: {cert.credentialId}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Certifications;
