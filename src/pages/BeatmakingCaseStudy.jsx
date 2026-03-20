import CaseStudyExperience from '../components/CaseStudyExperience'
import { APP_ROUTES } from '../config/routes'

export default function BeatmakingCaseStudy() {
  return (
    <CaseStudyExperience
      projectType="Beatmaking"
      title="Night Pulse"
      tagline="Sonic storytelling through texture, restraint, and cinematic rhythm design."
      mood="Nocturnal, atmospheric, and punchy with a deliberate dynamic arc."
      visualDirection={[
        'Waveform-led section transitions',
        'Studio macro visuals and dark ambient scenes',
        'Reactive typography tied to section rhythm',
      ]}
      overview={{
        what: 'A beatmaking project developed as a signature sonic identity study.',
        context: 'Personal production lab focused on mood, groove, and arrangement clarity.',
        objective: 'Compose a replayable piece with strong identity and emotional progression.',
      }}
      concept={{
        mainIdea: 'Contrast silence and impact to create narrative energy in sound.',
        creativeDirection: 'Sparse arrangement, textured layers, and controlled drop moments.',
        inspiration: ['Analog warmth references', 'Contemporary hip-hop textures', 'Cinematic score transitions'],
      }}
      process={[
        { label: 'Mood & Genre', text: 'Set tempo world, emotional target, and dynamic scope.' },
        { label: 'Inspiration', text: 'Analyzed references for groove, arrangement, and tonal behavior.' },
        { label: 'Sound Selection', text: 'Curated drum palette, bass contour, and atmospheric textures.' },
        { label: 'Composition', text: 'Built progression from loop to full arrangement and transition design.' },
      ]}
      showcase={{
        display: ['DAW arrangement snapshots', 'Layer stack and stem breakdowns', 'Waveform and transition moments'],
        interactions: ['Hover-to-solo stem cues', 'Section progress sync animations', 'Play/pause micro interactions'],
      }}
      result={{
        achieved: [
          'A cohesive beat with clear sonic character',
          'Strong dynamic movement without overcrowding',
          'Production-ready structure for artist collaboration',
        ],
        beforeAfter: 'Before: disconnected loops. After: complete arrangement with narrative rhythm.',
      }}
      impact={{
        learned: ['Restraint creates stronger impact', 'Arrangement drives emotional payoff'],
        challenges: ['Maintaining clarity while preserving texture depth'],
        improvements: ['Finalize alternate masters for multiple listening contexts'],
      }}
      cta={{
        nextLabel: 'Back: Branding Case',
        nextPath: APP_ROUTES.CASE_BRANDING,
        explorePath: APP_ROUTES.WORK,
        contactPath: APP_ROUTES.CONTACT,
      }}
    />
  )
}
