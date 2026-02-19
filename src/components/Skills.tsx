
import { motion } from "framer-motion";
import { resume } from "../data/resume";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

export default function Skills() {
    return (
        <section className="section bg-slate-100" style={{ padding: '6rem 0', background: 'var(--bg-dark)' }} id="skills">
            <div className="container">
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: 'var(--text-main)' }}
                >
                    <span className="gradient-text" style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(to right, var(--primary), var(--secondary))' }}>Technical Skills</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    <SkillCard title="Frontend" icon={<FaCode />} skills={resume.skills.frontend} />
                    <SkillCard title="Backend" icon={<FaServer />} skills={resume.skills.backend} />
                    <SkillCard title="Database & Tools" icon={<FaTools />} skills={[...resume.skills.database, ...resume.skills.cloudAndTools]} />

                </div>
            </div>
        </section>
    );
}

function SkillCard({ title, icon, skills }: { title: string; icon: React.ReactNode; skills: string[] }) {
    return (
        <motion.div
            className="card h-full"
            whileHover={{ scale: 1.05 }}
            style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
        >
            <div className="flex items-center gap-4 mb-6" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-500" style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', fontSize: '1.5rem' }}>
                    {icon}
                </div>
                <h3 className="text-xl font-bold" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-main)' }}>{title}</h3>
            </div>

            <div className="flex flex-wrap gap-2" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-slate-700 rounded-full text-sm font-medium text-slate-300"
                        style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(30, 41, 59, 0.5)', color: 'var(--text-muted)', fontSize: '0.875rem', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
