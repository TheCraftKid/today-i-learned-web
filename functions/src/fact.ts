/**
 * An interesting fact.
 * 
 * Model version: 0.1.0
 */
export interface Fact {

  /**
   * A unique identifier for this fact.
   */
  id: string,

  /**
   * The date this fact was added to the database, expressed in milliseconds
   * since January 1, 1970 (UNIX epoch). 
   */
  ingestDate: number,

  /**
   * The date this fact is scheduled to be sent out, expressed in milliseconds
   * since January 1, 1970 (UNIX epoch).
   */
  deployDate: number,

  /**
   * The body text for this fact.
   */
  factText: string,

  /**
   * An easily glanceable category for this fact.
   */
  topic: Topic,

  /**
   * A link to learn more about this fact.
   */
  url: string,
}

export type Topic = "science" | "technology" | "people" | "culture"