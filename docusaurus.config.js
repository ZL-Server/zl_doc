const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
    title: 'ZL Server Wiki',
    tagline: '感谢每一位玩家的到来💡',
    url: 'https://docsnew.tblstudio.cn',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'wling-art', // Usually your GitHub org/user name.
    projectName: 'ZL', // Usually your repo name.

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/wling-art/zl_doc/tree/main/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/wling-art/zl_doc/tree/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'ZL Server Wiki',
                logo: {
                    alt: 'ZL Logo',
                    src: 'img/favicon.ico',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: '教程',
                    },
                    { to: '/blog', label: '日志', position: 'left' },
                    {
                        href: 'https://github.com/wling-art/zl_doc',
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
                                label: '教程',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/wling-art/zl_doc/tree/main/docs',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} ZL, Inc. Built with Docusaurus.`,
            },
            prism: {
                darkTheme: darkCodeTheme,
                theme: lightCodeTheme,
            },
        }),
});
