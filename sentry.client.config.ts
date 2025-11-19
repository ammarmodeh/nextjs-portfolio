// This file configures the initialization of Sentry on the client.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  // Want to call the dsn value from .env
  dsn: process.env.NEXT_PUBLIC_SENTRY_CLIENT_DSN,

  // --- TRACING + PROFILING ---
  integrations: [
    // Required for browser tracing
    Sentry.browserTracingIntegration(),

    // Required for browser profiling
    Sentry.browserProfilingIntegration(),

    // Optional: Session Replay
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],

  // Capture 100% of traces (recommended for setup)
  tracesSampleRate: 1.0,

  // Enable distributed tracing for these URLs
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  // Capture 100% of profiles
  profilesSampleRate: 1.0,

  // Optional debugging
  debug: false,

  // Replay
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
});
