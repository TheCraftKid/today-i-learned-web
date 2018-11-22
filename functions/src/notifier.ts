import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { getNewestFact } from "./fact-data";

const FCM_DAILY_FACT_TOPIC = "/topics/daily-fact";

/**
 * Sends out the newest fact to all user devices to the FCM_DAILY_FACT_TOPIC.
 */
export async function sendFact(message: functions.pubsub.Message,
  context: functions.EventContext): Promise<any> {
  const payload = message.data
    ? Buffer.from(message.data, 'base64').toString()
    : null;
  if (payload) {
    console.log(`Payload: ${payload}`);
  }
  try {
    const fact = await getNewestFact();
    const factMessage: admin.messaging.Message = {
      data: {
        id: fact.id,
        ingestDate: fact.ingestDate.toString(),
        deployDate: fact.deployDate.toString(),
        factText: fact.factText.toString(),
        topic: fact.topic,
        url: fact.url,
      },
      topic: FCM_DAILY_FACT_TOPIC,
    };
    try {
      const response = await admin.messaging().send(factMessage)
      console.log('Successfully sent message:', response);
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  } catch (e) {
    console.error('Failed to fetch fact', e);
  }
}