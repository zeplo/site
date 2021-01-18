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
          href: 'https://console.zeplo.io',
          label: 'Console',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
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
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/zeplo',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zeplo`,
    },
    announcementBar: {
      id: 'name_change',
      content:
        'We’ve changed our name from Ralley to Zeplo',
      backgroundColor: 'rgb(111, 77, 247)',
      textColor: '#fff',
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  // plugins: [
  //   [
  //     'docusaurus-plugin-module-alias',
  //     {
  //       alias: {
  //         '#': path.resolve(__dirname, '../src'),
  //       },
  //     },
  //   ],
  // ],
}
