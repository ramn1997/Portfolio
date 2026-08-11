import { motion } from "framer-motion";
import { resume } from "../data/resume";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

export default function Projects() {
    return (
        <section id="projects" style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: 'var(--bg-page)', borderTop: '1px solid var(--border-light)' }}>
            <div className="container">
                {/* 1. PERSONAL & OPEN-SOURCE PROJECTS (Clean Display: Title, Description, Tech Stack Only) */}
                <div style={{ marginBottom: '4rem' }}>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <motion.h2
                            className="section-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Personal & Open-Source Projects
                        </motion.h2>
                        <motion.p
                            className="section-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Featured personal applications, microservices, and mobile projects developed with high commit activity.
                        </motion.p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.75rem' }}>
                        {resume.personalProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="minimal-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    border: '1px solid #e0e7ff',
                                    backgroundColor: '#ffffff'
                                }}
                            >
                                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4338ca', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                                    Personal Project
                                </span>

                                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
                                    {project.title}
                                </h3>

                                <p className="serif-text" style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.5rem' }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="skill-tag">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 2. ENTERPRISE PROJECTS SECTION */}
                <div style={{ marginBottom: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--border-light)' }}>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <motion.h2
                            className="section-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Enterprise Applications & Architecture
                        </motion.h2>

                        <motion.p
                            className="section-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Proprietary enterprise solutions and cloud systems built for Fortune 500 clients.
                        </motion.p>
                    </div>

                    {/* Enterprise Projects Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.75rem' }}>
                        {resume.projects.map((project, index) => {
                            const isFeatured = (project as any).featured;
                            return (
                                <motion.div
                                    key={index}
                                    className="minimal-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                        position: 'relative',
                                        border: isFeatured ? '2px solid #6366f1' : '1px solid var(--border-light)',
                                        boxShadow: isFeatured ? '0 10px 30px -10px rgba(99, 102, 241, 0.18)' : 'none',
                                        backgroundColor: isFeatured ? '#fafaff' : '#ffffff'
                                    }}
                                >
                                    {isFeatured && (project as any).badge && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '-12px',
                                            right: '16px',
                                            backgroundColor: '#4f46e5',
                                            color: '#ffffff',
                                            fontSize: '0.68rem',
                                            fontWeight: 700,
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '12px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            boxShadow: '0 2px 8px rgba(79, 70, 229, 0.3)'
                                        }}>
                                            ★ {(project as any).badge}
                                        </div>
                                    )}

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', marginTop: isFeatured ? '0.25rem' : '0' }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isFeatured ? '#4338ca' : 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                            {project.role}
                                        </span>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                                            {project.duration}
                                        </span>
                                    </div>

                                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
                                        {project.title}
                                    </h3>

                                    <p className="serif-text" style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.25rem' }}>
                                        {project.description}
                                    </p>

                                    {isFeatured && (project as any).metrics && (
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                                            {(project as any).metrics.map((metric: string, mIdx: number) => (
                                                <span key={mIdx} style={{
                                                    fontSize: '0.75rem',
                                                    fontWeight: 600,
                                                    color: '#3730a3',
                                                    backgroundColor: '#e0e7ff',
                                                    padding: '0.2rem 0.55rem',
                                                    borderRadius: '4px',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '0.25rem'
                                                }}>
                                                    ✓ {metric}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="skill-tag">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* 3. Technical Stack Breakdown */}
                <div>
                    <h3 className="section-header-line">
                        Technical Stack Breakdown
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
                        <div className="minimal-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                                <FaCode size={20} color="#4338ca" />
                                <h4 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Frontend Engineering</h4>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {resume.skills.frontend.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="minimal-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                                <FaServer size={20} color="#4338ca" />
                                <h4 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Backend & Services</h4>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {resume.skills.backend.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="minimal-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                                <FaTools size={20} color="#4338ca" />
                                <h4 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Database & Cloud</h4>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {[...resume.skills.database, ...resume.skills.cloudAndTools].slice(0, 10).map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
