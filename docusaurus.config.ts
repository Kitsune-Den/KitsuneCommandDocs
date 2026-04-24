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
