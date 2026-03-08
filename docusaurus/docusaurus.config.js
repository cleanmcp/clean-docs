// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Clean',
  tagline: 'Persistent codebase memory for AI coding agents',
  favicon: 'img/favicon.svg',
  url: 'https://docs.useclean.dev',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Clean',
        logo: {
          alt: 'Clean',
          src: 'img/logo-light.svg',
          srcDark: 'img/logo-dark.svg',
          href: 'https://useclean.dev',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            position: 'left',
            label: 'API reference',
          },
          {
            href: 'https://github.com/useclean',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            to: '/getting-started/quickstart',
            label: 'Get Started',
            position: 'right',
            className: 'navbar-cta',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Quickstart', to: '/getting-started/quickstart'},
              {label: 'API reference', to: '/api-reference/overview'},
            ],
          },
          {
            title: 'Links',
            items: [
              {label: 'GitHub', href: 'https://github.com/useclean'},
              {label: 'X / Twitter', href: 'https://x.com/usecleandev'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Clean.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'python', 'nginx', 'yaml', 'powershell'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
