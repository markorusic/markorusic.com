import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export const richText = (text: RichTextItemResponse[] | undefined) =>
  text?.map((t) => t.plain_text)?.join('');
