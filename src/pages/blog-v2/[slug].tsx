import { GetStaticPaths, GetStaticProps } from 'next';
import * as notion from '@notionhq/client';
import {
  BlockObjectResponse,
  DatabaseObjectResponse,
  PageObjectResponse
} from '@notionhq/client/build/src/api-endpoints';
import { NotionView } from '@/components/NotionView';
import Container from '@/components/Container';
import SayHello from '@/components/SayHello';

// import dynamic from 'next/dynamic';
// const ReactJson = dynamic(import('react-json-view'), { ssr: false });

const client = new notion.Client({ auth: process.env.NOTION_TOKEN });

export const getStaticPaths: GetStaticPaths = async () => {
  const db = await client.databases.query({
    database_id: process.env.NOTION_BLOG_DATABASE_ID,
    filter: {
      property: 'Status',
      status: {
        equals: 'Published'
      }
    }
  });
  const paths = db.results.map((p: DatabaseObjectResponse) => {
    // @ts-ignore
    const slug = p.properties.Slug?.rich_text[0]?.plain_text;
    return { params: { slug } };
  });
  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = await client.databases
    .query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: params.slug as string
        }
      }
    })
    .then((data) => (data.results[0] as PageObjectResponse | undefined).id);

  const blocks = await client.blocks.children
    .list({ block_id: postId })
    .then((res) => res.results as BlockObjectResponse[]);

  return { props: { blocks }, revalidate: 5 * 60 };
};

export default function Notion({ blocks }) {
  return (
    <Container>
      <div className="flex gap-8 flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <NotionView blocks={blocks} />
        <div className="w-full">
          <SayHello />
        </div>
      </div>
    </Container>
  );
}
