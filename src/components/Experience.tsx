
import { motion } from "framer-motion";
import { resume } from "../data/resume";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function Experience() {


    return (
        <section className="section bg-slate-100" style={{ padding: '6rem 0', background: 'var(--bg-dark)' }} id="experience">
            <div className="container">
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: 'var(--text-main)' }}
                >
                    <span className="gradient-text" style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(to right, var(--primary), var(--secondary))' }}>Experience & Education</span>
                </motion.h2>

                <div className="grid md:grid-cols-1 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    {/* Work Experience */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)' }}>
                            <FaBriefcase /> Work History
                        </h3>
                        <div className="space-y-8" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {resume.experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className="card"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.05)' }}
                                >
                                    <div className="flex flex-col md:flex-row justify-between mb-4" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        <div>
                                            <h4 className="text-xl font-bold" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-main)' }}>{exp.role}</h4>
                                            <p className="text-indigo-400" style={{ color: 'var(--primary)' }}>{exp.company}</p>
                                        </div>
                                        <div className="text-right md:text-left">
                                            <span className="text-sm text-slate-400 block" style={{ fontSize: '0.875rem', color: 'var(--text-muted)', display: 'block' }}>{exp.duration}</span>
                                            <span className="text-sm text-slate-500" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{exp.location}</span>
                                        </div>
                                    </div>
                                    <ul className="list-disc list-inside space-y-2 text-slate-300" style={{ listStyleType: 'disc', listStylePosition: 'inside', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} style={{ lineHeight: '1.6' }}>{achievement}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education & Certs - Could be a sidebar or below */}
                    {/* If we want to split, we can. Let's put education below or side-by-side if screen allows */}
                </div>

                <div className="mt-16" style={{ marginTop: '4rem' }}>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)' }}>
                        <FaGraduationCap /> Education
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {resume.education.map((edu, index) => (
                            <motion.div
                                key={index}
                                className="card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.05)' }}
                            >
                                <h4 className="text-lg font-bold" style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--text-main)' }}>{edu.degree}</h4>
                                <p className="text-indigo-400" style={{ color: 'var(--primary)' }}>{edu.institution}</p>
                                <p className="text-sm text-slate-400 mt-2" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{edu.year} | {edu.details}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
