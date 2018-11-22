import { getNewestFact } from "./fact-data";
import { factToHtml } from "./web-generator";
import { convertToReadableFact } from "./template";
import * as express from "express";

export const app = express();

app.use("/getFact", checkMethod);
app.get("/getFact", handleGet);

/**
 * Ensures the request's method is only GET.
 */
function checkMethod(req: express.Request, res: express.Response,
  next: express.NextFunction) {
  if (req.method !== "GET") {
    res.send(405).send("Only GET requests are accepted on this server.");
    return;
  }
  next();
}

/**
 * Handles an HTTP request with the appropriate response.
 *  - For `text/html` requests, we output a templated page with the fact.
 *  - For 'text/plain` requests, we output the text as-is.
 *  - For `application/json` requests, we output the fact in JSON form.
 * 
 * If we cannot fetch the fact, we respond with a 500 status code.
 */
export async function handleGet(req: express.Request,
  res: express.Response) {
  if (req.is("json")) {
    // TODO: Interpret extra request values like paging for archived facts
  } else if (req.is("application/x-www-form-urlencoded")) {
    // TODO: Interpret extra request values like paging for archived facts
  }
  if (!req.acceptsLanguages("en-US")) {
    // TODO: Handle multiple languages with Cloud Translation API
  }
  try {
    const fact = await getNewestFact();
    res.set("Cache-Control', 'public, max-age=30000, s-maxage=60000");
    if (req.accepts("text/html")) {
      const html = factToHtml(fact);
      res.status(200).send(html);
    } else if (req.accepts("text/plain")) {
      const result = convertToReadableFact(fact);
      res.status(200).send(result);
    } else if (req.accepts("application/json")) {
      res.status(200).send({ ...fact });
    } else {
      res.status(406).send(`Cannot accept ${req.header['Accepts']}`);
    }
  } catch (e) {
    console.error("Couldn't fetch fact:", e);
    res.status(500).send("Internal server error:\nCouldn't fetch fact.");
  }
}