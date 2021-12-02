# markorusic.com

- **Framework**: [Next.js](https://nextjs.org/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Content**: [MDX](https://github.com/mdx-js/mdx)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Overview

- `data/*` - MDX data that is used for blogs, newsletters, and code snippets.
- `layouts/*` - The different page layouts each MDX category (blog, newsletter, snippets) uses.
- `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction), newsletter subscription and post views.
- `pages/blog/*` - Static pre-rendered blog pages using MDX.
- `pages/*` - All other static pages.
- `public/*` - Static assets including fonts and images.
- `scripts/*` - Two useful scripts to generate an RSS feed and a sitemap.
- `styles/*` - A small amount of global styles. I'm mostly using vanilla Tailwind CSS.

## Running Locally

```bash
$ git clone https://github.com/markorusic/markorusic.com.git
$ cd markorusic.com
$ yarn
$ yarn dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/markorusic/markorusic.com/blob/main/.env.example).
