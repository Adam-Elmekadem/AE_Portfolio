import { motion } from 'framer-motion'

const CinematicText = ({ as = 'p', active, className = '', children }) => {
  const MotionTag = motion[as] ?? motion.p
  const hiddenState = { opacity: 0, y: 8, filter: 'blur(2px)' }
  const visibleState = { opacity: 1, y: 0, filter: 'blur(0px)' }

  return (
    <MotionTag
      initial={hiddenState}
      animate={active ? visibleState : hiddenState}
      transition={{ duration: active ? 0.28 : 0.85, ease: [0.35, 0.05, 0.22, 1] }}
      className={`will-change-[opacity,transform,filter] ${className}`.trim()}
    >
      {children}
    </MotionTag>
  )
}

export default CinematicText
