import { Link } from '@tanstack/react-router'
import { HeaderNav } from './HeaderNav'

export function Header() {
  return (
    <header className="bg-transparent sticky top-0 z-50 backdrop-blur-sm bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
          <span className="text-lg font-bold tracking-wider uppercase text-warm-900 group-hover:text-primary transition-colors">
            Lila Hinds
          </span>
        </Link>
        <HeaderNav />
      </div>
    </header>
  )
}
