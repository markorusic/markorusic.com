import * as notion from '@notionhq/client';
import {
  BlockObjectResponse,
  DatabaseObjectResponse
} from '@notionhq/client/build/src/api-endpoints';

const client = new notion.Client({ auth: process.env.NOTION_TOKEN });

export type Post = {
  id: string;
  title: string;
  description: string;
  slug: string;
  status: string;
  publishDate: string;
};

export const getPosts = () =>
  getDatabase<Post>(process.env.NOTION_BLOG_DATABASE_ID).then((posts) =>
    posts.filter((post) => post.status === 'Published')
  );

export const getBlocks = (id: string) =>
  client.blocks.children
    .list({ block_id: id })
    .then((res) => res.results as BlockObjectResponse[]);

const getDatabase = async <T>(id: string): Promise<T[]> => {
  const db = await client.databases.query({ database_id: id });
  const formattedResults = db.results.map((result: DatabaseObjectResponse) => {
    const formattedResult: Record<string, string | null> = { id: result.id };
    for (const key in result.properties) {
      const property = result.properties[key];
      let value = null;
      if (property.type === 'rich_text') {
        // @ts-ignore
        value = property.rich_text?.map((item) => item.plain_text)?.join('');
      }
      if (property.type === 'title') {
        // @ts-ignore
        value = property.title?.map((item) => item.plain_text)?.join('');
      }
      if (property.type === 'status') {
        // @ts-ignore
        value = property.status.name;
      }
      if (property.type === 'date') {
        // @ts-ignore
        value = property.date?.start;
      }
      formattedResult[key.toLowerCase()] = value ?? null;
    }
    return formattedResult;
  });

  return formattedResults as T[];
};
