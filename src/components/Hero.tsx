
import { motion, useScroll, useSpring } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { resume } from "../data/resume";

export default function Hero() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden" style={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-50"
                style={{ scaleX, position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: 'var(--primary)', transformOrigin: '0%', zIndex: 100 }}
            />

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-secondary font-mono text-lg mb-4 block" style={{ color: 'var(--secondary)', fontFamily: 'monospace', fontSize: '1.2rem', marginBottom: '1rem', display: 'block' }}>
                        Hi, my name is
                    </span>
                    <h1 className="text-6xl md:text-8xl font-bold mb-4" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 'bold', marginBottom: '1rem', lineHeight: 1.1 }}>
                        <span className="text-slate-100" style={{ color: 'var(--text-main)' }}>{resume.personalInfo.name}.</span>
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 'bold', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        I build things for the web.
                    </h2>
                </motion.div>

                <motion.p
                    className="max-w-2xl mx-auto text-slategray text-lg mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-muted)', fontSize: '1.125rem', lineHeight: 1.7 }}
                >
                    I'm a {resume.personalInfo.role} based in {resume.personalInfo.location}. {resume.personalInfo.summary}
                </motion.p>

                <motion.div
                    className="flex justify-center gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}
                >
                    <a href={resume.personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: '1px solid var(--text-muted)', color: 'var(--text-main)', textDecoration: 'none', transition: 'all 0.3s' }}>
                        <FaGithub size={20} /> GitHub
                    </a>
                    <a href={resume.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: '1px solid var(--text-muted)', color: 'var(--text-main)', textDecoration: 'none', transition: 'all 0.3s' }}>
                        <FaLinkedin size={20} /> LinkedIn
                    </a>
                    <a href={`mailto:${resume.personalInfo.email}`} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', background: 'var(--primary)', color: 'white', textDecoration: 'none', transition: 'all 0.3s' }}>
                        <FaEnvelope size={20} /> Contact Me
                    </a>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
            >
                <FaChevronDown size={24} color="var(--text-muted)" />
            </motion.div>
        </section>
    );
}
