import PageHeader from '../components/PageHeader'
import styles from './AboutStory.module.css'

const AboutStory = () => {
  return (
    <main className={`min-h-screen text-[#e9e9f2] ${styles.hero}`}>
      <section className="mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-7xl flex-col px-4 py-6 sm:px-8 lg:px-10">
        <PageHeader className="text-white" linkClassName="text-white" />

        <div className="mt-auto grid gap-10 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h1 className="bounded-font text-[clamp(3.2rem,9vw,7.4rem)] leading-[0.92] text-white">
              Design. Develop. Write stories that stay.
            </h1>
            <p className={`mt-6 max-w-130 text-sm leading-relaxed text-white/75 ${styles.topMeta}`}>
              I am a graphic designer, web developer, and stories writer crafting visual identities, digital products, and editorial narratives with one consistent voice.
            </p>
          </div>

          <div className="rounded-md border border-white/10 bg-white/5 p-8 sm:max-w-130">
            <p className={`${styles.topMeta} text-[9px] uppercase tracking-[0.14em] text-white/60`}>YOU GET</p>
            <h2 className="bounded-font mt-4 text-2xl font-semibold text-white">One creative partner across three disciplines</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Instead of splitting branding, product, and writing between different teams, I connect all three. The result is a portfolio, website, or campaign that looks coherent and reads with intention.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-sm border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.12em] text-white transition hover:border-white/25 hover:bg-white/10">
              Start a creative project
            </button>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 pb-16 pt-14 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="bounded-font mb-10 text-[clamp(2.6rem,6vw,5.5rem)] uppercase tracking-[0.08em] text-white">Services</h2>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-md border border-white/10 bg-white/5 p-8">
              <p className={`${styles.topMeta} text-[9px] uppercase tracking-[0.14em] text-white/60`}>01</p>
              <h3 className="bounded-font mt-4 text-2xl font-semibold text-white">Graphic Design & Brand Identity</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Logos, visual systems, posters, social assets, and art direction designed to build a recognizable brand presence.
              </p>
              <p className="mt-6 text-sm font-semibold text-white/80">Read more →</p>
            </div>

            <div className="rounded-md border border-white/10 bg-white/5 p-8">
              <p className={`${styles.topMeta} text-[9px] uppercase tracking-[0.14em] text-white/60`}>02</p>
              <h3 className="bounded-font mt-4 text-2xl font-semibold text-white">Web Development & Story Content</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Fast, responsive websites paired with clear narrative writing so users understand your value from the first scroll.
              </p>
              <p className="mt-6 text-sm font-semibold text-white/80">Read more →</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 pb-20 pt-14 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-md border border-white/10 bg-white/5 p-8">
              <p className={`${styles.topMeta} text-[9px] uppercase tracking-[0.14em] text-white/60`}>01</p>
              <h3 className="bounded-font mt-4 text-2xl font-semibold text-white">Creative workflow built for clarity</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Every project follows a clear path: concept, visual exploration, interface build, and story refinement.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li>Strong graphic direction with typographic precision.</li>
                <li>Modern frontend architecture with clean code.</li>
                <li>Story-first writing for brand voice and case studies.</li>
              </ul>
            </div>

            <div className="rounded-md border border-white/10 bg-white/5 p-8">
              <p className={`${styles.topMeta} text-[9px] uppercase tracking-[0.14em] text-white/60`}>02</p>
              <h3 className="bounded-font mt-4 text-2xl font-semibold text-white">Based in Cyprus, building for global teams</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                I collaborate with founders, agencies, and creators across regions while keeping communication direct and timelines realistic.
              </p>
              <div className="mt-6 space-y-2 text-sm text-white/70">
                <p>Available for short projects and long-term collaborations.</p>
                <p>Focused on quality, consistency, and meaningful outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 pb-16 pt-14 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="bounded-font text-4xl uppercase tracking-[0.08em] text-white">Say hello</h3>
              <p className="mt-6 max-w-105 text-sm leading-relaxed text-white/70">
                If you need design, development, or written storytelling for your digital presence, let us build it together.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm text-white/75">
              <p>facebook.com/yourprofile</p>
              <p>telegram.me/yourprofile</p>
              <p>linkedin.com/in/yourprofile</p>
              <p>hello@yourdomain.com</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default AboutStory
