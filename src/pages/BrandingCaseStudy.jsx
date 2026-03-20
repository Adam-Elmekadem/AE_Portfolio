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
          title: '01 Research',
          description: 'Audience behavior, competitor signals, and positioning cues that shaped the visual direction.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
              text: 'Research highlighted tone gaps and visual opportunities, leading to a bold but structured brand language.',
              layout: 'left',
            },
          ],
        },
        {
          title: '02 Moodboard',
          description: 'The selected visual territory balancing cultural depth, clarity, and contemporary appeal.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=80',
              text: 'A single moodboard canvas defined texture, light, typography energy, and composition rhythm before logo exploration.',
              layout: 'bottom',
            },
          ],
        },
        {
          title: '03 Primary Logo',
          description: 'Primary mark and lockup usage across major brand applications.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
              text: 'Primary logo variants were tested for clarity, spacing, and high-contrast brand recognition.',
              layout: 'bottom',
            },
          ],
        },
        {
          title: '04 Secondary Logo',
          description: 'Compact mark variation for utility placements and social use.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
              text: 'Secondary logo options preserve identity character while remaining legible in tighter spaces.',
              layout: 'bottom',
            },
          ],
        },
        {
          title: '05 Typography & Colors',
          description: 'Type hierarchy and color system used to establish consistent tone and contrast.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1461783436728-0a9217714694?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80',
              text: 'Typography and palette rules create readable hierarchy while retaining a premium editorial feel.',
              layout: 'left',
            },
          ],
        },
        {
          title: '06 Patterns',
          description: 'Repeat graphics and pattern structures extending the identity system.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
              text: 'Pattern components were designed to scale across campaigns without losing visual coherence.',
              layout: 'right',
            },
          ],
        },
        {
          title: '07 Mockups',
          description: 'Applied identity previews across posters, social frames, and brand surfaces.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
              text: 'Mockups validate legibility, spacing rhythm, and emotional consistency across contexts.',
              layout: 'right',
            },
          ],
        },
      ]}
      embeddedHeading="Brand Exploration"
      embeddedKicker="Visual System Breakdown"
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
      process={[]}
      hideProcess
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
