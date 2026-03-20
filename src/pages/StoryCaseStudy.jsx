import CaseStudyExperience from '../components/CaseStudyExperience'
import { APP_ROUTES } from '../config/routes'

export default function StoryCaseStudy() {
  return (
    <CaseStudyExperience
      projectType="Story"
      title="Echoes"
      tagline="A narrative world built through minimal visuals, symbolic pacing, and emotional structure."
      mood="Intimate, poetic, and cinematic with restrained visual cues."
      visualDirection={[
        'Chapter-led hero transitions and quote blocks',
        'Monotone visuals with rare accent punctuation',
        'Editorial text panels with immersive spacing',
      ]}
      overview={{
        what: 'A long-form narrative case crafted for immersive digital reading.',
        context: 'Personal exploration in story architecture for interactive web format.',
        objective: 'Create a coherent narrative experience where typography and rhythm drive emotion.',
      }}
      embeddedSections={[
        {
          title: 'Narrative Chapters',
          description: 'Visual mood for each chapter stage and key scenes.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
              text: 'Layered chapter visuals connect reader emotion to structural beats.',
              layout: 'left',
            },
            {
              image1: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1200&q=80',
              text: 'Strong typography anchors the narrative while allowing visual pacing.',
              layout: 'right',
            },
          ],
        },
        {
          title: 'Content Rhythm',
          description: 'Spacing, type scale, and slide interactions for long reads.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1461783436728-0a9217714694?auto=format&fit=crop&w=1200&q=80',
              text: 'Interaction patterns are designed for both scanning and deep reading moments.',
              layout: 'bottom',
            },
          ],
        },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1200&q=80',
      ]}
      concept={{
        mainIdea: 'Memory and identity collide through recurring symbols and mirrored scenes.',
        creativeDirection: 'Scene-based progression, minimal interface, and controlled revelation.',
        inspiration: ['Art-house cinema', 'Literary essays', 'Documentary pacing systems'],
      }}
      process={[
        { label: 'Core Idea', text: 'Defined the emotional thesis and central conflict arc.' },
        { label: 'Themes', text: 'Mapped motifs around belonging, transformation, and duality.' },
        { label: 'Narrative Structure', text: 'Built 3-act cadence with chapter-level transitions.' },
        { label: 'World Building', text: 'Established symbolic rules, setting logic, and language consistency.' },
      ]}
      showcase={{
        display: ['Chapter covers and quote treatment system', 'Narrative maps and pacing boards', 'Typographic hierarchy previews'],
        interactions: ['Scroll chapter progress', 'Context reveals on hover', 'Subtle scene transition fades'],
      }}
      result={{
        achieved: [
          'A coherent story world with strong thematic continuity',
          'Improved immersion through typography-led composition',
          'Clear narrative pacing from opening to resolution',
        ],
        beforeAfter: 'Before: loose fragments. After: unified narrative architecture with emotional flow.',
      }}
      impact={{
        learned: ['Structure intensifies emotional effect', 'Pacing is as important as prose'],
        challenges: ['Balancing poetic expression with readability'],
        improvements: ['Add audio mode and multilingual narrative versions'],
      }}
      cta={{
        nextLabel: 'Next: Beatmaking Case',
        nextPath: APP_ROUTES.CASE_BEATMAKING,
        explorePath: APP_ROUTES.WORK,
        contactPath: APP_ROUTES.CONTACT,
      }}
    />
  )
}
