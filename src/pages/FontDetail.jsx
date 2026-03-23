import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { downloadAllFonts, downloadSingleVariant, fetchGoogleFonts } from '../services/googleFonts'

export default function FontDetail() {
  const [donateOpen, setDonateOpen] = useState(false)
  const [pendingDownload, setPendingDownload] = useState('')
  const [previewText, setPreviewText] = useState('The quick brown fox jumps over the lazy dog')
  const [fonts, setFonts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [allDownloadRequested, setAllDownloadRequested] = useState(false)

  const { fontId } = useParams()
  const font = useMemo(() => fonts.find((item) => item.id === fontId), [fonts, fontId])
  const defaultVariant = useMemo(() => {
    if (!font) return ''
    if (font.files?.regular) return 'regular'
    return Object.keys(font.files || {})[0] || ''
  }, [font])
  const previewFontFamily = useMemo(() => (font ? `Preview-${font.id}` : ''), [font])
  const previewFontFace = useMemo(() => {
    if (!font || !defaultVariant) return ''
    const src = font.files?.[defaultVariant]
    if (!src) return ''
    return `@font-face { font-family: '${previewFontFamily}'; src: url('${src}') format('woff2'); font-display: swap; }`
  }, [defaultVariant, font, previewFontFamily])

  useEffect(() => {
    let active = true
    if (!active) return

    const loadFonts = async () => {
      try {
        const data = await fetchGoogleFonts()
        if (active) {
          setFonts(data)
        }
      } catch (loadError) {
        if (active) {
          setError(loadError.message || 'Failed to load font')
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadFonts()
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    if (donateOpen || !allDownloadRequested || !font) return

    downloadAllFonts(font).finally(() => {
      setAllDownloadRequested(false)
      setPendingDownload('')
    })
  }, [allDownloadRequested, donateOpen, font])

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0b0d14] text-white">
        <section className="mx-auto w-full max-w-245 px-4 py-10 sm:px-6 lg:px-8">
          <div className="h-6 w-48 animate-pulse rounded bg-white/10" />
          <div className="mt-8 h-16 w-2/3 animate-pulse rounded bg-white/10" />
          <div className="mt-4 h-6 w-full animate-pulse rounded bg-white/10" />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="h-44 animate-pulse rounded bg-white/10" />
            <div className="h-44 animate-pulse rounded bg-white/10" />
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            <div className="h-48 animate-pulse rounded bg-white/10" />
            <div className="h-48 animate-pulse rounded bg-white/10" />
          </div>
        </section>
      </main>
    )
  }

  if (!font) {
    return (
      <main className="min-h-screen bg-[#0b0d14] text-white">
        <section className="mx-auto w-full max-w-245 px-4 py-20 text-center">
          <h1 className="text-3xl font-bold">Font not found</h1>
          <p className="mt-3 text-white/70">
            {error || 'That font product does not exist.'}
          </p>
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
      <section className="mx-auto w-full max-w-245 px-4 py-10 sm:px-6 lg:px-8">
        {previewFontFace ? <style>{previewFontFace}</style> : null}
        <PageHeader className="text-white" linkClassName="text-white/70" rightLabel="All Work" />

        <header className="mt-8 mb-8 border-b border-white/10 pb-6">
          <h5 className="text-xs uppercase tracking-[0.22em] text-white/50">Free Font Detail</h5>
          <h1 className="bounded-font text-5xl uppercase tracking-tight">{font.family}</h1>
          <p className="mt-3 max-w-180 text-lg text-white/80">{font.description}</p>
        </header>

        <section className="mb-8 border-b border-white/10 pb-8">
          <p className="text-xs uppercase tracking-[0.16em] text-white/55">Live Preview</p>
          <div className="mt-3 grid gap-4 md:grid-cols-[1fr_280px] items-start">
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
              <p className="mt-5 text-3xl sm:text-4xl lg:text-5xl leading-tight wrap-break-words" style={{ fontFamily: previewFontFamily || font.family, whiteSpace: 'normal' }}>
                {previewText || font.sampleText}
              </p>
            </div>
            <div className="flex w-full flex-col items-start gap-3 md:w-auto md:items-end">
              <button
                onClick={() => {
                  const variant = defaultVariant
                  setPendingDownload(variant || '')
                  setDonateOpen(true)
                }}
                className="rounded-full border border-blue-400 px-4 py-2 text-sm text-blue-200 transition hover:bg-blue-500/20"
              >
                Download {defaultVariant || 'Regular'}
              </button>
              <button
                onClick={() => {
                  setPendingDownload('DOWNLOAD_ALL')
                  setAllDownloadRequested(true)
                  setDonateOpen(true)
                }}
                className="rounded-full border border-white/35 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
              >
                Download All
              </button>
            </div>
          </div>
        </section>

        <section className="mb-8 border-b border-white/10 pb-8">
          <p className="text-xs uppercase tracking-[0.16em] text-white/55">Character Showcase</p>
          <p className="mt-3 text-3xl leading-relaxed" style={{ fontFamily: previewFontFamily || font.family }}>
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
                      if (pendingDownload && pendingDownload !== 'DOWNLOAD_ALL') {
                        downloadSingleVariant(font, pendingDownload)
                        setPendingDownload('')
                      }
                    }}
                    className="rounded-full bg-blue-500 px-4 py-2 text-sm text-white transition hover:bg-blue-600"
                  >
                    Continue Download
                  </button>
                  <button
                    onClick={() => {
                      setDonateOpen(false)
                      setPendingDownload('')
                      setAllDownloadRequested(false)
                    }}
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
              <div
                key={`${font.id}-example-${index}`}
                className="overflow-hidden rounded-sm"
                style={{ aspectRatio: '16 / 9', minHeight: '170px' }}
              >
                <img src={image} alt={`${font.family} example ${index + 1}`} className="h-full w-full object-cover" loading="lazy" />
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
