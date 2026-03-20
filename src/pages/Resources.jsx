import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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

  const activeSubFilters = category === 'all' ? ['All'] : SUBFILTERS[category]

  const filtered = RESOURCES.filter((resource) => {
    if (category !== 'all' && resource.category !== category) return false
    if (subFilter === 'All' || category === 'all') return true
    return resource.tags?.includes(subFilter)
  })

  return (
    <main className={`${styles.page} min-h-screen text-white`}>
      <section className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
        <PageHeader className="text-white" linkClassName="text-white/80" rightLabel="All Work" />

        <header className="mb-8">
          <h1 className="bounded-font text-5xl uppercase tracking-tight">Resources</h1>
          <p className="mt-3 max-w-[720px] text-base text-white/80">
            Download free resources made by me. Each resource includes title, description, tools, examples, and deep details.
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
              className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.1em] transition ${
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
                className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.1em] transition ${
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

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.length === 0 ? (
            <div className="col-span-full rounded-lg border border-white/15 bg-white/5 p-6 text-center text-white/80">
              No resources found for this filter.
            </div>
          ) : (
            filtered.map((resource) => (
              <article key={resource.id} className="rounded-lg border border-white/15 bg-white/5 p-5 backdrop-blur-md transition hover:border-white/30">
                <div className="mb-3 h-40 overflow-hidden rounded-md">
                  <img src={resource.images[0]} alt={`${resource.title} preview`} className="h-full w-full object-cover" />
                </div>
                <p className="text-xs uppercase tracking-wider text-blue-100">{resource.category} ・ {resource.price}</p>
                <h2 className="mt-2 text-2xl font-bold text-white">{resource.title}</h2>
                <p className="mt-2 text-sm text-white/80">{resource.subtitle}</p>
                <p className="mt-3 text-sm text-white/70 truncate line-clamp-3">{resource.description}</p>
                <Link
                  to={resource.deepLink}
                  className="mt-4 inline-block rounded-full border border-blue-400 px-4 py-2 text-sm text-blue-200 transition hover:bg-blue-500/20"
                >
                  View details
                </Link>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  )
}
