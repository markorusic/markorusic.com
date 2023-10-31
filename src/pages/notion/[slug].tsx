import * as notion from '@notionhq/client';
import {
  BlockObjectResponse,
  DatabaseObjectResponse,
  PageObjectResponse
} from '@notionhq/client/build/src/api-endpoints';
import dynamic from 'next/dynamic';
import { NotionView } from '@/components/NotionView';
import Container from '@/components/Container';

const ReactJson = dynamic(import('react-json-view'), { ssr: false });

const client = new notion.Client({ auth: process.env.NOTION_TOKEN });

export async function getStaticPaths() {
  // const db = await client.databases.query({
  //   database_id: process.env.NOTION_BLOG_DATABASE_ID,
  //   filter: {
  //     property: 'Status',
  //     status: {
  //       equals: 'Published'
  //     }
  //   }
  // });
  // const paths = db.results.map((p: DatabaseObjectResponse) => {
  //   // @ts-ignore
  //   const slug = p.properties.Slug?.rich_text[0]?.plain_text;
  //   return { params: { slug } };
  // });
  return {
    paths: [],
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const postId = await client.databases
    .query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: params.slug
        }
      }
    })
    .then((data) => (data.results[0] as PageObjectResponse | undefined).id);

  const blocks = await client.blocks.children
    .list({ block_id: postId })
    .then((res) => res.results as BlockObjectResponse[]);

  return { props: { blocks } };
}

export default function Notion({ html, blocks, recordMap }) {
  return (
    <Container className="grid grid-cols-2 gap-4">
      <div className="p-4 border border-gray-400">
        <ReactJson src={blocks} theme="monokai" />
      </div>
      <div className="p-4 border border-gray-400">
        <NotionView blocks={blocks} />
      </div>
    </Container>
  );
}
