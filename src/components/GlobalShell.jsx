import { useEffect, useRef, useState } from 'react'

const AUDIO_SOURCE = encodeURI('/Hans Zimmer - Time (Official Audio) - WaterTower Music.mp3')
const MOBILE_MEDIA_QUERY = '(max-width: 767px)'

export default function GlobalShell({ children }) {
  const audioRef = useRef(null)
  const cursorSquareRef = useRef(null)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [isMobileViewport, setIsMobileViewport] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY)
    const updateViewport = () => setIsMobileViewport(mediaQuery.matches)

    updateViewport()
    mediaQuery.addEventListener('change', updateViewport)

    return () => {
      mediaQuery.removeEventListener('change', updateViewport)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current

    if (!audio || isMobileViewport) {
      return
    }

    audio.volume = 0.35
    audio.loop = true

    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection

    if (connection?.saveData) {
      return
    }

    const playTimer = window.setTimeout(() => {
      const playPromise = audio.play()

      if (!playPromise) {
        return
      }

      playPromise
        .then(() => {
          setIsMusicPlaying(true)
        })
        .catch(() => {
          setIsMusicPlaying(false)
        })
    }, 1200)

    return () => {
      window.clearTimeout(playTimer)
    }
  }, [isMobileViewport])

  useEffect(() => {
    const cursorSquare = cursorSquareRef.current

    if (!cursorSquare || isMobileViewport) {
      return
    }

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const current = { ...target }
    let rafId = null
    let isVisible = false

    const lerp = (start, end, amt) => start + (end - start) * amt

    const update = () => {
      current.x = lerp(current.x, target.x, 0.18)
      current.y = lerp(current.y, target.y, 0.18)

      cursorSquare.style.transform = `translate3d(${current.x - 12}px, ${current.y - 12}px, 0)`
      cursorSquare.style.opacity = isVisible ? '1' : '0'

      rafId = window.requestAnimationFrame(update)
    }

    const onMouseMove = (event) => {
      target.x = event.clientX
      target.y = event.clientY
      isVisible = true
    }

    const onMouseLeave = () => {
      isVisible = false
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    rafId = window.requestAnimationFrame(update)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [isMobileViewport])

  const toggleMusic = () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    if (audio.paused) {
      audio
        .play()
        .then(() => setIsMusicPlaying(true))
        .catch(() => setIsMusicPlaying(false))
      return
    }

    audio.pause()
    setIsMusicPlaying(false)
  }

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SOURCE} preload={isMobileViewport ? 'none' : 'metadata'} />

      <div
        ref={cursorSquareRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-50 h-6 w-6 border border-white/70 bg-white/10 opacity-0 mix-blend-difference transition-opacity duration-200 ${isMobileViewport ? 'hidden' : ''}`}
      />

      <button
        type="button"
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 rounded-full border border-white/35 bg-black/45 px-4 py-2 text-xs uppercase tracking-[0.12em] text-white backdrop-blur-md transition hover:border-white/70 hover:bg-black/65"
      >
        {isMusicPlaying ? 'Pause Music' : 'Play Music'}
      </button>

      {children}
    </>
  )
}
