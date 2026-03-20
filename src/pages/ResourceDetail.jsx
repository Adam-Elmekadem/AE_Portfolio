import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { RESOURCES } from '../data/resources'

export default function ResourceDetail() {
  const { resourceId } = useParams()
  const resource = RESOURCES.find((r) => r.id === resourceId)

  if (!resource) {
    return (
      <main className="min-h-screen bg-[#070a10] text-white">
        <section className="mx-auto w-full max-w-[980px] px-4 py-20 text-center">
          <h1 className="text-3xl font-bold">Resource not found</h1>
          <p className="mt-3 text-white/70">The resource you are looking for doesn’t exist or has been removed.</p>
          <Link to="/resources" className="mt-5 inline-block rounded-full border border-white/30 px-4 py-2 text-sm text-white transition hover:bg-white/10">
            Back to resources
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#070a10] text-white">
      <section className="mx-auto w-full max-w-[980px] px-4 py-10 sm:px-6 lg:px-8">
        <PageHeader className="text-white" linkClassName="text-white/70" rightLabel="All Work" />

        <div className="mt-8 space-y-6">
          <div className="text-sm text-blue-200">
            {resource.category} • {resource.price}
          </div>

          <h1 className="bounded-font text-5xl font-bold">{resource.title}</h1>
          <p className="text-lg text-white/80">{resource.subtitle}</p>

          <p className="text-sm text-white/80">{resource.description}</p>

          <div className="grid gap-4 md:grid-cols-2">
            {resource.images.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg border border-white/15 bg-white/5" style={{ aspectRatio: '16 / 9', minHeight: '180px' }}>
                <img src={src} alt={`${resource.title} screenshot ${index + 1}`} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-white/15 bg-white/5 p-4">
              <h2 className="text-base font-semibold">Examples of use</h2>
              <ul className="mt-2 space-y-1 text-sm text-white/80">
                {resource.examples.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-white/15 bg-white/5 p-4">
              <h2 className="text-base font-semibold">Tools & libraries</h2>
              <p className="mt-2 text-sm text-white/80">Tools: {resource.tools.join(', ')}</p>
              <p className="mt-1 text-sm text-white/80">Libraries: {resource.library.join(', ')}</p>
            </div>
          </div>

          {resource.fontCombinations && resource.fontCombinations.length > 0 && (
            <section className="rounded-lg border border-white/15 bg-white/5 p-4">
              <h2 className="text-base font-semibold">Font combinations</h2>
              <div className="mt-4 space-y-4">
                {resource.fontCombinations.map((combo) => (
                  <article key={combo.label} className="rounded-md border border-white/10 bg-[#010812] p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/60">{combo.label}</p>
                    <h3 className="mt-1 text-xl font-bold text-white">{combo.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{combo.details}</p>
                    <p className="mt-2 text-2xl font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {combo.demo}
                    </p>
                    <p className="mt-1 text-sm text-white/50">Demo text in font family combination</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          <Link
            to="/resources"
            className="inline-block rounded-full border border-blue-300 px-4 py-2 text-sm text-blue-200 transition hover:bg-blue-500/20"
          >
            Back to resources
          </Link>
        </div>
      </section>
    </main>
  )
}
