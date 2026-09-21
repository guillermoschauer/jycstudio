import type { NextConfig } from "next";
import { LEGACY, SITE } from "./lib/site";

/**
 * Domain migration — JYC Studio → Schauer Labs.
 *
 * Every legacy host is sent to the new canonical origin with its path intact
 * (`/casos/sacaturno` lands on `https://schauerlabs.com/casos/sacaturno`, not on
 * the home page), in a single hop and with no redirect chains. `permanent: true`
 * emits 308, the method-preserving equivalent of a 301 — see
 * node_modules/next/dist/docs/01-app/03-api-reference/05-config/01-next-config-js/redirects.md
 *
 * Host rules only fire for the hosts listed below, so *.vercel.app previews and
 * localhost are untouched.
 */
const CANONICAL_HOST = new URL(SITE.url).host;

const nextConfig: NextConfig = {
  async redirects() {
    const legacy = LEGACY.hosts.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: `${SITE.url}/:path*`,
      permanent: true,
    }));

    return [
      ...legacy,
      // www → apex on the new domain (Vercel usually handles this at the domain
      // level; kept here so the behaviour is guaranteed by the app itself).
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: `www.${CANONICAL_HOST}` }],
        destination: `${SITE.url}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
