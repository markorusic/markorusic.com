export const owner = {
  name: 'Marko Rusić',
  email: 'markorusic98@gmail.com',
  twitter: 'markorusic_',
  github: 'markorusic',
  linkedin: 'markorusic'
};

export const blogConfig = {
  ISR_TTL: 10 * 60,
  CACHE_TTL: 60 * 1000,
  ENABLE_CACHE: !!process.env.ENABLE_BLOG_CACHE
};

export const featuredBlogPosts = [
  {
    title: 'Write Cleaner Reducers',
    description:
      'Create cleaner, more readable, boilerplate-free reducers applicable to any JavaScript environment',
    slug: 'write-cleaner-reducers'
  },
  {
    title: 'Hello World',
    description: 'Example post',
    slug: 'hello-world'
  }
];
