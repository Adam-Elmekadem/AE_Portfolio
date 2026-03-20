import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { FONT_PRODUCTS } from '../data/resources'

export default function FontDetail() {
  const [donateOpen, setDonateOpen] = useState(false)
  const [pendingDownload, setPendingDownload] = useState('')

  const { fontId } = useParams()
  const font = FONT_PRODUCTS.find((item) => item.id === fontId)

  if (!font) {
    return (
      <main className="min-h-screen bg-[#0b0d14] text-white">
        <section className="mx-auto w-full max-w-[980px] px-4 py-20 text-center">
          <h1 className="text-3xl font-bold">Font not found</h1>
          <p className="mt-3 text-white/70">That font product does not exist.</p>
          <Link
            to="/resources"
            className="mt-5 inline-block rounded-full border border-white/30 px-4 py-2 text-sm text-white transition hover:bg-white/10"
          >
            Back to resources
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0b0d14] text-white">
      <section className="mx-auto w-full max-w-[980px] px-4 py-10 sm:px-6 lg:px-8">
        <PageHeader className="text-white" linkClassName="text-white/70" rightLabel="All Work" />

        <header className="mb-8 border-b border-white/10 pb-6">
          <h5 className="text-xs uppercase tracking-[0.22em] text-white/50">Google-style font catalog</h5>
          <h1 className="bounded-font text-5xl uppercase tracking-tight">{font.heading}</h1>
          <p className="mt-3 max-w-[720px] text-lg text-white/80">{font.description}</p>
        </header>

        <div className="mb-8 rounded-lg border border-white/10 bg-white/5 p-4">
          <h2 className="text-xl font-semibold">{font.title}</h2>
          <p className="text-sm text-white/70">Free by direct download (select per sample row)</p>
        </div>

        {donateOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
              <div className="w-full max-w-md rounded-lg border border-white/20 bg-[#070a10] p-6 shadow-xl">
                <h3 className="text-xl font-bold">Like this font?</h3>
                <p className="mt-2 text-sm text-white/70">
                  Support the project by donating. It’s optional but appreciated. Continue to download after donation.
                </p>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => {
                      window.open('https://www.paypal.com/donate', '_blank')
                    }}
                    className="rounded-full border border-blue-400 px-4 py-2 text-sm text-blue-200 transition hover:bg-blue-500/20"
                  >
                    Donate
                  </button>
                  <button
                    onClick={() => {
                      setDonateOpen(false)
                      if (pendingDownload) {
                        window.open(pendingDownload, '_blank')
                        setPendingDownload('')
                      }
                    }}
                    className="rounded-full bg-blue-500 px-4 py-2 text-sm text-white transition hover:bg-blue-600"
                  >
                    Continue Download
                  </button>
                  <button
                    onClick={() => setDonateOpen(false)}
                    className="rounded-full border border-white/30 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

        <div className="mt-8 space-y-6">
          {font.preview.map((item, idx) => {
            const file = font.files[idx] ?? font.files[0]
            return (
              <article key={idx} className="grid gap-3 md:grid-cols-[90px_1fr_auto] md:items-center">
                <div className="text-4xl font-bold text-[#d99c68]">0{idx + 1}</div>
                <div className="border-b border-white/10 pb-3">
                  <h3 className="text-3xl uppercase tracking-widest">{item.family.split(',')[0]}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/70">{font.title}</p>
                  <p className="mt-3 text-2xl" style={{ fontFamily: item.family }}>
                    {item.sample}
                  </p>
                </div>
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => {
                      setPendingDownload(file.url)
                      setDonateOpen(true)
                    }}
                    className="rounded-full border border-blue-400 px-4 py-2 text-sm text-blue-200 transition hover:bg-blue-500/20"
                  >
                    Download
                  </button>
                </div>
              </article>
            )
          })}
          </div>

        <div className="mt-8">
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
