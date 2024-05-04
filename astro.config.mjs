export const myDEPLOYMENT_ASTRO_SITE_CONFIG = process.env.DEPLOYMENT_ASTRO_SITE_CONFIG;
export const myDEPLOYMENT_ASTRO_BASE_CONFIG = process.env.DEPLOYMENT_ASTRO_BASE_CONFIG;

import { defineConfig, passthroughImageService } from 'astro/config';
// import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'CodeRagnarok',
    social: {
      discord: 'https://discordapp.com/users/355587084515540992',
      github: 'https://github.com/CodeRagnarok07',
      linkedin: 'https://www.linkedin.com/in/angelriera/'
      // email: "angelriera1796@gmail.com",
      // telegram: "04126866045"
    }
  }), sitemap(), tailwind({
    nesting: true
  }), react()],
  image: {
    service: passthroughImageService()
  },
  
  customCss: ['./src/styles/ui_components.css', './src/styles/theme.css'],
  site: `${myDEPLOYMENT_ASTRO_SITE_CONFIG || 'https://coderagnarok07.github.io/'}`,
  base: `${myDEPLOYMENT_ASTRO_BASE_CONFIG || '/'}`
});