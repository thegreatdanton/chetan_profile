import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Coffee,
    Hash,
    Leaf,
    Globe,
    MessageSquare,
    Cloud,
    Code2,
    CheckCircle2,
    Database,
    Server,
    Layers,
    Cpu,
    Link as LinkIcon,
    Box,
    Layout,
    Component,
    GitBranch,
    Package,
    Atom,
    Terminal,
    Shield,
    Zap,
    Users,
    ChevronDown,
    ChevronUp
} from 'lucide-react';
import { skillGroups } from '../data/skills';

const iconMap = {
    'coffee': Coffee,
    'hash': Hash,
    'leaf': Leaf,
    'globe': Globe,
    'message-square': MessageSquare,
    'cloud': Cloud,
    'code-2': Code2,
    'database': Database,
    'server': Server,
    'layers': Layers,
    'cpu': Cpu,
    'link': LinkIcon,
    'box': Box,
    'layout': Layout,
    'component': Component,
    'git-branch': GitBranch,
    'package': Package,
    'atom': Atom,
    'terminal': Terminal,
    'shield': Shield,
    'zap': Zap,
    'users': Users
};

const Skills = () => {
    const [isExpanded, setIsExpanded] = useState(false);

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
        hidden: { opacity: 0, scale: 0.95 },
        show: { opacity: 1, scale: 1 }
    };

    // Initially show only the first 2 categories
    const visibleGroups = isExpanded ? skillGroups : skillGroups.slice(0, 2);

    return (
        <section className="mt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
            >
                <div>
                    <h2 className="text-secondary font-medium tracking-wide mb-2 text-sm md:text-base uppercase">Expertise</h2>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Core Technical Skills</h3>
                </div>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 text-secondary hover:text-white transition-colors text-sm font-medium border border-white/10 px-4 py-2 rounded-full glass-panel"
                >
                    {isExpanded ? (
                        <>Show Less <ChevronUp size={16} /></>
                    ) : (
                        <>View All Expertise <ChevronDown size={16} /></>
                    )}
                </button>
            </motion.div>

            <div className="space-y-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isExpanded ? 'expanded' : 'collapsed'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-12"
                    >
                        {visibleGroups.map((group, gIndex) => (
                            <div key={gIndex}>
                                <h4 className="text-white/40 text-xs uppercase tracking-[0.2em] font-bold mb-6 flex items-center gap-4">
                                    {group.category}
                                    <div className="h-[1px] flex-1 bg-white/5"></div>
                                </h4>

                                <motion.div
                                    variants={container}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
                                >
                                    {group.skills.map((skill, sIndex) => {
                                        const Icon = iconMap[skill.icon] || CheckCircle2;
                                        return (
                                            <motion.div
                                                key={sIndex}
                                                variants={item}
                                                className="glass-panel p-4 rounded-xl flex items-center gap-3 group hover:bg-white/5 transition-all cursor-default"
                                            >
                                                <div className="p-2 rounded-lg bg-white/5 text-secondary group-hover:text-white transition-colors">
                                                    <Icon size={18} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold tracking-tight leading-none mb-1 text-white/90 group-hover:text-white">
                                                        {skill.name}
                                                    </p>
                                                    <p className="text-[10px] text-secondary/60 leading-none">
                                                        {skill.level}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Skills;

