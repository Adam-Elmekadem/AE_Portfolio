import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './BlogsTimeline.module.css'

const BLOG_ITEMS = [
  {
    id: '01',
    title: 'Dr. King and Hundreds of Voting Rights Protestors Arrested',
    year: '1965',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
    month: 'February',
    day: '01',
  },
  {
    id: '02',
    title: 'Frederick Douglass Calls for Voting Rights',
    year: '1866',
    image:
      'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=900&q=80',
    month: 'February',
    day: '02',
  },
  {
    id: '03',
    title: 'Autherine Lucy Integrates the University of Alabama',
    year: '1956',
    image:
      'https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=900&q=80',
    month: 'February',
    day: '03',
  },
  {
    id: '04',
    title: 'Alabama Begins Statewide Convict Leasing',
    year: '1846',
    image:
      'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=900&q=80',
    month: 'February',
    day: '04',
  },
  {
    id: '05',
    title: 'A School Integration Victory Reaches Federal Court',
    year: '1963',
    image:
      'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=80',
    month: 'March',
    day: '05',
  },
  {
    id: '06',
    title: 'A New Coalition Forms for Equal Access',
    year: '1971',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
    month: 'March',
    day: '06',
  },
  {
    id: '07',
    title: 'Community Media Expands Legal Awareness',
    year: '1982',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
    month: 'April',
    day: '07',
  },
  {
    id: '08',
    title: 'Voter Registration Drive Scales Nationally',
    year: '1994',
    image:
      'https://images.unsplash.com/photo-1494173853739-c21f58b16055?auto=format&fit=crop&w=900&q=80',
    month: 'April',
    day: '08',
  },
]

