import { useState } from 'react'
import { Link } from 'react-router-dom'
import { APP_ROUTES, PRIMARY_NAV_LINKS } from '../config/routes'

export default function PageHeader({ className = '', linkClassName = '', rightLabel = 'Back to Summary' }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const baseLinkClass = `topMeta relative z-30 inline-flex shrink-0 items-center whitespace-nowrap px-1 py-1 transition-opacity hover:opacity-65 ${linkClassName}`

  return (
    <header className={`topMeta relative z-30 flex items-center justify-between gap-3 text-[10px] uppercase text-current sm:text-[11px] ${className}`}>
      <p className="bounded-font text-sm uppercase tracking-[0.08em]">AE*</p>

      <nav className="relative z-30 hidden flex-1 items-center justify-center gap-7 md:flex">
        {PRIMARY_NAV_LINKS.map((item) => (
          <Link key={item.path} to={item.path} className={baseLinkClass}>{item.label}</Link>
        ))}
      </nav>

      <div className="hidden md:block">
        <Link to={APP_ROUTES.SUMMARY} className={baseLinkClass}>{rightLabel}</Link>
      </div>

      <div className="relative md:hidden">
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className={`topMeta inline-flex items-center rounded-sm border border-current/30 px-2 py-1 text-[10px] uppercase tracking-[0.13em] ${linkClassName}`}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          Menu
        </button>

        {isMobileMenuOpen ? (
          <div className="absolute right-0 top-[calc(100%+0.45rem)] z-50 min-w-45 border border-white/15 bg-[#0a0c11]/95 p-2 shadow-[0_10px_24px_rgba(0,0,0,0.28)] backdrop-blur-sm">
            <nav className="flex flex-col gap-1">
              {PRIMARY_NAV_LINKS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="topMeta rounded-sm px-2 py-1.5 text-[10px] uppercase tracking-[0.13em] text-white/90 transition hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to={APP_ROUTES.SUMMARY}
                onClick={() => setIsMobileMenuOpen(false)}
                className="topMeta mt-1 rounded-sm border border-white/20 px-2 py-1.5 text-[10px] uppercase tracking-[0.13em] text-white/90 transition hover:bg-white/10"
              >
                {rightLabel}
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  )
}
