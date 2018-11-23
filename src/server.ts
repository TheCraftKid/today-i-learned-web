import express from "express";
import * as createServerApp from "./server-entry";

const server = express();

server.get("*", handleGet);

async function handleGet(req: express.Request, res: express.Response) {
  const context = {
    url: req.url,
  };
  try {
    const app = createServerApp(context);
    renderer.renderToString(app, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end("Page not found");
        } else {
          res.status(500).end("Internal server error. Try again later.");
        }
      } else {
        res.send(html);
      }
    })
  } catch (e) {
    // TODO
    res.status(500).end("Internal server error. Try again later.")
  }
}
