/**
 * The 404 page, ejected from theme-classic so it can point people somewhere
 * useful instead of telling them to contact whoever linked them.
 *
 * Apache serves the built 404.html for any missing URL under /docs/ (see
 * static/.htaccess), and the client router renders this for the real path.
 */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {useLocation} from '@docusaurus/router';
import type {Props} from '@theme/NotFound/Content';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

const SUGGESTIONS = [
  {to: '/intro', label: 'Introduction', hint: 'What KitsuneCommand is and what it does'},
  {to: '/getting-started/installation', label: 'Installation', hint: 'Getting the mod onto your server'},
  {to: '/troubleshooting', label: 'Troubleshooting', hint: 'Symptoms, causes and fixes'},
  {to: '/blog', label: 'Changelog', hint: "What's new in each release"},
];

const ISSUES_URL = 'https://github.com/Kitsune-Den/KitsuneCommandDocs/issues/new';

export default function NotFoundContent({className}: Props): ReactNode {
  const logo = useBaseUrl('/img/logo.png');
  const {pathname} = useLocation();
  // The static 404.html is built for /404.html, so the real path is only
  // known once the page is running in the browser.
  const isBrowser = useIsBrowser();
  const reportUrl = `${ISSUES_URL}?title=${encodeURIComponent(`Broken link: ${pathname}`)}`;

  return (
    <main className={clsx('container margin-vert--xl', styles.notFound, className)}>
      <img src={logo} alt="" className={styles.logo} width={96} height={96} />
      <Heading as="h1" className={styles.title}>
        Page not found
      </Heading>
      <p className={styles.lead}>
        {isBrowser ? (
          <>
            Nothing lives at <code>{pathname}</code>.
          </>
        ) : (
          <>Nothing lives at this address.</>
        )}{' '}
        The page may have moved, or the link has a typo.
      </p>

      <ul className={styles.suggestions}>
        {SUGGESTIONS.map(({to, label, hint}) => (
          <li key={to}>
            <Link to={to} className={styles.card}>
              <span className={styles.cardLabel}>{label}</span>
              <span className={styles.cardHint}>{hint}</span>
            </Link>
          </li>
        ))}
      </ul>

      <p className={styles.report}>
        Got here from a link on this site?{' '}
        <Link to={isBrowser ? reportUrl : ISSUES_URL}>Let us know</Link> so we can fix it.
      </p>
    </main>
  );
}
