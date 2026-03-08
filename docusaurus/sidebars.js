/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      items: [
        'intro',
        'getting-started/quickstart',
        'getting-started/installation',
      ],
    },
    {
      type: 'category',
      label: 'Core concepts',
      items: [
        'concepts/how-it-works',
        'concepts/semantic-search',
        'concepts/toon-format',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/connect-agent',
        'guides/self-hosting',
        'guides/github-integration',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/options',
        'configuration/supported-agents',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/roadmap',
        'resources/faq',
        'resources/contributing',
      ],
    },
  ],
  apiSidebar: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: ['api-reference/overview'],
    },
    {
      type: 'category',
      label: 'REST endpoints',
      items: [
        'api-reference/search',
        'api-reference/index-repo',
        'api-reference/list-repos',
        'api-reference/repo-status',
      ],
    },
    {
      type: 'category',
      label: 'MCP tools',
      items: ['api-reference/mcp-tools'],
    },
  ],
};

export default sidebars;
