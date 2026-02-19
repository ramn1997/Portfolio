
import { motion } from "framer-motion";
import { resume } from "../data/resume";
import { FaLaptopCode, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
    return (
        <section className="section bg-slate-100" style={{ padding: '6rem 0', background: 'var(--bg-dark)' }} id="projects">
            <div className="container">
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: 'var(--text-main)' }}
                >
                    <span className="gradient-text" style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(to right, var(--primary), var(--secondary))' }}>Projects</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {resume.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="card h-full flex flex-col"
                            whileHover={{ y: -10 }}
                            style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column' }}
                        >
                            <div className="mb-4">
                                <div className="flex justify-between items-start">
                                    <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 mb-4 inline-block" style={{ padding: '0.75rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '0.5rem', color: 'var(--primary)', marginBottom: '1rem', display: 'inline-block' }}>
                                        <FaLaptopCode size={24} />
                                    </div>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" style={{ color: 'var(--text-muted)', transition: 'color 0.2s', fontSize: '1.25rem' }}>
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors" style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{project.title}</h3>
                                <p className="text-sm text-slate-500 mb-4" style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{project.role} • {project.duration}</p>
                                <p className="text-slate-400 mb-6 flex-grow" style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="text-xs font-mono text-indigo-300" style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--accent)' }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
