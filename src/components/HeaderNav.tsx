import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/' as const, label: 'About' },
  { to: '/case-studies' as const, label: 'Case Studies' },
  { to: '/resume' as const, label: 'Resume' },
  { to: '/contact' as const, label: 'Contact' },
]

export function HeaderNav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="px-4 py-2 text-sm font-medium text-warm-700 hover:text-primary rounded-lg hover:bg-primary/5 transition-colors"
            activeProps={{ className: 'text-primary bg-primary/5' }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden p-2 text-warm-700 hover:text-primary rounded-lg"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border/50 shadow-sm md:hidden">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-warm-700 hover:text-primary rounded-lg hover:bg-primary/5 transition-colors"
                activeProps={{ className: 'text-primary bg-primary/5' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
