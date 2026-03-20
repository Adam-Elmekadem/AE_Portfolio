import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { FONT_PRODUCTS } from '../data/resources'

export default function FontDetail() {
  const [donateOpen, setDonateOpen] = useState(false)
  const [pendingDownload, setPendingDownload] = useState('')
  const [previewText, setPreviewText] = useState('The quick brown fox jumps over the lazy dog')

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

        <header className="mt-8 mb-8 border-b border-white/10 pb-6">
          <h5 className="text-xs uppercase tracking-[0.22em] text-white/50">Free Font Detail</h5>
          <h1 className="bounded-font text-5xl uppercase tracking-tight">{font.title}</h1>
          <p className="mt-3 max-w-[720px] text-lg text-white/80">{font.description}</p>
        </header>

        <section className="mb-8 border-b border-white/10 pb-8">
          <p className="text-xs uppercase tracking-[0.16em] text-white/55">Live Preview</p>
          <div className="mt-3 grid gap-4 md:grid-cols-[1fr_280px] md:items-start">
            <div>
              <label htmlFor="font-preview-input" className="block text-sm text-white/75">
                Write your own text
              </label>
              <input
                id="font-preview-input"
                value={previewText}
                onChange={(event) => setPreviewText(event.target.value)}
                className="mt-2 w-full border-b border-white/30 bg-transparent px-0 py-2 text-sm text-white outline-none focus:border-white"
                placeholder="Type something..."
              />
              <p className="mt-5 text-5xl leading-tight" style={{ fontFamily: font.family }}>
                {previewText || font.sampleText}
              </p>
            </div>
            <div className="md:text-right">
              <button
                onClick={() => {
                  setPendingDownload(font.download.url)
                  setDonateOpen(true)
                }}
                className="rounded-full border border-blue-400 px-4 py-2 text-sm text-blue-200 transition hover:bg-blue-500/20"
              >
                Download {font.download.name}
              </button>
            </div>
          </div>
        </section>

        <section className="mb-8 border-b border-white/10 pb-8">
          <p className="text-xs uppercase tracking-[0.16em] text-white/55">Character Showcase</p>
          <p className="mt-3 text-3xl leading-relaxed" style={{ fontFamily: font.family }}>
            {font.charset}
          </p>
        </section>

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

        <section className="mt-8 border-b border-white/10 pb-8">
          <p className="text-xs uppercase tracking-[0.16em] text-white/55">Examples</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {font.images.map((image, index) => (
              <div key={`${font.id}-example-${index}`} className="h-[210px] overflow-hidden rounded-sm">
                <img src={image} alt={`${font.title} example ${index + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </section>

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
