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
