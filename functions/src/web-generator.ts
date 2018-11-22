import { Fact } from "./fact";

const DEFAULT_LANGUAGE = "en-US";

/**
 * Generates a pretty webpage containing the fact of the day.
 */
export function factToHtml(fact: Fact, language: string = DEFAULT_LANGUAGE) {
  return `
    <html lang="${language}">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Today We Learned - ${dateFromFact(fact)}</title>
        <meta name="description" content="An interesting ${fact.topic} fact">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      </head>
      <body>
        <h2>Did you know:</h2>
        <p>${fact.factText}.</p>
      </body>
    </html>
`;
}

/**
 * Returns a user-readable date for the given fact.
 */
function dateFromFact(fact: Fact) {
  return new Date(fact.deployDate).toString();
}