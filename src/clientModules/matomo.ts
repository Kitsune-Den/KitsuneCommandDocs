// Matomo analytics (site 2: kitsunecommand.kitsuneden.net landing + docs).
//
// Two responsibilities:
//   1. Bootstrap the tracker on initial load (first Docusaurus render).
//   2. Fire trackPageView on every SPA route change so sub-page navigation
//      actually gets counted — Docusaurus is a SPA, so without this hook
//      only the entry page would register.

const TRACKER_URL = '//analytics.kitsuneden.net/';
const SITE_ID = '2';

declare global {
  interface Window {
    _paq?: unknown[];
  }
}

if (typeof window !== 'undefined') {
  const paq = (window._paq = window._paq || []);
  paq.push(['trackPageView']);
  paq.push(['enableLinkTracking']);
  paq.push(['setTrackerUrl', TRACKER_URL + 'matomo.php']);
  paq.push(['setSiteId', SITE_ID]);

  const d = document;
  const g = d.createElement('script');
  const s = d.getElementsByTagName('script')[0];
  g.async = true;
  g.src = TRACKER_URL + 'matomo.js';
  s.parentNode!.insertBefore(g, s);
}

export function onRouteDidUpdate({
  location,
  previousLocation,
}: {
  location: Location;
  previousLocation: Location | null;
}) {
  if (!previousLocation || location.pathname === previousLocation.pathname) {
    return;
  }
  // Wait one tick so react-helmet-async updates document.title
  // before we capture it for the tracked pageview.
  setTimeout(() => {
    if (!window._paq) return;
    window._paq.push([
      'setReferrerUrl',
      previousLocation.pathname + previousLocation.search,
    ]);
    window._paq.push(['setCustomUrl', location.pathname + location.search]);
    window._paq.push(['setDocumentTitle', document.title]);
    window._paq.push(['deleteCustomVariables', 'page']);
    window._paq.push(['trackPageView']);
  }, 0);
}
