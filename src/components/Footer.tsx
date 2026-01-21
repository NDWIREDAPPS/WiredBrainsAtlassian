import { Link } from '@tanstack/react-router'
import { MapPin, Mail, Phone } from 'lucide-react'
import { atlassianSolutions } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="w-full bg-[#f14a15]/10 border-t border-border pt-16 pb-8 text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <p className="leading-relaxed">
                  33 S Wood Ave #600
                  <br />
                  Iselin, NJ 08830
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:hello@wiredbrains.io"
                  className="hover:text-primary transition-colors"
                >
                  hello@wiredbrains.io
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+19084936720"
                  className="hover:text-primary transition-colors"
                >
                  (908) 493-6720
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Solutions</h3>
            <ul className="space-y-2">
              {atlassianSolutions.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className="hover:text-primary transition-colors block py-1"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <img
              src="/Wb.jpg"
              alt="Wired Brains"
              className="h-12 md:h-16 w-auto"
            />
            <img
              src="/Partners.png"
              alt="Partners"
              className="h-10 w-auto dark:hidden"
            />
            <img
              src="/PartnersW.png"
              alt="Partners"
              className="h-10 w-auto hidden dark:block"
            />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Wired Brains. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
