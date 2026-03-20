import { Link } from 'react-router-dom'
import PageHeader from './PageHeader'
import styles from './CaseStudyExperience.module.css'

export default function CaseStudyExperience({
  projectType,
  title,
  tagline,
  mood,
  visualDirection,
  overview,
  concept,
  embeddedSections = [],
  embeddedHeading = 'Design Showcase',
  embeddedKicker = 'Visual System Breakdown',
  process,
  hideProcess = false,
  showcase,
  galleryImages = [],
  result,
  impact,
  cta,
}) {
  return (
    <main className={`${styles.page} min-h-screen text-[#f0f1f6]`}>
      <section className={`${styles.gridLine} px-4 pb-20 pt-5 sm:px-8 lg:px-12`}>
        <div className="mx-auto w-full max-w-330">
          <PageHeader className="text-white" linkClassName="text-white/85" rightLabel="All Work" />

          <header className="mt-10 border-b border-white/15 pb-10">
            <p className={`${styles.kicker} text-[10px] uppercase text-white/58`}>{projectType}</p>
            <h1 className={`${styles.heroWord} bounded-font mt-3 uppercase text-[#f3f4f7]`}>{title}</h1>
            <p className="mt-4 max-w-160 text-lg leading-relaxed text-white/84">{tagline}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <article className={`${styles.panel} rounded-sm p-4`}>
                <p className={`${styles.kicker} text-[10px] uppercase text-white/60`}>Visual Direction</p>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {visualDirection.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className={`${styles.accentDot} mt-1.5 h-1.5 w-1.5 rounded-full`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className={`${styles.panel} rounded-sm p-4`}>
                <p className={`${styles.kicker} text-[10px] uppercase text-white/60`}>Mood</p>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{mood}</p>
              </article>
            </div>
          </header>

          <section className="grid gap-4 border-b border-white/12 py-10 md:grid-cols-3">
            <h2 className="bounded-font text-[clamp(1.7rem,3.6vw,3.1rem)] uppercase">Project Overview</h2>
            <article className={`${styles.panel} rounded-sm p-4 md:col-span-2`}>
              <p className={`${styles.kicker} text-[10px] uppercase text-white/58`}>What</p>
              <p className="mt-2 text-sm leading-relaxed text-white/84">{overview.what}</p>
              <p className={`${styles.kicker} mt-4 text-[10px] uppercase text-white/58`}>Context</p>
              <p className="mt-2 text-sm leading-relaxed text-white/84">{overview.context}</p>
              <p className={`${styles.kicker} mt-4 text-[10px] uppercase text-white/58`}>Objective</p>
              <p className="mt-2 text-sm leading-relaxed text-white/84">{overview.objective}</p>
            </article>
          </section>

          <section className="grid gap-4 border-b border-white/12 py-10 md:grid-cols-3">
            <h2 className="bounded-font text-[clamp(1.7rem,3.6vw,3.1rem)] uppercase">Concept</h2>
            <article className={`${styles.panel} rounded-sm p-4 md:col-span-2`}>
              <p className={`${styles.kicker} text-[10px] uppercase text-white/58`}>Main Idea</p>
              <p className="mt-2 text-sm leading-relaxed text-white/84">{concept.mainIdea}</p>
              <p className={`${styles.kicker} mt-4 text-[10px] uppercase text-white/58`}>Creative Direction</p>
              <p className="mt-2 text-sm leading-relaxed text-white/84">{concept.creativeDirection}</p>
              <p className={`${styles.kicker} mt-4 text-[10px] uppercase text-white/58`}>Inspiration</p>
              <ul className="mt-2 space-y-1 text-sm text-white/84">
                {concept.inspiration.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </article>
          </section>

          {embeddedSections.length > 0 && (
            <section className="py-10">
              <div className="mb-6">
                <h2 className="bounded-font text-[clamp(1.7rem,3.6vw,3.1rem)] uppercase">{embeddedHeading}</h2>
                <p className={`${styles.kicker} text-[10px] uppercase text-white/60`}>{embeddedKicker}</p>
              </div>

              <div className="space-y-8">
                {embeddedSections.map((section) => (
                  <article key={section.title} className="rounded-sm p-4 bg-transparent border-0">
                    <h3 className="bounded-font text-xl uppercase text-white/90">{section.title}</h3>
                    {section.subtitle ? <p className="mt-1 text-sm text-white/70">{section.subtitle}</p> : null}

                    <p className="mt-3 text-sm text-white/80">{section.description}</p>

                    <div className="mt-5 space-y-6">
                      {section.blocks.map((block, blockIndex) => {
                        const layout = block.layout || ['left', 'right', 'bottom'][blockIndex % 3]
                        const imageGroup = block.image2 ? (
                          <div className="grid gap-3 sm:grid-cols-2">
                            <div className="relative overflow-hidden rounded-sm border-0 bg-transparent">
                              <img src={block.image1} alt={`${section.title} sample 1`} className="h-50 w-full object-cover" />
                            </div>
                            <div className="relative overflow-hidden rounded-sm border-0 bg-transparent">
                              <img src={block.image2} alt={`${section.title} sample 2`} className="h-50 w-full object-cover" />
                            </div>
                          </div>
                        ) : (
                          <div className="relative overflow-hidden rounded-sm border-0 bg-transparent">
                            <img src={block.image1} alt={`${section.title} sample`} className="h-72 w-full object-cover" />
                          </div>
                        )

                        const textBlock = (
                          <div className="rounded-sm p-4 text-sm text-white/80">
                            {block.text}
                          </div>
                        )

                        return (
                          <div key={`${section.title}-${blockIndex}`} className="grid gap-4 md:grid-cols-2 md:items-start">
                            {layout === 'left' ? (
                              <>
                                <div>{textBlock}</div>
                                <div>{imageGroup}</div>
                              </>
                            ) : layout === 'right' ? (
                              <>
                                <div>{imageGroup}</div>
                                <div>{textBlock}</div>
                              </>
                            ) : (
                              <>
                                {imageGroup}
                                {textBlock}
                              </>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {galleryImages.length > 0 ? (
            <section className="border-b border-white/12 py-10">
              <div className="mb-6 flex items-end justify-between gap-4">
                <h2 className="bounded-font text-[clamp(1.7rem,3.6vw,3.1rem)] uppercase">Visual Gallery</h2>
                <p className={`${styles.kicker} text-[10px] uppercase text-white/60`}>Rendered Creations</p>
              </div>

              <article className={`${styles.panel} rounded-sm p-4`}>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {galleryImages.map((src, idx) => (
                    <div
                      key={`${src}-${idx}`}
                      className="relative overflow-hidden rounded-sm border border-white/20 bg-black/40"
                    >
                      <img src={src} alt={`${title} sample ${idx + 1}`} className="h-50 w-full object-cover" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/20 to-transparent" />
                    </div>
                  ))}
                </div>
              </article>
            </section>
          ) : null}

          {!hideProcess && Array.isArray(process) && process.length > 0 ? (
          <section className="border-b border-white/12 py-10">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="bounded-font text-[clamp(1.7rem,3.6vw,3.1rem)] uppercase">Process</h2>
              <p className={`${styles.kicker} text-[10px] uppercase text-white/60`}>Core Breakdown</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {process.map((step, idx) => (
                <article key={step.label} className={`${styles.panel} rounded-sm p-4`}>
                  <p className={`${styles.stepIndex} bounded-font text-3xl`}>{String(idx + 1).padStart(2, '0')}</p>
                  <p className={`${styles.stepLabel} bounded-font mt-2 text-xl uppercase`}>{step.label}</p>
                  <p className={`${styles.muted} mt-2 text-sm leading-relaxed`}>{step.text}</p>
                </article>
              ))}
            </div>
          </section>
          ) : null}

          <section className="grid gap-4 border-b border-white/12 py-10 md:grid-cols-3">
            <h2 className="bounded-font text-[clamp(1.7rem,3.6vw,3.1rem)] uppercase">Showcase</h2>
            <article className={`${styles.panel} rounded-sm p-4 md:col-span-2`}>
              <p className={`${styles.kicker} text-[10px] uppercase text-white/58`}>Display</p>
              <ul className="mt-2 space-y-1 text-sm text-white/84">
                {showcase.display.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <p className={`${styles.kicker} mt-4 text-[10px] uppercase text-white/58`}>Interactions</p>
              <ul className="mt-2 space-y-1 text-sm text-white/84">
                {showcase.interactions.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </article>
          </section>

          <section className="grid gap-4 border-b border-white/12 py-10 md:grid-cols-3">
            <h2 className="bounded-font text-[clamp(1.7rem,3.6vw,3.1rem)] uppercase">Final Result</h2>
            <article className={`${styles.panel} rounded-sm p-4 md:col-span-2`}>
              <ul className="space-y-2 text-sm text-white/86">
                {result.achieved.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              {result.beforeAfter ? (
                <p className={`${styles.muted} mt-4 text-sm leading-relaxed`}>{result.beforeAfter}</p>
              ) : null}
            </article>
          </section>

          <section className="grid gap-4 border-b border-white/12 py-10 md:grid-cols-3">
            <h2 className="bounded-font text-[clamp(1.7rem,3.6vw,3.1rem)] uppercase">Impact</h2>
            <article className={`${styles.panel} rounded-sm p-4 md:col-span-2`}>
              <p className={`${styles.kicker} text-[10px] uppercase text-white/58`}>What I Learned</p>
              <ul className="mt-2 space-y-1 text-sm text-white/84">
                {impact.learned.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <p className={`${styles.kicker} mt-4 text-[10px] uppercase text-white/58`}>Challenges</p>
              <ul className="mt-2 space-y-1 text-sm text-white/84">
                {impact.challenges.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <p className={`${styles.kicker} mt-4 text-[10px] uppercase text-white/58`}>Improvements</p>
              <ul className="mt-2 space-y-1 text-sm text-white/84">
                {impact.improvements.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </article>
          </section>

          <footer className="flex flex-wrap items-center justify-between gap-3 py-10">
            <Link to={cta.nextPath} className="bounded-font rounded-full border border-white/30 px-5 py-2 text-sm uppercase tracking-[0.08em] transition hover:bg-white hover:text-[#0a0b0f]">
              {cta.nextLabel}
            </Link>
            <div className="flex items-center gap-3">
              <Link to={cta.explorePath} className="rounded-full border border-white/18 px-4 py-2 text-xs uppercase tracking-[0.12em] text-white/85 transition hover:border-white/35">Explore More</Link>
              <Link to={cta.contactPath} className="rounded-full bg-white px-4 py-2 text-xs uppercase tracking-[0.12em] text-black transition hover:bg-white/85">Contact</Link>
            </div>
          </footer>
        </div>
      </section>
    </main>
  )
}
