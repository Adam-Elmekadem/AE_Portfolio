import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'
import PageHeader from '../components/PageHeader'
import { APP_ROUTES } from '../config/routes'
import { fetchGoogleFonts } from '../services/googleFonts'
import styles from './FontsLibrary.module.css'

const CATEGORY_FILTERS = ['all', 'serif', 'sans-serif', 'display', 'handwriting', 'monospace']
const WEIGHT_FILTERS = ['all', 'regular', 'bold']
const PAGE_SIZE = 24

export default function FontsLibrary() {
  const [fonts, setFonts] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [weightFilter, setWeightFilter] = useState('all')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('favorite-fonts') || '[]')
    } catch {
      return []
    }
  })
  const [error, setError] = useState('')
  const loadMoreRef = useRef(null)

  useEffect(() => {
    let active = true

    const loadFonts = async () => {
        if (!active) return // bail out early

        try {
            const data = await fetchGoogleFonts()
            if (active) {
            setFonts(data)
            }
        } catch (loadError) {
            if (active) {
            setError(loadError.message || 'Failed to load fonts')
            }
        } finally {
            if (active) {
            setLoading(false)
            }
        }
    }


    loadFonts()
    return () => {
      active = false
    }
  }, [])

  const filteredFonts = useMemo(() => {
    const term = query.trim().toLowerCase()

    return fonts.filter((font) => {
      if (term && !font.family.toLowerCase().includes(term)) return false
      if (categoryFilter !== 'all' && font.category !== categoryFilter) return false

      if (weightFilter === 'regular') {
        return !!font.files?.regular
      }

      if (weightFilter === 'bold') {
        const variants = font.variants || []
        return variants.some((variant) =>
          variant === '700' || variant === '800' || variant === '900' || String(variant).includes('bold'),
        )
      }

      return true
    })
  }, [fonts, query, categoryFilter, weightFilter])

  const visibleFonts = useMemo(
    () => filteredFonts.slice(0, visibleCount),
    [filteredFonts, visibleCount],
  )

  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [query, categoryFilter, weightFilter])

  useEffect(() => {
    if (!loadMoreRef.current) return undefined
    const node = loadMoreRef.current

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting) return

        setVisibleCount((prev) => {
          if (prev >= filteredFonts.length) return prev
          return Math.min(prev + PAGE_SIZE, filteredFonts.length)
        })
      },
      { rootMargin: '220px 0px' },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
    }
  }, [filteredFonts.length])

  const toggleFavorite = (fontId) => {
    setFavorites((prev) => {
      const next = prev.includes(fontId)
        ? prev.filter((item) => item !== fontId)
        : [...prev, fontId]
      localStorage.setItem('favorite-fonts', JSON.stringify(next))
      return next
    })
  }

  return (
    <main className={`${styles.page} min-h-screen text-[#f3f4f7]`}>
      <section className={`${styles.gridLine} mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-10`}>
        <PageHeader className="text-white" linkClassName="text-white/80" rightLabel="All Work" />

        <header className="mt-8 border-b border-white/15 pb-8">
          <p className="text-[10px] uppercase tracking-[0.16em] text-white/55">Free Resource Library</p>
          <h1 className="bounded-font mt-3 text-[clamp(3rem,10vw,7rem)] uppercase leading-[0.9]">All Free Fonts</h1>
          <p className="mt-4 max-w-190 text-base text-white/80">
            Browse all free fonts. Click any font to open examples, live custom text preview, full character showcase,
            and download action.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search fonts..."
              className="w-full max-w-[320px] border-b border-white/30 bg-transparent px-0 py-2 text-sm text-white outline-none focus:border-white"
            />
            <p className="text-xs uppercase tracking-[0.14em] text-white/55">
              {visibleFonts.length}/{filteredFonts.length} fonts
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {CATEGORY_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setCategoryFilter(filter)}
                className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.14em] transition ${
                  categoryFilter === filter
                    ? 'border-white/55 bg-white/15 text-white'
                    : 'border-white/20 bg-transparent text-white/70 hover:border-white/35 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {WEIGHT_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setWeightFilter(filter)}
                className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.14em] transition ${
                  weightFilter === filter
                    ? 'border-[#d9a171] bg-[#d9a171]/12 text-[#f3c091]'
                    : 'border-white/20 bg-transparent text-white/70 hover:border-white/35 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </header>

        {error ? (
          <div className="mt-8 border border-red-300/35 bg-red-950/20 p-4 text-sm text-red-100">
            {error}. Set VITE_GOOGLE_FONTS_API_KEY in your env to enable Google Fonts fetching.
          </div>
        ) : null}

        <section className="mt-8 space-y-4">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div
                key={`font-skeleton-${index}`}
                className="grid gap-3 border-b border-white/10 py-5 md:grid-cols-[90px_1fr_auto] md:items-center"
              >
                <div className="h-10 w-12 animate-pulse rounded bg-white/10" />
                <div>
                  <div className="h-8 w-2/3 animate-pulse rounded bg-white/10" />
                  <div className="mt-3 h-4 w-full animate-pulse rounded bg-white/10" />
                </div>
                <div className="h-9 w-9 animate-pulse rounded-full bg-white/10" />
              </div>
            ))
          ) : (
            visibleFonts.map((font, index) => (
            <Link
              key={font.id}
              to={APP_ROUTES.FONT_DETAIL.replace(':fontId', font.id)}
              className="group grid gap-3 border-b border-white/10 py-5 transition hover:border-white/30 md:grid-cols-[90px_1fr_auto] md:items-center"
            >
              <div className="text-4xl text-[#d9a171]">{String(index + 1).padStart(2, '0')}</div>
              <div>
                <h2 className="text-4xl uppercase tracking-widest text-white transition group-hover:text-[#d9a171]">
                  {font.family}
                </h2>
                <p className="mt-2 text-sm text-white/70">{font.description}</p>
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault()
                    toggleFavorite(font.id)
                  }}
                  className={`rounded-full border p-2 transition ${
                    favorites.includes(font.id)
                      ? 'border-[#d9a171] text-[#d9a171]'
                      : 'border-white/25 text-white/65 hover:border-white/45 hover:text-white'
                  }`}
                  aria-label={favorites.includes(font.id) ? 'Remove from favorites' : 'Add to favorites'}
                >
                  {favorites.includes(font.id) ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
                </button>
              </div>
            </Link>
            ))
          )}

          {!loading && !error && visibleFonts.length < filteredFonts.length ? (
            <div ref={loadMoreRef} className="py-6 text-center text-xs uppercase tracking-[0.14em] text-white/45">
              Loading more fonts...
            </div>
          ) : null}

          {!loading && !error && filteredFonts.length === 0 ? (
            <div className="border-b border-white/10 py-6 text-sm text-white/65">No fonts match your search.</div>
          ) : null}
        </section>
      </section>
    </main>
  )
}
