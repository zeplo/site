// const path = require('path')

module.exports = {
  title: 'Zeplo',
  tagline: 'Zero configuration message queue',
  url: 'https://zeplo.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'zeplo', // Usually your GitHub org/user name.
  projectName: 'site', // Usually your repo name.
  themeConfig: {
    posthog: {
      apiKey: 'phc_bnhdghRYJEmiSxn5knZPsZuf3g2k7LdBAEKQkPEB4Hw',
      appUrl: 'https:/zeplo.io', // optional
      enableInDevelopment: false, // optional
    },
    navbar: {
      title: 'Zeplo',
      logo: {
        alt: 'Zeplo Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'pricing',
          label: 'Pricing',
          position: 'right',
        },
        {
          href: 'https://console.zeplo.io',
          label: 'Console',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/',
            },
            {
              label: 'Getting Started',
              to: 'docs/getting-started',
            },
            {
              label: 'FAQ',
              to: 'docs/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Status',
              href: 'https://zeplo.statuspage.io/',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/zeplo',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/zeploio',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Hiring',
              href: 'https://hirestack.ai',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/zeplo',
            },
            {
              label: 'Privacy',
              href: '/privacy',
            },
            {
              label: 'Terms',
              href: '/terms',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zeplo`,
    },
    // announcementBar: {
    //   id: 'name_change',
    //   content:
    //     '<a target="_blank" href="https://zeplo.io/blog/ralley-to-zeplo/">We’ve changed our name from Ralley to Zeplo</a>',
    //   backgroundColor: 'rgb(111, 77, 247)',
    //   textColor: '#fff',
    // },
    gtag: {
      trackingID: 'G-HLPGYDM6N5',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/zeplo/site/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/zeplo/site/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['posthog-docusaurus'],
  // plugins: ['@docusaurus/plugin-ideal-image'],
}
