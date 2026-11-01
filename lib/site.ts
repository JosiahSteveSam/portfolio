/**
 * The canonical origin, in one place.
 *
 * Set `SITE_URL` once a domain is chosen. On Vercel it falls back to the project's production
 * domain, which Vercel provides as `VERCEL_PROJECT_PRODUCTION_URL`.
 */
export const SITE_URL =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
