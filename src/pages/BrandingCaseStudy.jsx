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
      embeddedSections={[
        {
          title: 'Brand Identity',
          description: 'Core brand elements and their system-level treatment.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
              text: 'The identity system defines primary and secondary marks, spacing, and usage rules.',
              layout: 'left',
            },
            {
              image1: 'https://images.unsplash.com/photo-1461783436728-0a9217714694?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80',
              text: 'Consistent presentation builds recognition across print and digital touchpoints.',
              layout: 'right',
            },
          ],
        },
        {
          title: 'Primary Logo',
          description: 'Primary mark and lockup usage across applications.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
              text: 'Primary logo variants with precise clearspace and contrast use.',
            },
          ],
        },
        {
          title: 'Secondary Logo',
          description: 'Compact mark variation for micro and social contexts.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
              text: 'Secondary logo is tuned for smaller sizes and utility placements.',
              layout: 'bottom',
            },
          ],
        },
        {
          title: 'Typography & Colors',
          description: 'Type stack and core color palette with supportive tints.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
              text: 'Typography hierarchy was made bold and legible with accent contrast.',
              layout: 'bottom',
            },
          ],
        },
        {
          title: 'Patterns',
          description: 'Repeat graphics and texturing patterns that extend the identity.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1461783436728-0a9217714694?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80',
              text: 'Background pattern structures were built to support flexible layouts and motion.',
              layout: 'left',
            },
          ],
        },
        {
          title: 'Mockups',
          description: 'Mockups showing applied identity in real world and digital contexts.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
              text: 'Applied mockups highlight the identity system across brand touchpoints.',
              layout: 'right',
            },
          ],
        },
      ]}
      overview={{
        what: 'A complete brand identity system for a travel and culture platform.',
        context: 'Client project requiring a premium visual language that feels local but globally legible.',
        objective: 'Build a coherent identity architecture with clear usage rules across all touchpoints.',
      }}
      galleryImages={[
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1461783436728-0a9217714694?auto=format&fit=crop&w=1200&q=80',
      ]}
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
