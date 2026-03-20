import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { RESOURCES } from '../data/resources'
import styles from './Resources.module.css'

export default function Resources() {
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

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {RESOURCES.map((resource) => (
            <article key={resource.id} className="rounded-lg border border-white/15 bg-white/5 p-5 backdrop-blur-md transition hover:border-white/30">
              <div className="mb-3 h-40 overflow-hidden rounded-md">
                <img src={resource.images[0]} alt={`${resource.title} preview`} className="h-full w-full object-cover" />
              </div>
              <p className="text-xs uppercase tracking-wider text-blue-100">{resource.category} ・ {resource.price}</p>
              <h2 className="mt-2 text-2xl font-bold text-white">{resource.title}</h2>
              <p className="mt-2 text-sm text-white/80">{resource.subtitle}</p>
              <p className="mt-3 text-sm text-white/70">{resource.description}</p>
              <Link
                to={resource.deepLink}
                className="mt-4 inline-block rounded-full border border-blue-400 px-4 py-2 text-sm text-blue-200 transition hover:bg-blue-500/20"
              >
                View details
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
