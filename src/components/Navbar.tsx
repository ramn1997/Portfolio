import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', padding: '1rem 0' }}
        >
            <div className="container mx-auto px-6 h-16 flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
                <a href="#" className="font-bold text-xl tracking-tighter" style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '-0.025em', color: 'var(--text-main)', textDecoration: 'none' }}>
                    RM.
                </a>

                <div className="hidden md:flex gap-8" style={{ display: 'flex', gap: '2rem' }}>
                    {['Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                            style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
