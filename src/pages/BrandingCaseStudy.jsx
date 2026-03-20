import CaseStudyExperience from '../components/CaseStudyExperience'
import { APP_ROUTES } from '../config/routes'

export default function BrandingCaseStudy() {
  return (
    <CaseStudyExperience
      projectType="Branding"
      title="Tarhal"
      tagline="Identity design that turns cultural signals into a modern, scalable brand language."
      mood="Editorial, bold, and high-contrast with measured cinematic movement."
      visualDirection={[
        'Monochrome campaign stills with one electric accent',
        'Large typographic lockups and identity overlays',
        'System previews across print, social, and signage',
      ]}
      overview={{
        what: 'A complete brand identity system for a travel and culture platform.',
        context: 'Client project requiring a premium visual language that feels local but globally legible.',
        objective: 'Build a coherent identity architecture with clear usage rules across all touchpoints.',
      }}
      concept={{
        mainIdea: 'Reduce visual noise and amplify symbolic clarity.',
        creativeDirection: 'Strong geometric forms, oversized typography, and controlled rhythm across layouts.',
        inspiration: ['Swiss poster grids', 'North African symbols', 'Minimal studio websites'],
      }}
      process={[
        { label: 'Research', text: 'Mapped competitor codes, audience expectations, and tone opportunities.' },
        { label: 'Moodboard', text: 'Built 3 visual territories to compare emotional and strategic direction.' },
        { label: 'Logo Exploration', text: 'Tested symbol reduction, lockups, and legibility at micro and macro scales.' },
        { label: 'Type & Color', text: 'Defined a compact type hierarchy and high-contrast palette with one core accent.' },
        { label: 'Identity System', text: 'Delivered usage rules, social templates, and brand applications.' },
      ]}
      showcase={{
        display: ['Logo grid and ratio sheets', 'Color behavior on light/dark contexts', 'Brand mockups across campaigns'],
        interactions: ['Hover reveals logo iterations', 'Scroll-pinned design notes', 'Before/after identity slider'],
      }}
      result={{
        achieved: [
          'A clear and memorable identity system ready for scale',
          'Consistent brand language across print and digital surfaces',
          'Improved clarity in brand storytelling and recognition',
        ],
        beforeAfter: 'Before: fragmented visuals. After: unified brand system with measurable consistency.',
      }}
      impact={{
        learned: ['Constraint improves distinctiveness', 'Typography can carry brand emotion'],
        challenges: ['Balancing cultural character with global readability'],
        improvements: ['Add motion identity rules for video and social reels'],
      }}
      cta={{
        nextLabel: 'Next: Web Dev Case',
        nextPath: APP_ROUTES.CASE_WEB_DEV,
        explorePath: APP_ROUTES.WORK,
        contactPath: APP_ROUTES.CONTACT,
      }}
    />
  )
}
