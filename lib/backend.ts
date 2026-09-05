/**
 * Authoritative Backend URL Resolver
 * 
 * Priority:
 * 1. BACKEND_INTERNAL_URL (Server-side internal or direct Render URL)
 * 2. NEXT_PUBLIC_API_BASE_URL (Configured in Vercel / environment)
 * 3. BACKEND_API_URL (Standard config)
 * 4. BACKEND_URL (Legacy fallback)
 * 
 * Safety Rule:
 * In production, a request MUST NEVER silently fall back to localhost:3000.
 * If required environment variables are missing in production, fail explicitly.
 */
export function getBackendUrl(): string {
  const url = process.env.BACKEND_INTERNAL_URL || 
              process.env.NEXT_PUBLIC_API_BASE_URL || 
              process.env.BACKEND_API_URL || 
              process.env.BACKEND_URL;

  if (url && url.trim()) {
    return url.trim().replace(/\/$/, '');
  }

  const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1';
  if (isProduction) {
    throw new Error(
      'FATAL_CONFIG_ERROR: Authoritative backend URL is not configured in production. ' +
      'Set BACKEND_INTERNAL_URL or NEXT_PUBLIC_API_BASE_URL.'
    );
  }

  // Local development fallback only
  return 'http://localhost:3000';
}
