import PageHeader from '../components/PageHeader'
import styles from './StudioHome.module.css'

const EXPERIENCE_ITEMS = [
  {
    period: '2024 - Present',
    role: 'Graphic Designer & Web Developer',
    details: 'Designing brand systems and building responsive websites with React, Tailwind, and motion-led interactions.',
  },
  {
    period: '2022 - 2024',
    role: 'Story Writer & UI/UX Designer',
    details: 'Wrote brand stories and case-study narratives while designing product interfaces and scalable visual systems.',
  },
]

const EDUCATION_ITEMS = [
  {
    period: '2020 - 2023',
    role: 'Computer Science & Interaction Design',
    details: 'Studied software engineering, web architecture, and user-centered interaction methods.',
  },
  {
    period: 'Certifications',
    role: 'Brand Design, Frontend, and Writing',
    details: 'Completed advanced tracks in React, visual storytelling, editorial writing, and accessible UI systems.',
  },
]

const TECH_TAGS = [
  'Brand Identity',
  'React',
  'Tailwind',
  'JavaScript',
  'Framer Motion',
  'Redux Toolkit',
  'Canva',
  'Adobe Creative Suite',
  'Node.js',
  'SEO Principles',
  'REST APIs',
  'Responsive UI',
  'Git',
  'Design Systems',
  'Creative Writing',
  'React Router',
]

const SOFT_SKILLS = [
  'Narrative Thinking',
  'Communication',
  'Team Collaboration',
  'Creative Problem Solving',
  'Time Management',
  'Adaptability',
]

const LANGUAGES = [
  'Arabic - Native',
  'French - Fluent',
  'English - Professional',
]

const CvSection = ({ title, items }) => {
  return (
    <article className="border border-[#b4b9c2] bg-[#e2e4e9] p-5 sm:p-6">
      <h2 className="bounded-font text-2xl uppercase tracking-[0.06em] text-[#181b21] sm:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div key={`${item.period}-${item.role}`} className="border-t border-[#c1c6ce] pt-3 first:border-t-0 first:pt-0">
            <p className="text-[10px] uppercase tracking-[0.14em] text-[#5b616b]">{item.period}</p>
            <p className="bounded-font mt-1 text-sm uppercase tracking-[0.08em] text-[#15191f] sm:text-base">{item.role}</p>
            <p className="mt-1 text-[12px] leading-relaxed text-[#3a4049] sm:text-[13px]">{item.details}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

const StudioHome = () => {
  return (
    <main className="min-h-screen bg-[#ececee] px-4 py-5 text-[#17181d] sm:px-7 lg:px-10">
      <section className="mx-auto flex w-full max-w-295 flex-col gap-4">
        <PageHeader
          className="text-[#2b2c30]"
          linkClassName="text-[#2b2c30]"
          rightLabel="Start a project"
        />

        <div className="mx-auto mt-2 max-w-180 text-center">
          <h1 className="bounded-font text-[clamp(2.2rem,6vw,4.2rem)] uppercase tracking-[0.05em] text-[#17181d]">
            HI, MY NAME IS ADAM ELMEKADEM
          </h1>
          <p className="mx-auto mt-3 max-w-165 text-[12px] leading-relaxed text-[#3a3b40] sm:text-[13px]">
            I am a graphic designer, web developer, and stories writer creating visual identities, interactive websites, and narrative-driven digital experiences that connect with people.
          </p>
        </div>

        <div className="mt-2 flex flex-col gap-2 border-y border-[#b9bbc2] py-2 text-[8px] uppercase tracking-[0.12em] text-[#5c5f67] sm:flex-row sm:items-center sm:gap-0 sm:text-[9px]">
          <p>Editorial Canvas</p>
          <p>Brand design, frontend builds, written narratives</p>
          <p>Creative projects for founders and studios</p>
        </div>

        <article className="relative overflow-hidden border border-[#a8acb7] bg-[#d8dae0]">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1800&q=80"
            alt="Portrait with flowers for featured project"
            className="h-[52vh] min-h-80 w-full object-cover"
          />

          <div className="pointer-events-none absolute inset-0 border border-white/35" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(0,0,0,0.08))]" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-white/45 bg-white/8 px-3 py-1 text-[9px] uppercase tracking-[0.12em] text-[#eceef3] sm:text-[10px]">
            <p>New York 10:31 AM</p>
            <p>2026</p>
          </div>
        </article>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <CvSection title="Experiences" items={EXPERIENCE_ITEMS} />
          <CvSection title="Education" items={EDUCATION_ITEMS} />
        </div>

        <article className={`${styles.techPanel} overflow-hidden border border-[#1a1d24] p-5 sm:p-6`}>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="bounded-font text-3xl uppercase tracking-[0.06em] text-white sm:text-4xl">Techs</h2>
              <p className={`${styles.techLead} mt-2 max-w-105 text-[12px] leading-relaxed sm:text-[13px]`}>
                A hybrid toolkit for design, development, and storytelling, from frontend architecture to visual direction and editorial craft.
              </p>
            </div>
            <p className="text-[10px] uppercase tracking-[0.14em] text-white/58">Primary Toolkit</p>
          </div>

          <div className={`${styles.techGrid} mt-6 flex flex-wrap gap-3`}>
            {TECH_TAGS.map((tag, index) => (
              <span
                key={tag}
                className={`${styles.techTag} ${index % 5 === 1 || index % 7 === 3 ? styles.techTagFilled : ''} rounded-full px-4 py-2 text-sm sm:text-[28px]`}
              >
                {tag}
              </span>
            ))}
          </div>
        </article>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <article className="border border-[#b4b9c2] bg-[#e2e4e9] p-5 sm:p-6">
            <h2 className="bounded-font text-2xl uppercase tracking-[0.06em] text-[#181b21] sm:text-3xl">Soft Skills</h2>
            <ul className="mt-4 space-y-2">
              {SOFT_SKILLS.map((skill) => (
                <li key={skill} className="border-t border-[#c1c6ce] pt-2 text-[12px] uppercase tracking-[0.12em] text-[#3a4049] first:border-t-0 first:pt-0 sm:text-[13px]">
                  {skill}
                </li>
              ))}
            </ul>
          </article>

          <article className="border border-[#b4b9c2] bg-[#e2e4e9] p-5 sm:p-6">
            <h2 className="bounded-font text-2xl uppercase tracking-[0.06em] text-[#181b21] sm:text-3xl">Languages</h2>
            <ul className="mt-4 space-y-2">
              {LANGUAGES.map((language) => (
                <li key={language} className="border-t border-[#c1c6ce] pt-2 text-[12px] uppercase tracking-[0.12em] text-[#3a4049] first:border-t-0 first:pt-0 sm:text-[13px]">
                  {language}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  )
}

export default StudioHome
