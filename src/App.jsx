
import { Navigate, Route, Routes } from 'react-router-dom'
import { GlobalShell } from './components'
import {
  AboutStory,
  BeatmakingCaseStudy,
  BlogsTimeline,
  BrandingCaseStudy,
  ContactPage,
  Home,
  StudioHome,
  StoryCaseStudy,
  WebDevCaseStudy,
  WorkCaseStudy,
  WorkGallery,
} from './pages'
import { APP_ROUTES } from './config/routes'

function App() {
  return (
    <GlobalShell>
      <Routes>
        <Route path={APP_ROUTES.SUMMARY} element={<Home />} />
        <Route path={APP_ROUTES.HOME} element={<StudioHome />} />
        <Route path={APP_ROUTES.ABOUT} element={<AboutStory />} />
        <Route path={APP_ROUTES.WORK} element={<WorkGallery />} />
        <Route path={APP_ROUTES.WORK_CASE_STUDY} element={<WorkCaseStudy />} />
        <Route path={APP_ROUTES.CASE_BRANDING} element={<BrandingCaseStudy />} />
        <Route path={APP_ROUTES.CASE_WEB_DEV} element={<WebDevCaseStudy />} />
        <Route path={APP_ROUTES.CASE_STORY} element={<StoryCaseStudy />} />
        <Route path={APP_ROUTES.CASE_BEATMAKING} element={<BeatmakingCaseStudy />} />
        <Route path={APP_ROUTES.BLOGS} element={<BlogsTimeline />} />
        <Route path={APP_ROUTES.CONTACT} element={<ContactPage />} />
        <Route path="*" element={<Navigate to={APP_ROUTES.SUMMARY} replace />} />
      </Routes>
    </GlobalShell>
  )
}

export default App
