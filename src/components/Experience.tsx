import { motion } from "framer-motion";
import { resume } from "../data/resume";

export default function Experience() {
    return (
        <section id="experience" style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: 'var(--bg-page)' }}>
            <div className="container">
                {/* Header matching Image 3 */}
                <div style={{ marginBottom: '4rem' }}>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Experience & Qualifications
                    </motion.h2>

                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        A proven track record of leading software engineering teams, driving enterprise application architecture, and delivering measurable business impact through secure, cloud-scale solutions.
                    </motion.p>
                </div>

                {/* Grid layout matching Image 3 (2 columns: left timeline, right sidebar) */}
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1fr)', gap: '4rem' }}>

                    {/* Left Column: Professional Journey */}
                    <div>
                        <h3 className="section-header-line">
                            Professional Journey
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
                            {resume.experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '1.5rem', alignItems: 'flex-start' }}
                                >
                                    {/* Duration & Company left label */}
                                    <div>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                            {exp.duration.replace('–', '—')}
                                        </span>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-heading)', display: 'block', marginTop: '0.2rem' }}>
                                            {exp.company}
                                        </span>
                                    </div>

                                    {/* Role & Achievements right column */}
                                    <div>
                                        <h4 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '1rem', lineHeight: 1.2 }}>
                                            {exp.role}
                                        </h4>

                                        <ul className="serif-text" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1.2rem', margin: 0, listStyleType: 'disc' }}>
                                            {exp.achievements.map((item, i) => (
                                                <li key={i} style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Core Competencies & Education */}
                    <div>
                        <h3 className="section-header-line">
                            Core Competencies
                        </h3>

                        {/* Strategic & Frontend Skills */}
                        <div style={{ marginBottom: '2rem' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                                Enterprise Architecture
                            </span>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                <span className="skill-tag">Design Leadership</span>
                                <span className="skill-tag">Microservices</span>
                                <span className="skill-tag">RESTful APIs</span>
                                <span className="skill-tag">Agile Workflow</span>
                            </div>
                        </div>

                        {/* Technical Execution */}
                        <div style={{ marginBottom: '3rem' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                                Technical Execution
                            </span>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                <span className="skill-tag">Angular</span>
                                <span className="skill-tag">ASP.NET Core</span>
                                <span className="skill-tag">React</span>
                                <span className="skill-tag">C# / SQL</span>
                                <span className="skill-tag">Azure Cloud</span>
                            </div>
                        </div>

                        {/* Education Section */}
                        <div>
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                                Education
                            </span>

                            {resume.education.map((edu, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        backgroundColor: '#eef2ff',
                                        border: '1px solid #e0e7ff',
                                        borderRadius: '0.5rem',
                                        padding: '1.25rem'
                                    }}
                                >
                                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '0.35rem', lineHeight: 1.3 }}>
                                        {edu.degree}
                                    </h4>
                                    <p className="serif-text" style={{ fontSize: '0.875rem', color: 'var(--text-body)', margin: '0 0 0.5rem 0' }}>
                                        {edu.institution}
                                    </p>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                                        {edu.year.replace('–', '—')}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
