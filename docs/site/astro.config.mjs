// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://thesimonho.github.io',
	base: '/dodo',
	integrations: [
		starlight({
			title: 'dodo',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/thesimonho/dodo' }],
			sidebar: [
				{ label: 'Getting Started', slug: 'getting-started' },
				{
					label: 'Guides',
					items: [
						{ label: 'Codemaps', slug: 'guides/codemaps' },
						{ label: 'References', slug: 'guides/references' },
						{ label: 'Site', slug: 'guides/site' },
						{ label: 'Plugin', slug: 'guides/plugin' },
					],
				},
				{ label: 'FAQ', slug: 'faq' },
			],
		}),
	],
});
