import CaseStudyExperience from '../components/CaseStudyExperience'
import { APP_ROUTES } from '../config/routes'

export default function WebDevCaseStudy() {
  return (
    <CaseStudyExperience
      projectType="Web Development"
      title="Studio Grid"
      tagline="A high-performance cinematic website engineered for narrative flow and visual impact."
      mood="Technical precision wrapped in a minimal, filmic user experience."
      visualDirection={[
        'Full-screen UI hero with layered grids',
        'Dark foundation with strategic accent states',
        'Sequence-based section transitions',
      ]}
      overview={{
        what: 'A route-based portfolio platform for a multidisciplinary creative studio.',
        context: 'Rebuild project to replace a static site and unify design, speed, and maintainability.',
        objective: 'Deliver a smooth, responsive experience with scalable architecture and reusable components.',
      }}
      embeddedSections={[
        {
          title: 'UI Components',
          description: 'Designing modular components for consistent UI behavior.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
              text: 'Reusable card systems and responsive grids for quick page assembly.',
              layout: 'right',
            },
            {
              image1: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80',
              text: 'Outlined CSS tokens and state transitions consistent with brand mood.',
              layout: 'left',
            },
          ],
        },
        {
          title: 'Page Behavior',
          description: 'Scroll choreography and interactive details.',
          blocks: [
            {
              image1: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=1200&q=80',
              image2: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80',
              text: 'Auto-scrolling galleries and fast route transitions keep the narrative tight.',
              layout: 'bottom',
            },
          ],
        },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80',
      ]}
      concept={{
        mainIdea: 'Story-first interface powered by modular engineering.',
        creativeDirection: 'Oversized titles, sparse UI, and measured animation hierarchy.',
        inspiration: ['Creative studio websites', 'Editorial storytelling patterns', 'Motion-led UI systems'],
      }}
      process={[
        { label: 'Problem', text: 'Old site lacked hierarchy, speed, and mobile consistency.' },
        { label: 'Solution Idea', text: 'Design a narrative route flow with reusable component primitives.' },
        { label: 'Wireframes', text: 'Mapped section rhythm, sticky moments, and mobile adaptation logic.' },
        { label: 'Tech Stack', text: 'React, Vite, routing, modular styles, and motion orchestration.' },
        { label: 'Development', text: 'Implemented component architecture, optimization passes, and production QA.' },
      ]}
      showcase={{
        display: ['Wireframe to final UI comparisons', 'Responsive breakpoints and components', 'Performance and bundle summaries'],
        interactions: ['Hover state metadata reveals', 'Scroll-triggered section transitions', 'Sticky title and content choreography'],
      }}
      result={{
        achieved: [
          'A smoother narrative user journey across devices',
          'Reusable architecture for rapid content extension',
          'Performance improvements and cleaner deployment flow',
        ],
        beforeAfter: 'Before: static and fragmented. After: responsive, cinematic, and system-driven.',
      }}
      impact={{
        learned: ['Animation must reinforce hierarchy', 'Architecture enables creative velocity'],
        challenges: ['Balancing visual richness with performance constraints'],
        improvements: ['Introduce automated visual regression testing'],
      }}
      cta={{
        nextLabel: 'Next: Story Case',
        nextPath: APP_ROUTES.CASE_STORY,
        explorePath: APP_ROUTES.WORK,
        contactPath: APP_ROUTES.CONTACT,
      }}
    />
  )
}
