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
      embeddedSections={[
        {
          title: 'Sound Assets',
          description: 'Visualizing stems, waveform mood, and tonal color themes.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=1200&q=80',
              text: 'Sonic color and sample texture define the track identity.',
              layout: 'left',
            },
            {
              image1: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
              text: 'Arrangement diagram visualizes energy movements across progressions.',
              layout: 'right',
            },
          ],
        },
        {
          title: 'Brand Touchpoints',
          description: 'EP artwork and campaign mockups for releases and social roll-out.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
              text: 'Visual language supports audio brand identity in visuals and UI frames.',
              layout: 'bottom',
            },
          ],
        },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80',
      ]}
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
