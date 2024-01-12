import { defineConfig } from 'astro/config';
// import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'home',
      sidebar: [
				{
					label: 'Python',
					autogenerate: { directory: 'blog/python' },
        }]
    }),
    sitemap(), 
    tailwind(), 
   
  ],
  site: 'https://coderagnarok07.github.io/'
  // base: '/',
});