import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = process.env.SITE_BASE || (isGithubActions && repoName ? `/${repoName}` : '/');
const site = process.env.SITE_URL || 'https://www.techtrutz.de';

export default defineConfig({
  site,
  base,
  integrations: [tailwind({ applyBaseStyles: false })],
  output: 'static'
});
