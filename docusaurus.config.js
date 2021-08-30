const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const currentYear = new Date().getFullYear();
const copyrightYear = currentYear !== 2021 ? `2021-${currentYear}` : '2021';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Monun Docs',
  tagline: '',
  url: 'https://monun.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'HyeonWorks', // Usually your GitHub org/user name.
  projectName: 'monun-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'monun',
      logo: {
        alt: 'monun',
        src: 'img/logo1.svg',
        srcDark: 'img/77531416_negative.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'Home Docs/Index',
          label: 'Home',
          position: 'left'
        },
        {
          type: 'doc',
          docId: 'Dev Docs/Index',
          label: 'Dev',
          position: 'left'
        },
        {
          type: 'doc',
          docId: 'Usage Docs/Index',
          label: 'Usage',
          position: 'left'
        },

        // {
        //   label: 'Docs',
        //   position: 'left', // or 'right'
        //   items: [
        //     {
        //       label: 'Home Docs',
        //       to: 'docs/Home Docs/Index',
        //     },
        //     {
        //       label: 'Dev Docs Docs',
        //       to: 'docs/Dev Docs Docs/Index',
        //     },
        //     {
        //       label: 'Usage Docs Docs',
        //       to: 'docs/Usage Docs Docs/Index',
        //     },
        //   ],
        //
        // },
        {
          href: 'https://github.com/HyeonWorks/monun-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        
      ],
      copyright: `Copyright © ${copyrightYear} Docs Team. Licensed under CC BY-SA 4.0.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '☀️',
      }
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/hyeonworks/monun-docs/edit/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
};
