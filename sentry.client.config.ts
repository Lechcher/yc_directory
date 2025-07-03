import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://6b281a0a65871ca2594d9d1a014a2f34@o4509356137578496.ingest.de.sentry.io/4509599458852944",

  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
