import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { WORK_PROJECTS } from '../data/workProjects'
import styles from './WorkGallery.module.css'

const MotionDiv = motion.div

const FILTER_ITEMS = [
  { id: '01', title: 'Graphic Design', group: 'graphic' },
  { id: '02', title: 'Brand Identity', group: 'graphic' },
  { id: '03', title: 'Poster Systems', group: 'graphic' },
  { id: '04', title: 'Web Development', group: 'web' },
  { id: '05', title: 'Frontend Architecture', group: 'web' },
  { id: '06', title: 'Motion Interfaces', group: 'web' },
  { id: '07', title: 'Writing', group: 'writing' },
  { id: '08', title: 'Editorial Stories', group: 'writing' },
  { id: '09', title: 'Case Studies', group: 'writing' },
]

const splitIntoColumns = (items, count) => {
  const buckets = Array.from({ length: count }, () => [])

  items.forEach((item, index) => {
    buckets[index % count].push(item)
  })

  return buckets
}

const Card = ({ item }) => {
  return (
    <Link to={`/work/${item.id}`} className="block">
      <article className="group border-b border-white/18 pb-5">
        <div className="relative overflow-hidden rounded-sm border border-white/12 bg-black/50">
          <img
            src={item.cover}
            alt={item.title}
            className="h-[180px] w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
            loading="lazy"
          />
          <div className={`${styles.imageOverlay} pointer-events-none absolute inset-0 hidden md:block`} />
        </div>

        <h3 className="bounded-font mt-4 text-[clamp(1.7rem,2.9vw,2.8rem)] leading-[0.95] tracking-[-0.01em] text-[#f0f1f4]">
          {item.title}
        </h3>

        <div className="mt-2 flex items-center gap-4 text-[11px] text-white/48">
          <span>♡ 18</span>
          <span>◔ {item.duration}</span>
        </div>
      </article>
    </Link>
  )
}

const WorkGallery = () => {
  const [activeGroup, setActiveGroup] = useState('all')

  const filteredProjects = useMemo(() => {
    if (activeGroup === 'all') {
      return WORK_PROJECTS
    }

    return WORK_PROJECTS.filter((project) => project.category === activeGroup)
  }, [activeGroup])

  const columns = useMemo(() => splitIntoColumns(filteredProjects, 3), [filteredProjects])

  const mobileBaseItems = useMemo(() => {
    const source = filteredProjects.length > 0 ? filteredProjects : WORK_PROJECTS
    const repeated = []

    while (repeated.length < 8) {
      repeated.push(...source)
    }

    return repeated.slice(0, Math.max(8, source.length * 2))
  }, [filteredProjects])

  const mobileLoopItems = useMemo(
    () => [...mobileBaseItems, ...mobileBaseItems],
    [mobileBaseItems],
  )

  return (
    <main className={`${styles.galleryBackground} min-h-screen text-white`}>
      <section className="mx-auto flex w-full max-w-[1500px] gap-6 px-4 py-5 pb-24 sm:px-6 lg:px-10 lg:pb-5">
        <aside className="sticky top-5 hidden h-[calc(100vh-2.5rem)] w-[270px] shrink-0 rounded-lg border border-white/10 bg-white/4 p-4 backdrop-blur-md lg:flex lg:flex-col">
          <div className="mb-4 border-b border-white/10 pb-3">
            <p className="bounded-font text-sm uppercase tracking-[0.18em] text-white/75">Work Index</p>
            <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/45">9 Category Items</p>
          </div>

          <div className="flex flex-1 flex-col gap-2 overflow-auto pr-1">
            <button
              type="button"
              onClick={() => setActiveGroup('all')}
              className={`flex items-center justify-between rounded-md border px-3 py-2 text-left text-[11px] uppercase tracking-[0.12em] transition ${
                activeGroup === 'all'
                  ? 'border-white/45 bg-white/12 text-white'
                  : 'border-white/12 bg-black/25 text-white/70 hover:border-white/30 hover:text-white'
              }`}
            >
              <span>00 All Projects</span>
              <span>•</span>
            </button>

            {FILTER_ITEMS.map((item) => {
              const isActive = activeGroup === item.group

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveGroup(item.group)}
                  className={`flex items-center justify-between rounded-md border px-3 py-2 text-left text-[11px] uppercase tracking-[0.12em] transition ${
                    isActive
                      ? 'border-white/45 bg-white/12 text-white'
                      : 'border-white/12 bg-black/25 text-white/70 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <span>{item.id}</span>
                  <span className="ml-2 flex-1 text-left">{item.title}</span>
                </button>
              )
            })}
          </div>

          <Link
            to="/"
            className="mt-4 rounded-md border border-white/25 px-3 py-2 text-center text-[11px] uppercase tracking-[0.12em] text-white/80 transition hover:border-white/45 hover:text-white"
          >
            Back to Summary
          </Link>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <PageHeader
            className="text-white/85"
            linkClassName="text-white/75"
            rightLabel="Back to Summary"
          />

          <header className="flex items-end justify-between border-b border-white/12 pb-3">
            <div>
              <h1 className="bounded-font text-2xl uppercase tracking-[0.06em] sm:text-5xl">Work Projects</h1>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/48 sm:text-[11px]">Auto Scrolling Gallery</p>
            </div>
          </header>

          <div className="relative h-[calc(100vh-14.5rem)] overflow-hidden border border-white/8 bg-white/[0.02] p-3 md:hidden">
            <MotionDiv
              animate={{ y: ['0%', '-50%'] }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
              className="flex flex-col gap-5"
            >
              {mobileLoopItems.map((item, itemIndex) => (
                <Card key={`${item.id}-mobile-${itemIndex}`} item={item} />
              ))}
            </MotionDiv>
          </div>

          <div className="hidden h-[calc(100vh-9.5rem)] grid-cols-2 gap-4 overflow-hidden md:grid xl:grid-cols-3">
            {columns.map((column, columnIndex) => {
              const loopItems = [...column, ...column]
              const duration = 20 + columnIndex * 4

              return (
                <div key={`column-${columnIndex}`} className="relative overflow-hidden border border-white/8 bg-white/[0.02] p-3">
                  <MotionDiv
                    animate={{ y: ['0%', '-50%'] }}
                    transition={{ duration, repeat: Infinity, ease: 'linear' }}
                    className="flex flex-col gap-5"
                  >
                    {loopItems.map((item, itemIndex) => (
                      <Card key={`${item.id}-${itemIndex}`} item={item} />
                    ))}
                  </MotionDiv>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/12 bg-[#0a0b0f]/92 px-3 py-3 backdrop-blur-md lg:hidden">
        <div className="flex gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => setActiveGroup('all')}
            className={`shrink-0 rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.12em] transition ${
              activeGroup === 'all'
                ? 'border-white/50 bg-white/14 text-white'
                : 'border-white/20 bg-white/6 text-white/75'
            }`}
          >
            All
          </button>
          {FILTER_ITEMS.map((item) => {
            const isActive = activeGroup === item.group

            return (
              <button
                key={`mobile-filter-${item.id}`}
                type="button"
                onClick={() => setActiveGroup(item.group)}
                className={`shrink-0 rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.12em] transition ${
                  isActive
                    ? 'border-white/50 bg-white/14 text-white'
                    : 'border-white/20 bg-white/6 text-white/75'
                }`}
              >
                {item.title}
              </button>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default WorkGallery
