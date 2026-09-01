# One Stop Shop operations runbook

## Current cloud state (27 August 2026)

- Firebase project: `studio-bycristian-oss` (`38473211013`).
- Web app: `1:38473211013:web:98c8c004fc86c02c749dec`.
- Firestore: created in `eur3`, native mode, deletion protection enabled.
- Firestore rules and indexes: deployed.
- Authentication API: enabled, but provider configuration is blocked until billing is linked.
- Storage bucket, Functions, Secret Manager and Cloud Scheduler: not yet provisioned because the project has no billing account.
- Production deployment: intentionally not performed. Public launch is gated by billing, SMTP verification and legal review.

## Required manual prerequisite

Link the intended Google Cloud billing account to `studio-bycristian-oss` in the Firebase console and confirm that the project shows the Blaze plan. Do not reuse a billing account without confirming ownership and cost alerts. Configure a budget alert before deploying Functions.

## Complete Firebase setup after Blaze

1. Enable Email/Password and Anonymous providers in Firebase Authentication.
2. Create the default Storage bucket in Europe (`EU`) and deploy its rules:

   ```sh
   firebase deploy --only storage --project studio-bycristian-oss
   ```

3. Set Functions secrets. Never commit values:

   ```sh
   firebase functions:secrets:set SMTP_HOST --project studio-bycristian-oss
   firebase functions:secrets:set SMTP_PORT --project studio-bycristian-oss
   firebase functions:secrets:set SMTP_USER --project studio-bycristian-oss
   firebase functions:secrets:set SMTP_PASSWORD --project studio-bycristian-oss
   firebase functions:secrets:set SMTP_FROM --project studio-bycristian-oss
   firebase functions:secrets:set BOOKING_LINK_SECRET --project studio-bycristian-oss
   firebase functions:secrets:set PUBLIC_SITE_URL --project studio-bycristian-oss
   ```

   `BOOKING_LINK_SECRET` should be at least 32 random bytes. `PUBLIC_SITE_URL` should be `https://www.studiobycristian.com`. Verify SPF, DKIM and DMARC for the Studio SMTP sender before sending production mail.

4. Deploy Functions and all rules/indexes:

   ```sh
   npm --prefix functions run build
   firebase deploy --only functions,firestore,storage --project studio-bycristian-oss
   ```

5. Bootstrap the initial admin with Application Default Credentials that have Firebase Admin access:

   ```sh
   npm --prefix functions run bootstrap:admin -- adrian@webdynamicx.ro
   ```

   Use the one-time password setup link printed by the script, then sign in at `/admin/login`.

## Vercel environment

Copy every public key listed in `.env.example` to Production, Preview and Development environments in the Vercel project. The actual web values are in the ignored `.env.local`. Do not put SMTP or Admin SDK credentials in Vercel; Functions reads those values from Firebase Secret Manager.

## Acceptance commands

```sh
npm run typecheck
npm run lint
npm test
npm --prefix functions run build
npm --prefix functions test
npm run test:rules
npm run build
npm audit --omit=dev
npm --prefix functions audit --omit=dev
```

For emulator E2E, set `NEXT_PUBLIC_USE_FIREBASE_EMULATORS=true`, start the Emulator Suite and Next.js, then exercise the public wizard and both role types. Before production launch, set the real schedule in Admin, send SMTP test messages for every template, confirm the 24-hour scheduler, validate cookie withdrawal, and obtain legal approval for the three English legal pages.
