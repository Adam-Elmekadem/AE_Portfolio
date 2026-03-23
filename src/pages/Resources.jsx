import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import PageHeader from '../components/PageHeader'
import { APP_ROUTES } from '../config/routes'
import { RESOURCES } from '../data/resources'
import styles from './Resources.module.css'

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'design', label: 'Design' },
  { key: 'webdev', label: 'Web Dev' },
  { key: 'beatmaking', label: 'BeatMaking' },
]

const SUBFILTERS = {
  design: ['All', 'Fonts', 'Mockups', 'Courses', 'Logos', 'Brand identity guideline', 'Icons', 'Templates'],
  webdev: ['All', 'Courses', 'Best Channels', 'Practice Exercises'],
  beatmaking: ['All', 'Drums Kit'],
}

export default function Resources() {
  const navigate = useNavigate()
  const [category, setCategory] = useState('all')
  const [subFilter, setSubFilter] = useState('All')
  const [openResourceId, setOpenResourceId] = useState(RESOURCES[0]?.id || '')

  const activeSubFilters = category === 'all' ? ['All'] : SUBFILTERS[category]

  const filtered = RESOURCES.filter((resource) => {
    if (category !== 'all' && resource.category !== category) return false
    if (subFilter === 'All' || category === 'all') return true
    return resource.tags?.includes(subFilter)
  })

  return (
    <main className={`${styles.page} min-h-screen text-white`}>
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <PageHeader className="text-white" linkClassName="text-white/80" rightLabel="All Work" />

        <header className="mt-8 mb-8 border-b border-white/15 pb-8 sm:mt-10 sm:pb-10">
          <h1 className="bounded-font text-[clamp(3rem,9vw,7rem)] uppercase leading-[0.9] tracking-tight text-white">
            Resources
          </h1>
          <p className="mt-4 max-w-190 text-sm leading-relaxed text-white/75 sm:text-base">
            Curated free assets for design, web development, and beatmaking. Open any row to preview details,
            then jump into the full resource page.
          </p>
        </header>


        <div className="mb-6 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setCategory(cat.key)
                setSubFilter('All')
              }}
              className={`rounded-full border px-3 py-1 text-xs uppercase tracking-widest transition ${
                category === cat.key
                  ? 'border-white bg-white/15 text-white'
                  : 'border-white/20 bg-white/5 text-white/70 hover:border-white/35 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {category !== 'all' && (
          <div className="mb-8 flex flex-wrap gap-2">
            {activeSubFilters.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setSubFilter(item)
                  if (item === 'Fonts') {
                    navigate(APP_ROUTES.FONTS)
                  }
                }}
                className={`rounded-full border px-3 py-1 text-xs uppercase tracking-widest transition ${
                  subFilter === item
                    ? 'border-white bg-white/15 text-white'
                    : 'border-white/20 bg-white/5 text-white/70 hover:border-white/35 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}

        <div>
          {filtered.length === 0 ? (
            <div className="rounded-lg border border-white/15 bg-white/5 p-6 text-center text-white/80">
              No resources found for this filter.
            </div>
          ) : (
            filtered.map((resource) => (
              <article key={resource.id} className="border-b border-white/15 py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => setOpenResourceId((prev) => (prev === resource.id ? '' : resource.id))}
                  className="flex w-full items-start justify-between gap-4 text-left"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-blue-100/80">{resource.category} ・ {resource.price}</p>
                    <h2 className="mt-2 bounded-font text-[clamp(1.8rem,4.8vw,3.1rem)] uppercase leading-[0.95] text-white">
                      {resource.title}
                    </h2>
                    <p className="mt-2 text-sm text-white/75">{resource.subtitle}</p>
                  </div>
                  <span className="topMeta pt-1 text-[17px] leading-none text-white/65">
                    {openResourceId === resource.id ? '\u2212' : '+'}
                  </span>
                </button>

                {openResourceId === resource.id ? (
                  <div className="mt-4 grid gap-4 pb-1 md:grid-cols-[220px_1fr_auto] md:items-center">
                    <div className="w-full overflow-hidden rounded-md aspect-video md:aspect-4/3">
                      <img
                        src={resource.images[0]}
                        alt={`${resource.title} preview`}
                        className="h-full w-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>

                    <p className="text-sm leading-relaxed text-white/70">{resource.description}</p>

                    <div className="flex justify-end md:justify-self-end">
                      <Link
                        to={resource.deepLink}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm text-blue-200 transition hover:text-blue-100 md:border md:border-blue-400 md:rounded-full md:hover:bg-blue-500/20"
                      >
                        <span>View details</span>
                        <FaArrowRightLong size={14} />
                      </Link>
                    </div>
                  </div>
                ) : null}
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  )
}
