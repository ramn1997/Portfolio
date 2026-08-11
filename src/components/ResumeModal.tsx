import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPrint, FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaFilePdf, FaBriefcase, FaGraduationCap, FaCode, FaCertificate } from "react-icons/fa";
import { resume } from "../data/resume";
import { downloadResumePDF } from "../utils/downloadResume";


interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
    const [viewMode, setViewMode] = useState<"original" | "modern">("original");

    const handlePrint = () => {
        window.print();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="resume-modal-overlay" onClick={onClose}>
                    <motion.div
                        className="resume-modal-container"
                        initial={{ opacity: 0, scale: 0.96, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 15 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header Controls (Hidden in print) */}
                        <div className="resume-modal-controls print-hide">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-heading)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <FaFilePdf color="#dc2626" /> Ram Narayan - Resume
                                </span>

                                {/* View Switcher */}
                                <div style={{ display: 'flex', backgroundColor: '#e2e8f0', borderRadius: '0.5rem', padding: '0.2rem' }}>
                                    <button
                                        onClick={() => setViewMode("original")}
                                        style={{
                                            padding: '0.35rem 0.85rem',
                                            fontSize: '0.8rem',
                                            fontWeight: 700,
                                            borderRadius: '0.35rem',
                                            border: 'none',
                                            backgroundColor: viewMode === "original" ? "#ffffff" : "transparent",
                                            color: viewMode === "original" ? "#0f172a" : "#64748b",
                                            boxShadow: viewMode === "original" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        Original Resume PDF
                                    </button>
                                    <button
                                        onClick={() => setViewMode("modern")}
                                        style={{
                                            padding: '0.35rem 0.85rem',
                                            fontSize: '0.8rem',
                                            fontWeight: 700,
                                            borderRadius: '0.35rem',
                                            border: 'none',
                                            backgroundColor: viewMode === "modern" ? "#ffffff" : "transparent",
                                            color: viewMode === "modern" ? "#0f172a" : "#64748b",
                                            boxShadow: viewMode === "modern" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        Interactive View
                                    </button>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <button
                                    onClick={downloadResumePDF}
                                    className="btn-black"
                                    style={{ padding: '0.45rem 1rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}
                                >
                                    <FaDownload size={13} /> Download PDF
                                </button>
                                <button className="btn-outline-light" style={{ padding: '0.45rem 1rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem', border: '1px solid #cbd5e1', cursor: 'pointer' }} onClick={handlePrint}>
                                    <FaPrint size={13} /> Print
                                </button>

                                <button
                                    onClick={onClose}
                                    style={{
                                        width: '2.25rem',
                                        height: '2.25rem',
                                        borderRadius: '50%',
                                        backgroundColor: '#f1f5f9',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#475569',
                                        cursor: 'pointer'
                                    }}
                                    aria-label="Close resume"
                                >
                                    <FaTimes size={16} />
                                </button>
                            </div>
                        </div>

                        {/* View Content */}
                        <div className="resume-scroll-body">
                            {viewMode === "original" ? (
                                <div className="original-pdf-document" id="printable-resume">
                                    {/* Centered Classic Header */}
                                    <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
                                        <h1 style={{ fontSize: '2.4rem', fontWeight: 'normal', fontFamily: 'Georgia, serif', color: '#000000', margin: 0, letterSpacing: '0.02em' }}>
                                            {resume.personalInfo.name}
                                        </h1>
                                        <div style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', color: '#111827', marginTop: '0.1rem', marginBottom: '0.35rem' }}>
                                            {resume.personalInfo.role}
                                        </div>
                                        <div style={{ fontSize: '0.9rem', fontFamily: 'Times New Roman, Times, serif', color: '#111827', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.4rem' }}>
                                            <span>{resume.personalInfo.phone}</span>
                                            <span>|</span>
                                            <a href={`mailto:${resume.personalInfo.email}`} style={{ color: '#111827', textDecoration: 'none' }}>{resume.personalInfo.email}</a>
                                            <span>|</span>
                                            <a href={resume.personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: '#111827', textDecoration: 'none' }}>linkedin.com/in/ramn1997</a>
                                            <span>|</span>
                                            <span>{resume.personalInfo.location}</span>
                                        </div>
                                    </div>

                                    {/* Summary Paragraph */}
                                    <p style={{ fontSize: '0.92rem', fontFamily: 'Times New Roman, Times, serif', color: '#111827', lineHeight: 1.45, textAlign: 'justify', marginTop: 0, marginBottom: '1.25rem' }}>
                                        {resume.personalInfo.summary}
                                    </p>

                                    {/* TECHNICAL SKILLS */}
                                    <div className="pdf-section">
                                        <h2 className="pdf-section-title">TECHNICAL SKILLS</h2>
                                        <div style={{ fontSize: '0.9rem', fontFamily: 'Times New Roman, Times, serif', color: '#111827', lineHeight: 1.5 }}>
                                            <div><strong>Languages:</strong> C#, JavaScript, TypeScript, SQL, Python</div>
                                            <div><strong>Frontend:</strong> Angular (v12-15), React(Beginner v19), HTML5, CSS3, jQuery, Chart.js, Kendo UI, PrimeNG</div>
                                            <div><strong>Backend:</strong> ASP.NET Core, ASP.NET MVC, REST APIs, WCF, Microservices, JWT, Entity Framework Core, LINQ, CQRS</div>
                                            <div><strong>Database & Tools:</strong> MS SQL Server, PostgreSQL, Azure, Azure App Service,Azure DevOps, Azure Function, Azure Blob Storage, Docker, RabbitMQ, Git, Microsoft Dynamics 365, PowerApps, Power Automate, Postman, Swagger, XUnit</div>
                                            <div><strong>Core Competencies:</strong> Data Structures & Algorithms, API Security, Performance Optimization, System Design</div>
                                        </div>
                                    </div>

                                    {/* PROFESSIONAL EXPERIENCE */}
                                    <div className="pdf-section">
                                        <h2 className="pdf-section-title">PROFESSIONAL EXPERIENCE</h2>

                                        {resume.experience.map((exp) => (
                                            <div key={exp.id} style={{ marginBottom: '1rem' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', fontFamily: 'Times New Roman, Times, serif' }}>
                                                    <strong>{exp.role}</strong>
                                                    <span>{exp.duration}</span>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', fontFamily: 'Times New Roman, Times, serif', fontStyle: 'italic', marginBottom: '0.3rem' }}>
                                                    <span>{exp.company}</span>
                                                    <span>{exp.location}</span>
                                                </div>
                                                <ul style={{ margin: 0, paddingLeft: '1.25rem', fontFamily: 'Times New Roman, Times, serif', fontSize: '0.9rem', lineHeight: 1.45 }}>
                                                    {exp.achievements.map((ach, i) => (
                                                        <li key={i} style={{ marginBottom: '0.2rem' }}>{ach}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>

                                    {/* PROJECTS */}
                                    <div className="pdf-section">
                                        <h2 className="pdf-section-title">PROJECTS</h2>
                                        <div style={{ fontFamily: 'Times New Roman, Times, serif', fontSize: '0.9rem', lineHeight: 1.5 }}>
                                            {resume.projects.map((proj, idx) => (
                                                <div key={idx} style={{ marginBottom: '0.5rem' }}>
                                                    <strong>{proj.title} ({proj.duration}):</strong> {proj.description}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* EDUCATION */}
                                    <div className="pdf-section">
                                        <h2 className="pdf-section-title">EDUCATION</h2>
                                        {resume.education.map((edu, idx) => (
                                            <div key={idx} style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                                                    <strong>{edu.institution}</strong>
                                                    <span>{edu.year}</span>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontStyle: 'italic' }}>
                                                    <span>{edu.degree}</span>
                                                    <span>{edu.details}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* ACHIEVEMENTS & CERTIFICATIONS */}
                                    <div className="pdf-section" style={{ borderBottom: 'none' }}>
                                        <h2 className="pdf-section-title">ACHIEVEMENTS & CERTIFICATIONS</h2>
                                        <div style={{ fontFamily: 'Times New Roman, Times, serif', fontSize: '0.9rem', lineHeight: 1.5 }}>
                                            <div>
                                                <strong>Smart India Hackathon 2019:</strong> National finalist among 10,000+ teams | <strong>Research:</strong> Published "Analysis of Iris Recognition" at NCNCAC
                                            </div>
                                            <div>
                                                <strong>Certifications:</strong> {resume.certifications.join(', ')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* Interactive Web View */
                                <div className="resume-document">
                                    {/* Header */}
                                    <header className="resume-header">
                                        <div>
                                            <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.025em' }}>
                                                {resume.personalInfo.name}
                                            </h1>
                                            <p style={{ fontSize: '1.15rem', fontWeight: 600, color: '#4338ca', marginTop: '0.25rem', marginBottom: 0 }}>
                                                {resume.personalInfo.role}
                                            </p>
                                        </div>
                                        <div className="resume-contact-grid">
                                            <a href={`mailto:${resume.personalInfo.email}`} className="resume-contact-item">
                                                <FaEnvelope size={12} /> {resume.personalInfo.email}
                                            </a>
                                            <span className="resume-contact-item">
                                                <FaPhone size={12} /> {resume.personalInfo.phone}
                                            </span>
                                            <span className="resume-contact-item">
                                                <FaMapMarkerAlt size={12} /> {resume.personalInfo.location}
                                            </span>
                                            <a href={resume.personalInfo.linkedin} target="_blank" rel="noreferrer" className="resume-contact-item">
                                                <FaLinkedin size={12} /> linkedin.com/in/ramn1997
                                            </a>
                                        </div>
                                    </header>

                                    {/* Summary */}
                                    <section className="resume-section">
                                        <h3 className="resume-section-title">
                                            Professional Summary
                                        </h3>
                                        <p className="serif-text" style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.6, margin: 0 }}>
                                            {resume.personalInfo.summary}
                                        </p>
                                    </section>

                                    {/* Experience */}
                                    <section className="resume-section">
                                        <h3 className="resume-section-title">
                                            <FaBriefcase size={14} style={{ marginRight: '0.4rem' }} /> Work Experience
                                        </h3>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                            {resume.experience.map((exp) => (
                                                <div key={exp.id} className="resume-exp-item">
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                                                        <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                                                            {exp.role} <span style={{ fontWeight: 400, color: '#64748b' }}>— {exp.company}</span>
                                                        </h4>
                                                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b' }}>
                                                            {exp.duration} | {exp.location}
                                                        </span>
                                                    </div>
                                                    <ul className="resume-bullet-list">
                                                        {exp.achievements.map((ach, i) => (
                                                            <li key={i}>{ach}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Enterprise Projects */}
                                    <section className="resume-section">
                                        <h3 className="resume-section-title">
                                            Enterprise Projects
                                        </h3>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                                            {resume.projects.map((proj, idx) => (
                                                <div key={idx} style={{ padding: '0.85rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', backgroundColor: '#f8fafc' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                                                        <strong style={{ fontSize: '0.95rem', color: '#0f172a' }}>{proj.title}</strong>
                                                        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{proj.duration}</span>
                                                    </div>
                                                    <p style={{ fontSize: '0.825rem', color: '#475569', margin: '0 0 0.5rem 0', lineHeight: 1.4 }}>
                                                        {proj.description}
                                                    </p>
                                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                                                        {proj.tech.map((t, tidx) => (
                                                            <span key={tidx} style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '0.25rem', color: '#334155' }}>
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Skills */}
                                    <section className="resume-section">
                                        <h3 className="resume-section-title">
                                            <FaCode size={14} style={{ marginRight: '0.4rem' }} /> Technical Skills
                                        </h3>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                                            <div>
                                                <strong style={{ color: '#0f172a' }}>Languages:</strong>{' '}
                                                <span style={{ color: '#475569' }}>{resume.skills.languages.join(', ')}</span>
                                            </div>
                                            <div>
                                                <strong style={{ color: '#0f172a' }}>Frontend:</strong>{' '}
                                                <span style={{ color: '#475569' }}>{resume.skills.frontend.join(', ')}</span>
                                            </div>
                                            <div>
                                                <strong style={{ color: '#0f172a' }}>Backend:</strong>{' '}
                                                <span style={{ color: '#475569' }}>{resume.skills.backend.join(', ')}</span>
                                            </div>
                                            <div>
                                                <strong style={{ color: '#0f172a' }}>Database & Tools:</strong>{' '}
                                                <span style={{ color: '#475569' }}>{[...resume.skills.database, ...resume.skills.cloudAndTools].join(', ')}</span>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Education & Achievements */}
                                    <section className="resume-section" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                            <div>
                                                <h3 className="resume-section-title">
                                                    <FaGraduationCap size={14} style={{ marginRight: '0.4rem' }} /> Education
                                                </h3>
                                                {resume.education.map((edu, idx) => (
                                                    <div key={idx}>
                                                        <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                                                            {edu.degree}
                                                        </h4>
                                                        <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '0.2rem 0' }}>
                                                            {edu.institution} ({edu.year})
                                                        </p>
                                                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#4338ca' }}>
                                                            {edu.details}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div>
                                                <h3 className="resume-section-title">
                                                    <FaCertificate size={14} style={{ marginRight: '0.4rem' }} /> Achievements & Certifications
                                                </h3>
                                                <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.85rem', color: '#334155' }}>
                                                    {resume.achievements.map((ach, idx) => (
                                                        <li key={idx} style={{ marginBottom: '0.25rem' }}>{ach}</li>
                                                    ))}
                                                    <li style={{ marginBottom: '0.25rem' }}>
                                                        Certifications: {resume.certifications.join(', ')}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
