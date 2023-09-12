import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from 'contentlayer/generated';

async function generate() {
  const feed = new RSS({
    title: 'Marko Rusić',
    site_url: `${process.env.SITE_BASE_URL}`,
    feed_url: `${process.env.SITE_BASE_URL}/feed.xml`
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `${process.env.SITE_BASE_URL}/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
