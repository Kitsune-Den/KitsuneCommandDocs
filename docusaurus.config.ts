import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'KitsuneCommand',
  tagline: 'Web-based server management for 7 Days to Die',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://kitsunecommand.kitsuneden.net',
  baseUrl: '/docs/',

  organizationName: 'Kitsune-Den',
  projectName: 'KitsuneCommandDocs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  clientModules: [require.resolve('./src/clientModules/matomo.ts')],

  // SEO: structured data + meta tags injected into every page's <head>.
  // The JSON-LD blob tells Google this is a SoftwareApplication (vs a
  // generic blog/docs site), which unlocks software-style rich results
  // — version, license, "free" badge — instead of plain text snippets.
  headTags: [
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'KitsuneCommand',
        operatingSystem: 'Windows, Linux',
        applicationCategory: 'DeveloperApplication',
        description:
          'Open-source web management panel and REST API for 7 Days to Die dedicated servers. Real-time monitoring, player management, mod uploads, scheduled backups, vote rewards, and more.',
        url: 'https://kitsunecommand.kitsuneden.net/docs/',
        license: 'https://github.com/Kitsune-Den/KitsuneCommand/blob/main/LICENSE',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        author: {
          '@type': 'Organization',
          name: 'Kitsune-Den',
          url: 'https://kitsuneden.net',
        },
      }),
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl:
            'https://github.com/Kitsune-Den/KitsuneCommandDocs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/Kitsune-Den/KitsuneCommandDocs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/hero-logo.png',
    // Default meta tags emitted into every page's <head>. Per-page frontmatter
    // (description, keywords, image) overrides these — so use this for the
    // sitewide fallback and write tighter descriptions per-page where it
    // matters for search ranking.
    metadata: [
      {
        name: 'description',
        content:
          'Open-source web management panel and REST API for 7 Days to Die dedicated servers. Real-time monitoring, player management, mod uploads, scheduled backups, vote rewards, and more.',
      },
      {
        name: 'keywords',
        content:
          '7 days to die, 7d2d, dedicated server, server management, server panel, web admin, mod manager, vote rewards, blood moon, KitsuneCommand',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'KitsuneCommand' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'KitsuneCommand',
      logo: {
        alt: 'Kitsune-Den',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Changelog', position: 'left'},
        {
          href: 'https://github.com/Kitsune-Den/KitsuneCommand',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/intro',
            },
            {
              label: 'Installation',
              to: '/getting-started/installation',
            },
          ],
        },
        {
          title: 'Kitsune-Den',
          items: [
            {
              label: 'kitsuneden.net',
              href: 'https://kitsuneden.net',
            },
            {
              label: 'Ko-fi',
              href: 'https://ko-fi.com/adainthelab',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'KitsuneCommand on GitHub',
              href: 'https://github.com/Kitsune-Den/KitsuneCommand',
            },
            {
              label: 'Docs source',
              href: 'https://github.com/Kitsune-Den/KitsuneCommandDocs',
            },
            {
              label: 'Privacy',
              href: 'https://kitsuneden.net/privacy/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kitsune-Den. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
