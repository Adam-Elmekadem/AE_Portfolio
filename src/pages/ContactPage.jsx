import { useState } from 'react'
import PageHeader from '../components/PageHeader'

const FAQ_ITEMS = [
  {
    id: '01',
    question: 'How do I start a project with you?',
    answer:
      'Send a short brief through the form or email. We schedule a quick call to align on goals, timeline, and direction before production starts.',
  },
  {
    id: '02',
    question: 'What is the cost of your services?',
    answer:
      'Pricing depends on scope and complexity. I offer clear package options for branding, web development, and story writing work.',
  },
  {
    id: '03',
    question: 'How much time is needed to finish a project?',
    answer:
      'Most focused projects take 2 to 6 weeks. Full brand plus website systems can take longer depending on revisions and content readiness.',
  },
  {
    id: '04',
    question: 'What sets your work apart?',
    answer:
      'I connect design, code, and narrative in one process, so the visual identity, product experience, and written voice all feel consistent.',
  },
  {
    id: '05',
    question: 'Can we collaborate remotely?',
    answer:
      'Yes. I work remotely with clients globally using structured milestones, async updates, and regular check-ins.',
  },
]

const ContactPage = () => {
  const [openFaqId, setOpenFaqId] = useState(FAQ_ITEMS[0].id)

  return (
    <main className="min-h-screen w-full bg-[#05070c] text-white">
      <section className="flex min-h-screen w-full flex-col px-4 py-4 sm:px-7 sm:py-6 lg:px-10 lg:py-8">
        <PageHeader className="text-white" linkClassName="text-white/85" rightLabel="Say Hello" />

        <div className="mt-8 border-b border-white/20 pb-8 sm:mt-10 sm:pb-10">
          <h1 className="bounded-font text-[clamp(2.2rem,6.5vw,5.3rem)] uppercase leading-[0.93] tracking-[0.02em] text-white">
            Let's talk about your project
          </h1>
        </div>

        <section className="grid gap-10 border-b border-white/20 py-8 sm:py-10 lg:grid-cols-[0.95fr_1.25fr]">
          <div>
            <p className="topMeta text-[10px] uppercase tracking-[0.14em] text-white/60">Contact</p>
            <h2 className="bounded-font mt-3 text-[clamp(2rem,4.6vw,3.5rem)] uppercase leading-[0.95] text-white">
              Get in touch
            </h2>

            <div className="mt-8 space-y-4 text-sm text-white/80">
              <div className="border-b border-white/15 pb-3">
                <p className="topMeta text-[10px] uppercase tracking-[0.13em] text-white/55">Email</p>
                <p className="mt-2">adamelmekadem61@gmail.com</p>
              </div>

              <div className="border-b border-white/15 pb-3">
                <p className="topMeta text-[10px] uppercase tracking-[0.13em] text-white/55">Phone</p>
                <p className="mt-2">+212 618 981-078</p>
              </div>

              <div className="border-b border-white/15 pb-3">
                <p className="topMeta text-[10px] uppercase tracking-[0.13em] text-white/55">Location</p>
                <p className="mt-2">Salé (11000) Sidi Moussa, Morocco</p>
              </div>
            </div>
          </div>

          <form className="rounded-sm border border-white/12 bg-white/3 p-4 sm:p-6">
            <p className="topMeta text-[10px] uppercase tracking-[0.14em] text-white/60">Send Message</p>

            <label className="mt-4 block text-[11px] uppercase tracking-[0.11em] text-white/55">
              Name
              <input
                type="text"
                placeholder="Your Name"
                className="mt-2 w-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-white/35"
              />
            </label>

            <label className="mt-4 block text-[11px] uppercase tracking-[0.11em] text-white/55">
              Email
              <input
                type="email"
                placeholder="you@email.com"
                className="mt-2 w-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-white/35"
              />
            </label>

            <label className="mt-4 block text-[11px] uppercase tracking-[0.11em] text-white/55">
              Message
              <textarea
                rows={6}
                placeholder="Tell me about your project"
                className="mt-2 w-full resize-none border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-white/35"
              />
            </label>

            <button
              type="button"
              className="mt-4 w-full border border-white/18 bg-white/8 px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-white transition hover:border-white/35 hover:bg-white/14"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="grid gap-10 py-8 sm:py-10 lg:grid-cols-[0.95fr_1.25fr]">
          <div>
            <p className="topMeta text-[10px] uppercase tracking-[0.14em] text-white/60">FAQ</p>
            <h2 className="bounded-font mt-3 text-[clamp(2rem,4.8vw,3.7rem)] uppercase leading-[0.95] text-white">
              Quick answers
            </h2>
          </div>

          <div className="space-y-1">
            {FAQ_ITEMS.map((item) => {
              const isOpen = item.id === openFaqId

              return (
                <article key={item.id} className="border-b border-white/15 py-3">
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? '' : item.id)}
                    className="flex w-full items-start justify-between gap-4 text-left"
                  >
                    <p className="text-sm leading-relaxed text-white/88">{item.question}</p>
                    <span className="topMeta pt-1 text-[12px] text-white/65">{isOpen ? '\u2212' : '+'}</span>
                  </button>

                  {isOpen ? <p className="mt-3 text-sm leading-relaxed text-white/65">{item.answer}</p> : null}
                </article>
              )
            })}
          </div>
        </section>
      </section>
    </main>
  )
}

export default ContactPage
