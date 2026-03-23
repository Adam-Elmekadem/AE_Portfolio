import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../App'
import { store } from '../store/store'
import '../index.css'

export { render }

function render(pageContext) {
  const container = document.getElementById('root')

  const page = (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )

  if (pageContext.isHydration) {
    hydrateRoot(container, page)
  } else {
    createRoot(container).render(page)
  }
}
