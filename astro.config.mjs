export const myDEPLOYMENT_ASTRO_SITE_CONFIG = process.env.DEPLOYMENT_ASTRO_SITE_CONFIG;
export const myDEPLOYMENT_ASTRO_BASE_CONFIG = process.env.DEPLOYMENT_ASTRO_BASE_CONFIG;

import { defineConfig, passthroughImageService } from 'astro/config';
// import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'CodeRagnarok',
    customCss: ['./src/styles/ui_components.css', './src/styles/theme.css'],
    social: [
      {
        label: 'Discord',
        href: 'https://discordapp.com/users/355587084515540992',
        icon: 'discord'
      },
      {
        label: 'GitHub',
        href: 'https://github.com/CodeRagnarok07',
        icon: 'github'
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/angelriera/',
        icon: 'linkedin'
      }
    ],
  }), sitemap(), react()],

  image: {
    service: passthroughImageService()
  },


  site: `${myDEPLOYMENT_ASTRO_SITE_CONFIG || 'https://coderagnarok07.github.io/'}`,
  base: `${myDEPLOYMENT_ASTRO_BASE_CONFIG || '/'}`,

  vite: {
    plugins: [tailwindcss()]
  }
});