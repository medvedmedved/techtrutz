import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.techtrutz.de',
  integrations: [tailwind({ applyBaseStyles: false })],
  output: 'static'
});
