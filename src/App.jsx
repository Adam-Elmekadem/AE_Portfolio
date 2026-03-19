
import { Navigate, Route, Routes } from 'react-router-dom'
import { GlobalShell } from './components'
import {
  AboutStory,
  BlogsTimeline,
  ContactPage,
  Home,
  StudioHome,
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
        <Route path={APP_ROUTES.BLOGS} element={<BlogsTimeline />} />
        <Route path={APP_ROUTES.CONTACT} element={<ContactPage />} />
        <Route path="*" element={<Navigate to={APP_ROUTES.SUMMARY} replace />} />
      </Routes>
    </GlobalShell>
  )
}

export default App
