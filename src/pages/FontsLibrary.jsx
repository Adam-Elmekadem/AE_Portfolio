import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { APP_ROUTES } from '../config/routes'
import { FONT_PRODUCTS } from '../data/resources'
import styles from './FontsLibrary.module.css'

export default function FontsLibrary() {
  return (
    <main className={`${styles.page} min-h-screen text-[#f3f4f7]`}>
      <section className={`${styles.gridLine} mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 lg:px-10`}>
        <PageHeader className="text-white" linkClassName="text-white/80" rightLabel="All Work" />

        <header className="mt-8 border-b border-white/15 pb-8">
          <p className="text-[10px] uppercase tracking-[0.16em] text-white/55">Free Resource Library</p>
          <h1 className="bounded-font mt-3 text-[clamp(3rem,10vw,7rem)] uppercase leading-[0.9]">All Free Fonts</h1>
          <p className="mt-4 max-w-[760px] text-base text-white/80">
            Browse all free fonts. Click any font to open examples, live custom text preview, full character showcase,
            and download action.
          </p>
        </header>

        <section className="mt-8 space-y-4">
          {FONT_PRODUCTS.map((font, index) => (
            <Link
              key={font.id}
              to={APP_ROUTES.FONT_DETAIL.replace(':fontId', font.id)}
              className="group grid gap-3 border-b border-white/10 py-5 transition hover:border-white/30 md:grid-cols-[90px_1fr_220px] md:items-center"
            >
              <div className="text-4xl text-[#d9a171]">{String(index + 1).padStart(2, '0')}</div>
              <div>
                <h2 className="text-4xl uppercase tracking-widest text-white transition group-hover:text-[#d9a171]">
                  {font.title}
                </h2>
                <p className="mt-2 text-sm text-white/70">{font.description}</p>
              </div>
              <div className="h-[80px] overflow-hidden rounded-sm border border-white/15">
                <img src={font.images[0]} alt={`${font.title} preview`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
            </Link>
          ))}
        </section>
      </section>
    </main>
  )
}
