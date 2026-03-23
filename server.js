import express from "express";
import process from "node:process";
import { createServer as createViteServer } from "vite";
import { renderPage } from "vike";

const isProduction = process.env.NODE_ENV === "production";
const root = `${process.cwd()}`;
const hmrPort = Number(process.env.VITE_HMR_PORT || 24679);

async function startServer() {
  const app = express();

  if (!isProduction) {
    const vite = await createViteServer({
      root,
      server: {
        middlewareMode: true,
        hmr: {
          port: hmrPort,
          clientPort: hmrPort,
        },
      },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist/client"));
  }

  app.use(async (req, res, next) => {
    const pageContextInit = { urlOriginal: req.originalUrl };
    const pageContext = await renderPage(pageContextInit);

    if (pageContext.httpResponse) {
      const { statusCode, body } = pageContext.httpResponse;
      res.status(statusCode).send(body);
      return;
    }

    next();
  });

  app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
  });
}

startServer();
