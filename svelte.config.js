import { adapter } from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/my-photography-blog' : ''
    },
    appDir: 'app'
  }
};

export default config;
