import { motion } from "framer-motion";
import { FaBuilding, FaStore, FaCity, FaLaptopCode, FaServer, FaCogs, FaShieldAlt } from "react-icons/fa";
import { resume } from "../data/resume";
import profilePic from "../assets/ram_profile.jpg";

interface HeroProps {
    onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
    return (
        <section id="home" style={{ paddingTop: '5rem', paddingBottom: '4rem', backgroundColor: 'var(--bg-page)' }}>
            <div className="container">
                {/* Hero Top Content with Profile Picture */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', flexWrap: 'wrap-reverse', marginBottom: '4rem' }}>
                    <div style={{ flex: '1 1 500px', maxWidth: '750px' }}>
                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            style={{ marginBottom: '1.75rem' }}
                        >
                            Designing the Future of Digital Experiences
                        </motion.h1>

                        <motion.p
                            className="hero-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            style={{ marginBottom: '2.5rem' }}
                        >
                            I am a {resume.personalInfo.role.toLowerCase()} based in {resume.personalInfo.location} specializing in building secure, scalable web applications using Angular and ASP.NET Core. My focus is on microservices architecture, cloud engineering on Azure, and delivering business-critical solutions in Agile environments.
                        </motion.p>

                        <motion.div
                            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <a href="#projects" className="btn-black">
                                View Work
                            </a>
                            <button onClick={onOpenResume} className="btn-outline-light" style={{ cursor: 'pointer' }}>
                                Read Resume
                            </button>
                        </motion.div>
                    </div>

                    {/* Profile Picture Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ position: 'relative', margin: '0 auto' }}
                    >
                        <div style={{
                            position: 'relative',
                            width: '240px',
                            height: '240px',
                            borderRadius: '50%',
                            padding: '6px',
                            background: 'linear-gradient(135deg, #4338ca, #6366f1)',
                            boxShadow: '0 20px 40px -15px rgba(67, 56, 202, 0.3)'
                        }}>
                            <img
                                src={profilePic}
                                alt="Ram Narayan"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    backgroundColor: '#ffffff',
                                    border: '4px solid #ffffff'
                                }}
                            />
                        </div>

                        {/* Status Badge */}
                        <div style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            backgroundColor: '#ffffff',
                            padding: '0.4rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: '#0f172a',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
                            border: '1px solid #e2e8f0'
                        }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }}></span>
                            Gallagher Sr. SE
                        </div>
                    </motion.div>
                </div>


                {/* Partners / Companies Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                    style={{
                        paddingTop: '3rem',
                        paddingBottom: '3.5rem',
                        borderTop: '1px solid var(--border-light)',
                        borderBottom: '1px solid var(--border-light)',
                        textAlign: 'center',
                        marginBottom: '4rem'
                    }}
                >
                    <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '2rem'
                    }}>
                        PREVIOUS PARTNERS & ENTERPRISE CLIENTS
                    </span>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                        gap: '3.5rem',
                        flexWrap: 'wrap',
                        color: '#94a3b8'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', fontWeight: 700, color: '#475569' }}>
                            <FaShieldAlt size={26} /> Gallagher
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', fontWeight: 600, color: '#64748b' }}>
                            <FaBuilding size={26} /> Birlasoft
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', fontWeight: 600, color: '#64748b' }}>
                            <FaCity size={26} /> RMSI
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', fontWeight: 600, color: '#64748b' }}>
                            <FaBuilding size={26} /> IDEMIA
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', fontWeight: 600, color: '#64748b' }}>
                            <FaStore size={26} /> Conduent
                        </div>
                    </div>
                </motion.div>

                {/* 3 Pillar Cards matching image 1 bottom */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.75rem'
                }}>
                    <motion.div
                        className="minimal-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div style={{
                            width: '2.5rem',
                            height: '2.5rem',
                            borderRadius: '0.375rem',
                            backgroundColor: '#e0e7ff',
                            color: '#4338ca',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            <FaLaptopCode size={18} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                            Design Systems
                        </h3>
                        <p className="serif-text" style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                            Architecting scalable, component-driven design systems and responsive SPAs in Angular & React that ensure consistency and accelerate development cycles across enterprise platforms.
                        </p>
                    </motion.div>

                    <motion.div
                        className="minimal-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div style={{
                            width: '2.5rem',
                            height: '2.5rem',
                            borderRadius: '0.375rem',
                            backgroundColor: '#e0e7ff',
                            color: '#4338ca',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            <FaServer size={18} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                            Product Strategy
                        </h3>
                        <p className="serif-text" style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                            Aligning user needs with business objectives through secure ASP.NET Core microservices, cloud deployments on Azure DevOps CI/CD pipelines, and secret management with Key Vault.
                        </p>
                    </motion.div>

                    <motion.div
                        className="minimal-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div style={{
                            width: '2.5rem',
                            height: '2.5rem',
                            borderRadius: '0.375rem',
                            backgroundColor: '#e0e7ff',
                            color: '#4338ca',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            <FaCogs size={18} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                            Team Leadership
                        </h3>
                        <p className="serif-text" style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                            Fostering collaborative Agile environments, mentoring engineering teams, and bridging the gap between product design, SQL database performance optimization, and high-uptime production SLA.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
