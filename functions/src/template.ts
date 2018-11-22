import { Fact } from "./fact";

export function convertToReadableFact(fact: Fact) {
  return `Did you know: ${fact.factText}?`
}