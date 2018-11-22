import * as admin from "firebase-admin";
import { Fact } from "./fact";

const PATH_FACTS = "facts";

/**
 * Retrieves the Fact with the latest/most recent "deployDate".
 */
export async function getNewestFact(): Promise<Fact> {
  try {
    const snap = await admin.firestore().collection(PATH_FACTS)
      .orderBy("deployDate", "desc")
      .get();
    const fact = snap.docs[0].data() as Fact;
    return Promise.resolve(fact);
  } catch (e) {
    throw e;
  }
}