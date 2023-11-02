import * as notion from '@notionhq/client';
import {
  BlockObjectResponse,
  DatabaseObjectResponse
} from '@notionhq/client/build/src/api-endpoints';
import { richText } from './notion-utils';

export const notionClient = new notion.Client({
  auth: process.env.NOTION_TOKEN
});

export const getWordCount = (blocks: BlockObjectResponse) => {
  // TODO
  return 10;
};

export const getBlocks = (id: string) =>
  notionClient.blocks.children
    .list({ block_id: id })
    .then((res) => res.results as BlockObjectResponse[]);

export const getDatabase = async <T>(id: string): Promise<T[]> => {
  const db = await notionClient.databases.query({ database_id: id });
  const formattedResults = db.results.map((result: DatabaseObjectResponse) => {
    const formattedResult: Record<string, string | null> = { id: result.id };
    for (const key in result.properties) {
      const property = result.properties[key];
      let value = null;
      if (property.type === 'rich_text') {
        // @ts-ignore
        value = richText(property.rich_text);
      }
      if (property.type === 'title') {
        // @ts-ignore
        value = richText(property.title);
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
