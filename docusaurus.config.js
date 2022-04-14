// const path = require('path')

module.exports = {
  title: 'Zeplo',
  tagline: 'Magical request queues for serverless',
  url: 'https://zeplo.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'zeplo', // Usually your GitHub org/user name.
  projectName: 'site', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    posthog: {
      apiKey: 'phc_bnhdghRYJEmiSxn5knZPsZuf3g2k7LdBAEKQkPEB4Hw',
      // appUrl: 'https://zeplo.io', // optional
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
          to: 'blog',
          label: 'Blog',
          position: 'right',
        },
        {
          to: 'https://console.zeplo.io',
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
              to: 'https://zeplo.statuspage.io/',
            },
            {
              label: 'Stack Overflow',
              to: 'https://stackoverflow.com/questions/tagged/zeplo',
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/zeploio',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/zeplo',
            },
            {
              label: 'Privacy',
              to: '/privacy',
            },
            {
              label: 'Terms',
              to: '/terms',
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
        gtag: {
          trackingID: 'G-HLPGYDM6N5',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: ['posthog-docusaurus'],
  // plugins: ['@docusaurus/plugin-ideal-image'],
}
