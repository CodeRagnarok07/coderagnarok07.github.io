import { defineConfig, passthroughImageService } from 'astro/config';
// import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'CodeRagnarok',
      sidebar: [
        {
          label: "PYTHON",
          autogenerate: { directory: 'blog/Python' },
          badge: `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.427 2.75C9.84419 2.75 10.2443 2.91573 10.5393 3.21072C10.8343 3.50572 11 3.90581 11 4.323V6.402C11 6.60857 10.9593 6.81312 10.8803 7.00396C10.8012 7.19481 10.6853 7.36821 10.5393 7.51428C10.3932 7.66035 10.2198 7.77621 10.029 7.85526C9.83812 7.93431 9.63357 7.975 9.427 7.975H5.5C5.5 8.1895 5.676 8.503 5.8905 8.503H8.25V9.427C8.25 9.84419 8.08427 10.2443 7.78928 10.5393C7.49428 10.8343 7.09419 11 6.677 11H4.323C3.90581 11 3.50572 10.8343 3.21072 10.5393C2.91573 10.2443 2.75 9.84419 2.75 9.427V7.3645C2.75 7.15819 2.79072 6.95391 2.86984 6.76337C2.94896 6.57283 3.06491 6.39979 3.21105 6.25416C3.35719 6.10853 3.53064 5.99319 3.72145 5.91474C3.91227 5.83629 4.11669 5.79628 4.323 5.797H7.2105C7.41681 5.797 7.62109 5.75628 7.81163 5.67716C8.00217 5.59804 8.17521 5.48209 8.32084 5.33595C8.46647 5.18981 8.58181 5.01636 8.66026 4.82555C8.73871 4.63473 8.77872 4.43031 8.778 4.224V2.75H9.427ZM7.073 9.2345C6.853 9.2345 6.677 9.3995 6.677 9.724C6.677 10.0485 6.853 10.1145 7.073 10.1145C7.12428 10.1145 7.17506 10.1044 7.22244 10.0848C7.26982 10.0652 7.31286 10.0364 7.34913 10.0001C7.38539 9.96386 7.41415 9.92082 7.43377 9.87344C7.4534 9.82606 7.4635 9.77528 7.4635 9.724C7.4635 9.3995 7.2875 9.2345 7.073 9.2345ZM1.573 8.25C1.15581 8.25 0.755716 8.08427 0.460721 7.78928C0.165726 7.49428 0 7.09419 0 6.677V4.598C0 4.39143 0.0406868 4.18688 0.119737 3.99604C0.198788 3.80519 0.314654 3.63179 0.460721 3.48572C0.755716 3.19073 1.15581 3.025 1.573 3.025H5.5C5.5 2.8105 5.324 2.497 5.1095 2.497H2.75V1.573C2.75 1.15581 2.91573 0.755716 3.21072 0.460721C3.50572 0.165726 3.90581 0 4.323 0H6.677C6.88357 0 7.08812 0.0406868 7.27896 0.119737C7.46981 0.198788 7.64321 0.314654 7.78928 0.460721C7.93535 0.606788 8.05121 0.780194 8.13026 0.971039C8.20931 1.16188 8.25 1.36643 8.25 1.573V3.6355C8.25 3.84181 8.20928 4.04609 8.13016 4.23663C8.05104 4.42717 7.93509 4.60021 7.78895 4.74584C7.64281 4.89147 7.46936 5.00681 7.27855 5.08526C7.08773 5.16371 6.88331 5.20372 6.677 5.203H3.7895C3.58319 5.203 3.37891 5.24372 3.18837 5.32284C2.99783 5.40196 2.82479 5.51791 2.67916 5.66405C2.53353 5.81019 2.41819 5.98364 2.33974 6.17445C2.26129 6.36527 2.22128 6.56969 2.222 6.776V8.25H1.573ZM3.927 1.7655C4.147 1.7655 4.323 1.6005 4.323 1.276C4.323 0.9515 4.147 0.8855 3.927 0.8855C3.7125 0.8855 3.5365 0.9515 3.5365 1.276C3.5365 1.6005 3.7125 1.7655 3.927 1.7655Z" fill="white"/>
          </svg>
          
          `
        }

      ],
      social: {
        discord: 'https://discordapp.com/users/355587084515540992',
        github: 'https://github.com/CodeRagnarok07',
        linkedin: 'https://www.linkedin.com/in/angelriera/',
        // email: "angelriera1796@gmail.com",
        // telegram: "04126866045"
      },
    }),
    sitemap(),
    tailwind({
      nesting: true,
    }),

  ],
  site: 'https://coderagnarok07.github.io/',
  image: {
    service: passthroughImageService(),
  },
  customCss: [
    './src/styles/ui_components.css',
    './src/styles/theme.css',
  ],
  // base: '/',
});