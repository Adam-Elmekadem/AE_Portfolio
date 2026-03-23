import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { dangerouslySkipEscape, escapeInject } from 'vike/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import App from '../App'
import { store } from '../store/store'

export { render }

function render(pageContext) {
  const { urlOriginal } = pageContext

  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={urlOriginal}>
        <App />
      </StaticRouter>
    </Provider>,
  )

  const documentHtml = escapeInject`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Adam Elmekadem – UX/UI designer & frontend developer. Crafted case studies, digital products, and modern web interaction experiences." />
    <meta name="keywords" content="Adam Elmekadem, portfolio, UX design, UI design, frontend developer, React, Tailwind, case studies" />
    <meta name="author" content="Adam Elmekadem" />
    <meta name="robots" content="index, follow" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Adam Elmekadem - Portfolio" />
    <meta property="og:description" content="Discover Adam Elmekadem's portfolio: UX/UI and frontend projects, storytelling design processes, and modern product interfaces." />
    <meta property="og:url" content="https://adamelmk.netlify.app/" />
    <meta property="og:image" content="https://adamelmk.netlify.app/og-image.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@adamelmk" />
    <meta name="twitter:creator" content="@adamelmk" />
    <meta name="twitter:title" content="Adam Elmekadem - Portfolio" />
    <meta name="twitter:description" content="Discover Adam Elmekadem's portfolio: UX/UI and frontend projects, storytelling design processes, and modern product interfaces." />
    <meta name="twitter:image" content="https://adamelmk.netlify.app/og-image.png" />
    <link rel="icon" type="image/svg+xml" href="/Mylogo.png" />
    <title>Adam Elmekadem - Portfolio</title>
  </head>
  <body>
    <div id="root">${dangerouslySkipEscape(appHtml)}</div>
  </body>
</html>`

  return { documentHtml }
}
