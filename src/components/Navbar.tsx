import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { downloadResumePDF } from "../utils/downloadResume";
import profilePic from "../assets/ram_profile.jpg";

interface NavbarProps {
    onOpenResume?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "experience", "projects", "skills", "contact"];
            const scrollPosition = window.scrollY + 120;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "contact", label: "Contact" }
    ];

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                backgroundColor: 'rgba(248, 250, 252, 0.95)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid var(--border-light)',
                padding: '0'
            }}
        >
            <div className="container nav-container">
                <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', fontWeight: 800, letterSpacing: '0.05em', color: 'var(--text-heading)', textTransform: 'uppercase', textDecoration: 'none' }}>
                    <img
                        src={profilePic}
                        alt="Ram Narayan"
                        style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '2px solid #4338ca',
                            boxShadow: '0 2px 8px rgba(67, 56, 202, 0.2)'
                        }}
                    />
                    RAM NARAYAN
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
                    <div style={{ display: 'flex', gap: '1.75rem' }}>
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                                onClick={() => setActiveSection(item.id)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <button onClick={onOpenResume} className="btn-outline-light" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', cursor: 'pointer', border: '1px solid var(--border-light)' }}>
                        View Resume
                    </button>
                    <button onClick={downloadResumePDF} className="btn-black" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', cursor: 'pointer' }}>
                        Download Resume
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}




