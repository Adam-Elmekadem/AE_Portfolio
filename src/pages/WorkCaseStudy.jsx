import { Link, Navigate, useParams } from 'react-router-dom'
import { findWorkProjectById } from '../data/workProjects'
import styles from './WorkCaseStudy.module.css'

const SECTIONS = [
  { key: 'problem', label: 'Problem', index: '01' },
  { key: 'thinking', label: 'Thinking', index: '02' },
  { key: 'process', label: 'Process', index: '03' },
  { key: 'result', label: 'Result', index: '04' },
]

const WorkCaseStudy = () => {
  const { projectId } = useParams()
  const project = findWorkProjectById(projectId)

  if (!project) {
    return <Navigate to="/work" replace />
  }

  return (
    <main className="h-screen w-full overflow-hidden bg-[#d8dde3] text-[#171a20]">
      <section className="grid h-full w-full grid-cols-1 overflow-hidden border border-[#c2c8cf] bg-[#edf0f3] md:grid-cols-8">
        <div className="relative border-b border-[#c6ccd3] px-5 py-6 md:col-span-4 md:min-h-[620px] md:border-b-0 md:border-r">
          <div className="absolute left-3 top-3 h-6 w-6 rounded-full border border-[#8e97a1]" />

          <div className="mt-12 max-w-[320px] sm:mt-16 sm:max-w-[360px]">
            <p className="text-[10px] uppercase tracking-[0.14em] text-[#68717a]">Case Study</p>
            <h1 className="bounded-font mt-2 text-[clamp(2.2rem,6vw,4.3rem)] leading-[0.9] text-[#161a20]">
              Work.
            </h1>
            <p className="mt-4 text-[12px] leading-relaxed text-[#48505a]">{project.subtitle}</p>
          </div>

          <div className="absolute bottom-5 left-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.12em] text-[#5a616b]">
            <span>{project.category}</span>
            <span className="h-px w-16 bg-[#8d949d]" />
            <span>{project.duration}</span>
          </div>

          <Link
            to="/work"
            className="absolute right-5 top-5 text-[10px] uppercase tracking-[0.14em] text-[#353a42] transition hover:opacity-60"
          >
            Back to Work
          </Link>
        </div>

        <div className="grid grid-cols-1 md:col-span-4 md:grid-cols-2">
          {SECTIONS.map((section, index) => {
            const imageSrc = project.images[index] ?? project.cover

            return (
              <article key={section.key} className="relative border-b border-l border-[#c6ccd3] bg-[#e8ebef] p-3 last:border-b-0 md:h-[310px]">
                <div className="absolute right-2 top-2 z-10 bounded-font text-4xl text-[#b4bbc3]">{section.index}</div>

                <div className="mb-2 pr-14 text-[10px] uppercase tracking-[0.12em] text-[#616a75]">{section.label}</div>

                <div className="relative mt-3 h-[138px] overflow-hidden border border-[#ccd1d7] bg-[#d8dce2] sm:h-[160px]">
                  <img src={imageSrc} alt={`${project.title} ${section.label}`} className="h-full w-full object-cover" />
                  <div className={`${styles.imageOverlay} pointer-events-none absolute inset-0`} />
                </div>

                <p className="mt-2 text-[11px] leading-relaxed text-[#414952]">
                  {project[section.key]}
                </p>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default WorkCaseStudy