const BlogsTimeline = () => {
  const [viewMode, setViewMode] = useState('month')
  const [selectedFilter, setSelectedFilter] = useState('February')
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const selectRef = useRef(null)

  const monthOptions = useMemo(() => [...new Set(BLOG_ITEMS.map((item) => item.month))], [])
  const dayOptions = useMemo(() => [...new Set(BLOG_ITEMS.map((item) => item.day))], [])
  const filterOptions = viewMode === 'month' ? monthOptions : dayOptions

  useEffect(() => {
    const fallbackOption = filterOptions[0]

    if (!filterOptions.includes(selectedFilter) && fallbackOption) {
      setSelectedFilter(fallbackOption)
    }
  }, [filterOptions, selectedFilter])

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsSelectOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  useEffect(() => {
    if (viewMode === 'month') {
      setSelectedFilter(monthOptions[0])
      return
    }

    setSelectedFilter(dayOptions[0])
  }, [dayOptions, monthOptions, viewMode])

  const filteredItems = useMemo(() => {
    if (viewMode === 'month') {
      return BLOG_ITEMS.filter((item) => item.month === selectedFilter)
    }

    return BLOG_ITEMS.filter((item) => item.day === selectedFilter)
  }, [selectedFilter, viewMode])

  return (
    <main className={`${styles.pageBackground} min-h-screen text-[#101216]`}>
      <div className={`${styles.topNotice} ${styles.monoText} px-4 py-1 text-center text-[9px] tracking-[0.06em]`}>
        Please update to the latest version of your browser for the best experience on the website.
      </div>

      <header className="border-b border-[#d7d8d4] px-4 py-3 sm:px-6 lg:px-10">
        <div className="mx-auto flex w-full max-w-325 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className={`${styles.brandMark} bounded-font text-base uppercase tracking-wider`}>AE*</span>
            <p className={`${styles.monoText} text-[10px] uppercase tracking-[0.12em] text-[#1a1f26] sm:text-[11px]`}>
              Best Source for Creative Insights
            </p>
          </div>

          <div className={`${styles.monoText} hidden items-center gap-3 text-[10px] uppercase tracking-[0.12em] text-[#232830] sm:flex`}>
            <button
              type="button"
              onClick={() => setViewMode('day')}
              className={`transition-opacity hover:opacity-65 ${viewMode === 'day' ? 'opacity-100' : 'opacity-55'}`}
            >
              Day
            </button>
            <button
              type="button"
              aria-label="Toggle day month filter"
              onClick={() => setViewMode((prev) => (prev === 'day' ? 'month' : 'day'))}
              className={`${styles.modeSwitch} relative inline-flex h-5 w-9 items-center rounded-full p-0.5`}
            >
              <span className={`${styles.switchThumb} h-4 w-4 rounded-full bg-white transition-transform ${viewMode === 'month' ? 'translate-x-4' : 'translate-x-0'}`} />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('month')}
              className={`transition-opacity hover:opacity-65 ${viewMode === 'month' ? 'opacity-100' : 'opacity-55'}`}
            >
              Month
            </button>
          </div>

          <nav className={`${styles.monoText} hidden items-center gap-4 text-[10px] uppercase tracking-[0.12em] text-[#232830] sm:flex sm:gap-6 sm:text-[11px]`}>
            <Link to="/about" className="transition-opacity hover:opacity-60">About</Link>
            <Link to="/contact" className="transition-opacity hover:opacity-60">Donate</Link>
            <Link to="/" className="transition-opacity hover:opacity-60">Back</Link>
          </nav>

          <div className="relative sm:hidden">
            <button
              type="button"
              onClick={() => setIsMobileNavOpen((prev) => !prev)}
              className={`${styles.monoText} rounded-sm border border-[#c9cbc7] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[#232830]`}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileNavOpen}
            >
              Menu
            </button>

            {isMobileNavOpen ? (
              <div className="absolute right-0 top-[calc(100%+0.4rem)] z-20 min-w-32.5 rounded-sm border border-[#c9cbc7] bg-[#f1f2ef] p-1 shadow-[0_8px_24px_rgba(20,22,26,0.14)]">
                <Link
                  to="/about"
                  onClick={() => setIsMobileNavOpen(false)}
                  className={`${styles.monoText} block rounded-sm px-2 py-1.5 text-[10px] uppercase tracking-[0.12em] text-[#232830] transition hover:bg-[#e2e4df]`}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileNavOpen(false)}
                  className={`${styles.monoText} block rounded-sm px-2 py-1.5 text-[10px] uppercase tracking-[0.12em] text-[#232830] transition hover:bg-[#e2e4df]`}
                >
                  Donate
                </Link>
                <Link
                  to="/"
                  onClick={() => setIsMobileNavOpen(false)}
                  className={`${styles.monoText} block rounded-sm px-2 py-1.5 text-[10px] uppercase tracking-[0.12em] text-[#232830] transition hover:bg-[#e2e4df]`}
                >
                  Back
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <section className="px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-325">
          <div className="mb-7 flex items-center justify-center gap-4">
            <div ref={selectRef} className="relative">
              <button
                type="button"
                onClick={() => setIsSelectOpen((prev) => !prev)}
                className="flex items-center gap-3"
                aria-haspopup="listbox"
                aria-expanded={isSelectOpen}
              >
                <h1 className="bounded-font text-4xl text-[#121721] sm:text-5xl">{selectedFilter}</h1>
                <span className={`${styles.monthChevron} text-xl text-[#48505a] transition-transform ${isSelectOpen ? 'rotate-180' : ''}`}>
                  ⌄
                </span>
              </button>

              {isSelectOpen ? (
                <div className={`${styles.selectMenu} absolute left-1/2 top-full z-20 mt-2 w-44 -translate-x-1/2 rounded-md border border-[#cfd1cc] bg-[#f5f6f3] p-1 shadow-[0_8px_24px_rgba(20,22,26,0.1)]`}>
                  {filterOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      role="option"
                      aria-selected={selectedFilter === option}
                      onClick={() => {
                        setSelectedFilter(option)
                        setIsSelectOpen(false)
                      }}
                      className={`${styles.monoText} w-full rounded-sm px-3 py-2 text-left text-[11px] uppercase tracking-[0.12em] transition ${selectedFilter === option ? 'bg-[#111318] text-[#f3f4f1]' : 'text-[#27303a] hover:bg-[#e7e8e4]'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className={`${styles.cardsGrid} grid gap-3`}>
            {filteredItems.map((item, index) => (
              <article
                key={item.id}
                className={`${styles.card} ${index === 0 ? styles.cardActive : ''} flex min-h-65 flex-col overflow-hidden transition hover:-translate-y-0.5`}
              >
                <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                  <span className={`${styles.cardNumber} bounded-font text-6xl leading-none`}>{item.id}</span>

                  <p className="mt-4 text-sm leading-snug">
                    {item.title}
                  </p>

                  <div className={`${styles.monoText} mt-auto text-[10px] uppercase tracking-widest`}>
                    <p>—</p>
                    <p className="mt-1">{item.year}</p>
                  </div>
                </div>

                <img src={item.image} alt={item.title} className={`${styles.cardImage} h-55 w-full object-cover`} loading="lazy" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default BlogsTimeline
