import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import { store } from './store/store'

export { render }

async function render(pageContext) {
  const { url } = pageContext

  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
  )

  return {
    documentHtml: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Adam Elmekadem - Portfolio</title></head><body><div id="root">${appHtml}</div><script type="module" src="/src/entry-client.jsx"></script></body></html>`,
  }
}
