import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CinematicText from '../components/CinematicText'
import styles from './Home.module.css'
import {
  selectCurrentFrame,
  setCurrentFrame,
} from '../store/uiSlice'

const INTRO_HOLD_MS = 1700
const INTRO_FADE_OUT_MS = 850
const AUDIO_SOURCE = encodeURI('/Hans Zimmer - Time (Official Audio) - WaterTower Music.mp3')

const SUMMARY_CARDS = [
  {
    id: '01',
    label: 'Home',
    path: '/home',
    image: 'https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGhvbWV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '02',
    label: 'About Me',
    path: '/about',
    image: '/me.png',
  },
  {
    id: '03',
    label: 'Work',
    path: '/work',
    image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHdvcmt8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '04',
    label: 'Blogs',
    path: '/blogs',
    image: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdyaXRpbmd8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '05',
    label: 'Contact',
    path: '/contact',
    image: 'https://images.unsplash.com/photo-1706877324142-606119530cbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNyZWF0aW9ufGVufDB8fDB8fHww',
  },
]

const MotionSection = motion.section

const getFrameVisibility = (frame) => {
  const isVisible = frame === 'all'

  return {
    meta: isVisible,
    title: isVisible,
    details: isVisible,
    mark: isVisible,
  }
}

const Home = () => {
  const dispatch = useDispatch()
  const currentFrame = useSelector(selectCurrentFrame)
  const [showSummary, setShowSummary] = useState(false)
  const cursorSquareRef = useRef(null)

  useEffect(() => {
    dispatch(setCurrentFrame('all'))
    setShowSummary(false)

    const fadeOutTimer = window.setTimeout(() => {
      dispatch(setCurrentFrame('blank'))
    }, INTRO_HOLD_MS)

    const summaryTimer = window.setTimeout(() => {
      setShowSummary(true)
    }, INTRO_HOLD_MS + INTRO_FADE_OUT_MS + 120)

    return () => {
      window.clearTimeout(fadeOutTimer)
      window.clearTimeout(summaryTimer)
    }
  }, [dispatch])

  useEffect(() => {
    const cursorSquare = cursorSquareRef.current

    if (!cursorSquare) {
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
  }, [])

  const visibility = getFrameVisibility(currentFrame)

  return (
    <main className={`${styles.heroBackground} relative isolate flex min-h-screen items-center justify-center overflow-hidden`}>
      <div
        ref={cursorSquareRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-40 h-6 w-6 border border-white/70 bg-white/10 opacity-0 mix-blend-difference transition-opacity duration-200"
      />

      <div
        aria-hidden="true"
        className={`${styles.gridOverlay} pointer-events-none absolute inset-0 -z-10 opacity-90`}
      />
      {!showSummary ? (
        <section className="relative min-h-screen w-[94vw] max-w-7xl p-[clamp(0.8rem,3.5vw,1.2rem)] md:min-h-[min(760px,92vh)] md:p-[clamp(1rem,2.2vw,2rem)]">
          <header
            className={`${styles.metaText} absolute left-[clamp(0.4rem,1.2vw,1rem)] top-[clamp(0.4rem,1.2vw,1rem)] flex flex-col gap-[0.15rem] uppercase text-[rgba(236,230,233,0.45)]`}
            aria-label="Landing metadata"
          >
            <CinematicText active={visibility.meta} className="bounded-font">VISUAL DESIGN. CREATIVE DIRECTION</CinematicText>
            <CinematicText active={visibility.meta} className="bounded-font">WRITING. BRANDING. DEVELOPMENT</CinematicText>
          </header>

          <div className="absolute left-1/2 top-[54%] w-full -translate-x-1/2 -translate-y-1/2 text-center md:top-[58%]">
            <CinematicText
              as="h1"
              active={visibility.title}
              className={`${styles.heroTitle} bounded-font m-0 leading-[0.95] font-medium text-[#ece6e9]`}
            >
              PORTFOLIO
            </CinematicText>
          </div>

          <aside
            className={`${styles.metaText} absolute bottom-[clamp(3.4rem,8vw,4rem)] right-[clamp(0.4rem,1.2vw,1rem)] flex max-w-[62vw] flex-col gap-[0.15rem] text-right uppercase text-[rgba(236,230,233,0.45)] md:bottom-[clamp(2.3rem,4vw,3.4rem)] md:max-w-none`}
            aria-label="Project details"
          >
            <CinematicText active={visibility.details} className="bounded-font">A PORTFOLIO BUILT IN CLARITY</CinematicText>
            <CinematicText active={visibility.details} className="bounded-font">SLOW MOTION TRANSITIONS</CinematicText>
            <CinematicText active={visibility.details} className="bounded-font">AND PRECISE VISUAL BALANCE</CinematicText>
          </aside>

          <div
            className="absolute bottom-[clamp(0.7rem,1.4vw,1.2rem)] left-[clamp(0.4rem,1.2vw,1rem)]"
            aria-hidden="true"
          >
            <CinematicText
              as="span"
              active={visibility.mark}
              className={`${styles.brandMark} bounded-font tracking-[0.14em] text-[rgba(236,230,233,0.68)]`}
            >
              AL
            </CinematicText>
          </div>
        </section>
      ) : (
        <MotionSection
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 min-h-screen w-full bg-[#e6e6e7] px-5 py-10 text-[#202126] sm:px-8 lg:px-12"
        >
          <div className="mx-auto flex w-full max-w-295 flex-col items-center">
            <h2 className="bounded-font text-4xl uppercase tracking-[0.08em] text-[#1f2025] sm:text-5xl md:text-6xl">
              DISCOVER THE MENU
            </h2>

            <div className="mt-8 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-10 lg:grid-cols-5">
              {SUMMARY_CARDS.map((card) => (
                <article key={card.id} className="group">
                  <Link to={card.path} className="block focus-visible:outline-none">
                    <div className="relative h-55 overflow-hidden rounded-md border border-white/50 bg-[#d2d3d5] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_24px_rgba(20,22,28,0.2)] sm:h-62.5 md:h-72.5 lg:h-82.5">
                      <img
                        src={card.image}
                        alt={`${card.label} preview`}
                        className={`${styles.summaryCardImage} absolute inset-0 h-full w-full object-cover`}
                        loading="lazy"
                      />
                      <span className="absolute left-2 top-1 bounded-font text-6xl leading-none tracking-[0.06em] text-white/70 sm:text-7xl">
                        {card.id}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-col items-center gap-1">
                      <p className="bounded-font text-xs uppercase tracking-[0.12em] text-[#202126] transition-colors group-hover:text-[#0f1016] sm:text-sm">
                        {card.label}
                      </p>
                      <div className="h-px w-[78%] bg-[#65666f]/35 transition-colors group-hover:bg-[#22242e]/50" />
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </MotionSection>
      )}
    </main>
  )
}

export default Home
