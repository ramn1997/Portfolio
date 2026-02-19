import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { resume } from "../data/resume";

export default function Contact() {
    return (
        <section className="section bg-slate-900" style={{ padding: '6rem 0', background: 'var(--bg-dark)' }} id="contact">
            <div className="container mx-auto px-4 max-w-4xl" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="text-4xl font-bold mb-6 gradient-text" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', backgroundImage: 'linear-gradient(to right, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                        Get In Touch
                    </h2>
                    <p className="text-lg text-slate-400" style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        <ContactItem icon={<FaEnvelope />} label="Email" value={resume.personalInfo.email} href={`mailto:${resume.personalInfo.email}`} />
                        <ContactItem icon={<FaPhone />} label="Phone" value={resume.personalInfo.phone} href={`tel:${resume.personalInfo.phone.split(',')[0].trim()}`} />
                        <ContactItem icon={<FaMapMarkerAlt />} label="Location" value={resume.personalInfo.location} />
                        <div className="flex gap-4 mt-8" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            <SocialButton icon={<FaGithub />} href={resume.personalInfo.github} />
                            <SocialButton icon={<FaLinkedin />} href={resume.personalInfo.linkedin} />
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-4"
                        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
                            style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: 'var(--text-main)', fontSize: '1rem' }}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
                            style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: 'var(--text-main)', fontSize: '1rem' }}
                        />
                        <textarea
                            rows={4}
                            placeholder="Message"
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
                            style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: 'var(--text-main)', fontSize: '1rem' }}
                        ></textarea>
                        <button className="btn btn-primary w-full justify-center" style={{ width: '100%', justifyContent: 'center' }}>
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
    const content = (
        <div className="flex items-center gap-4 group" style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: href ? 'pointer' : 'default' }}>
            <div className="p-3 bg-slate-800 rounded-lg text-indigo-400 group-hover:text-indigo-300 transition-colors" style={{ padding: '0.75rem', background: 'var(--bg-card)', borderRadius: '0.5rem', color: 'var(--primary)', fontSize: '1.25rem' }}>
                {icon}
            </div>
            <div>
                <p className="text-sm text-slate-500 font-medium" style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: '500' }}>{label}</p>
                <p className="text-slate-200 font-medium group-hover:text-white transition-colors" style={{ color: 'var(--text-main)', fontWeight: '500' }}>{value}</p>
            </div>
        </div>
    );

    return href ? <a href={href} style={{ textDecoration: 'none' }}>{content}</a> : content;
}

function SocialButton({ icon, href }: { icon: React.ReactNode; href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-indigo-500 transition-all duration-300 transform hover:-translate-y-1"
            style={{ padding: '0.75rem', background: 'var(--bg-card)', borderRadius: '0.5rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', transition: 'all 0.3s' }}
        >
            {icon}
        </a>
    );
}
