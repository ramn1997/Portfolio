import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaFileAlt, FaDownload } from "react-icons/fa";
import { resume } from "../data/resume";

import { downloadResumePDF } from "../utils/downloadResume";

interface ContactProps {
    onOpenResume?: () => void;
}


export default function Contact({ onOpenResume }: ContactProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });


    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("https://formsubmit.co/ajax/ram9707@outlook.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `Portfolio Contact from ${formData.name}`,
                    _template: "table",
                    _captcha: "false"
                })
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: 'var(--bg-page)', borderTop: '1px solid var(--border-light)' }}>
            <div className="container">
                {/* Header matching Image 4 */}
                <div style={{ marginBottom: '3.5rem' }}>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Let's Connect.
                    </motion.h2>

                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        I am currently open for new senior engineering opportunities and consulting roles. Feel free to reach out via the form below or connect through my professional network.
                    </motion.p>
                </div>

                {/* 2 Column Layout: Left Form Card, Right Details & CV Box */}
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)', gap: '3rem', alignItems: 'flex-start' }}>

                    {/* Left Side: White Form Box matching image 4 */}
                    <motion.div
                        className="minimal-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{ padding: '2.5rem' }}
                    >
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                                <div>
                                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-heading)', display: 'block', marginBottom: '0.5rem' }}>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Ram Narayan"
                                        required
                                        className="custom-input"
                                    />
                                </div>

                                <div>
                                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-heading)', display: 'block', marginBottom: '0.5rem' }}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="ram9707@outlook.com"
                                        required
                                        className="custom-input"
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-heading)', display: 'block', marginBottom: '0.5rem' }}>
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we collaborate?"
                                    required
                                    className="custom-input"
                                    style={{ resize: 'vertical' }}
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    style={{
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        fontFamily: 'var(--font-serif)',
                                        fontSize: '0.95rem',
                                        color: 'var(--text-heading)',
                                        cursor: 'pointer',
                                        padding: 0
                                    }}
                                >
                                    {status === "submitting" ? "Sending..." : "Send Message"}
                                </button>
                                {status === "success" && (
                                    <p style={{ color: 'var(--accent-green)', fontSize: '0.85rem', marginTop: '0.5rem' }}>Message sent successfully!</p>
                                )}
                                {status === "error" && (
                                    <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.5rem' }}>Something went wrong. Please try again.</p>
                                )}
                            </div>
                        </form>
                    </motion.div>

                    {/* Right Side: Details & CV Card matching Image 4 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '1.5rem' }}>
                                Details
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <FaEnvelope size={18} color="var(--text-muted)" style={{ marginTop: '0.2rem' }} />
                                    <div>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block' }}>Email</span>
                                        <a href={`mailto:${resume.personalInfo.email}`} className="serif-text" style={{ fontSize: '0.95rem', color: 'var(--text-heading)' }}>
                                            {resume.personalInfo.email}
                                        </a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <FaMapMarkerAlt size={18} color="var(--text-muted)" style={{ marginTop: '0.2rem' }} />
                                    <div>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block' }}>Location</span>
                                        <span className="serif-text" style={{ fontSize: '0.95rem', color: 'var(--text-heading)' }}>
                                            {resume.personalInfo.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Curriculum Vitae Card */}
                        <div style={{
                            backgroundColor: '#eef2ff',
                            border: '1px solid #e0e7ff',
                            borderRadius: '0.75rem',
                            padding: '2rem'
                        }}>
                            <FaFileAlt size={28} color="var(--text-heading)" style={{ marginBottom: '1.25rem' }} />
                            <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
                                Curriculum Vitae
                            </h4>
                            <p className="serif-text" style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                A comprehensive overview of my professional experience, enterprise projects, technical skills, and education.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                <button
                                    onClick={downloadResumePDF}
                                    style={{
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        letterSpacing: '0.05em',
                                        textTransform: 'uppercase',
                                        color: '#ffffff',
                                        backgroundColor: '#0f172a',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '0.375rem',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.4rem',
                                        cursor: 'pointer',
                                        border: 'none'
                                    }}
                                >
                                    Download 1-Page PDF <FaDownload size={10} />
                                </button>

                                <button
                                    onClick={onOpenResume}
                                    style={{
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        letterSpacing: '0.05em',
                                        textTransform: 'uppercase',
                                        color: 'var(--text-heading)',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.4rem',
                                        paddingBottom: '2px',
                                        borderBottom: '1px solid var(--text-heading)',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Preview Resume
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
