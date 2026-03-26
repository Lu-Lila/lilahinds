import { Link } from '@tanstack/react-router'
import { HeaderNav } from './HeaderNav'

export function Header() {
  return (
    <header className="border-b border-border/50 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-semibold text-sm">LH</span>
          </div>
          <span className="text-lg font-semibold text-warm-900 group-hover:text-primary transition-colors">
            Lila Hinds
          </span>
        </Link>
        <HeaderNav />
      </div>
    </header>
  )
}
