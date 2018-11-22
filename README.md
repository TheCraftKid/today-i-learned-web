# Today I Learned Web

## About
For more information, see the [Android app](https://github.com/TheCraftKid/today-i-learned-android.git) project.

This project uses Cloud Scheduler to push a fact daily at 12:00 AM UTC (00:00)
to all users. A Cloud Scheduler job (`refresh-fact`) pings a Pub/Sub topic
(`fact-update`) that starts a Cloud Function (`sendFacts`) that sends the fact
payload to all subscribed user devices (under the 'daily-fact' topic)

```
Cloud Scheduler > Pub/Sub > Cloud Function > Firebase Cloud Messaging
```

Cloud Scheduler is scheduled to run every day at 12:00 AM UTC.

## Developing
This project uses the Firebase CLI. Make sure it's installed before continuing:
```bash
    npm i -g firebase-tools
```

Initialize the project by running `firebase init`. Choose the Firebase project
that will be used for deployments, and accept the default prompts, not
overriding any existing files.

### Deploying
 - To deploy the backend functions, run `cd functions && npm run deploy`.
 - To deploy the front-end site, run `npm run deploy` in the root directory.