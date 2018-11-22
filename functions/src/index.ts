import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { sendFact } from "./notifier";
import { app } from "./web-handler";

admin.initializeApp()

const PUB_SUB_UPDATE_TOPIC = "fact-update";

export const sendFacts = functions.pubsub.topic(PUB_SUB_UPDATE_TOPIC)
  .onPublish(sendFact);

export const getFact = functions.https.onRequest(app);