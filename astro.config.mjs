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
  site: 'https://coderagnarok07.github.io/',
  image: {
    service: passthroughImageService()
  },
  customCss: ['./src/styles/ui_components.css', './src/styles/theme.css']
  // base: '/',
});