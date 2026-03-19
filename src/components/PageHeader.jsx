import { Link } from 'react-router-dom'
import { APP_ROUTES, PRIMARY_NAV_LINKS } from '../config/routes'

export default function PageHeader({ className = '', linkClassName = '', rightLabel = 'Back to Summary' }) {
  const baseLinkClass = `topMeta relative z-30 inline-flex shrink-0 items-center whitespace-nowrap px-1 py-1 transition-opacity hover:opacity-65 ${linkClassName}`

  return (
    <header className={`topMeta relative z-30 flex items-center justify-between gap-3 text-[10px] uppercase text-current sm:text-[11px] ${className}`}>
      <p className="bounded-font text-sm uppercase tracking-[0.08em]">AE*</p>

      <nav className="relative z-30 hidden flex-1 items-center justify-center gap-7 sm:flex">
        {PRIMARY_NAV_LINKS.map((item) => (
          <Link key={item.path} to={item.path} className={baseLinkClass}>{item.label}</Link>
        ))}
      </nav>

      <Link to={APP_ROUTES.SUMMARY} className={baseLinkClass}>{rightLabel}</Link>
    </header>
  )
}
