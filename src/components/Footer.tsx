import { Link } from '@tanstack/react-router'
import { MapPin, Mail, Phone } from 'lucide-react'
import { atlassianSolutions } from '@/lib/data'

const socialLinks = [
    {
        href: "https://www.facebook.com/AchlysSolutions/",
        label: "Facebook",
        icon: "https://cdn.brandfetch.io/idpKX136kp/w/2084/h/2084/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1758525490502"
    },
    {
        href: "https://x.com/AchlysSolutions/",
        label: "X (Twitter)",
        icon: "https://cdn.brandfetch.io/idS5WhqBbM/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1692089092800"
    },
    {
        href: "https://in.linkedin.com/company/achlyssolutions",
        label: "LinkedIn",
        icon: "https://cdn.brandfetch.io/idJFz6sAsl/theme/dark/idtEseDv1X.svg?c=1bxid64Mup7aczewSAYMX&t=1740370996685"
    },
    {
        href: "https://www.instagram.com/AchlysSolutions/",
        label: "Instagram",
        icon: "https://cdn.brandfetch.io/ido5G85nya/theme/light/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1724650641154"
    }
]

export default function Footer() {
    return (
        <footer className="w-full bg-slate-50 border-t border-slate-200 pt-16 pb-8 text-slate-600">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Contact Us */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-slate-900">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-purple-600 mt-1 shrink-0" />
                                <p className="leading-relaxed">
                                    Whitefield Building, Near ITBP Camp,<br />
                                    Ring Road, Kanke, Ranchi - 834006<br />
                                    India
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-purple-600 shrink-0" />
                                <a href="mailto:info@achlys-solutions.com" className="hover:text-purple-600 transition-colors">
                                    info@achlys-solutions.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-purple-600 shrink-0" />
                                <a href="tel:+917204015914" className="hover:text-purple-600 transition-colors">
                                    +91 720-401-5914
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-slate-900">Solutions</h3>
                        <ul className="space-y-2">
                            {atlassianSolutions.map((item) => (
                                <li key={item.title}>
                                    <Link
                                        to={item.href}
                                        className="hover:text-purple-600 transition-colors block py-1"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stay Connected */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-slate-900">Stay Connected</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-purple-50 hover:border-purple-300 transition-all duration-300"
                                >
                                    <img
                                        src={social.icon}
                                        alt={social.label}
                                        className="w-5 h-5 object-contain"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Achlys Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
