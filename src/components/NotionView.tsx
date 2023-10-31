import { FC, Fragment, ReactNode, createElement } from 'react';
import clsx from 'clsx';
import {
  BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  CodeBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ImageBlockObjectResponse,
  ParagraphBlockObjectResponse,
  RichTextItemResponse
} from '@notionhq/client/build/src/api-endpoints';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl as syntaxHighlighterStyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type BlockComponent<T extends BlockObjectResponse = BlockObjectResponse> = FC<{
  block: T;
}>;

type BlockComponentMap = Partial<
  Record<BlockObjectResponse['type'], BlockComponent>
>;

type NotionViewProps = {
  blocks?: BlockObjectResponse[];
};

export const NotionView: FC<NotionViewProps> = ({ blocks = [] }) => {
  return (
    <article className="prose dark:prose-invert">
      {blocks.map((block) => {
        const component = blockComponentMap[block.type];
        const element = component ? createElement(component, { block }) : null;
        return <Fragment key={block.id}>{element}</Fragment>;
      })}
    </article>
  );
};

const Todo: BlockComponent = ({ block }) => {
  return <div>{block.id}</div>;
};

const Heading1: BlockComponent<Heading1BlockObjectResponse> = ({ block }) => {
  return (
    <h1>
      <RichText text={block.heading_1.rich_text} />
    </h1>
  );
};
const Heading2: BlockComponent<Heading2BlockObjectResponse> = ({ block }) => {
  return (
    <h2>
      <RichText text={block.heading_2.rich_text} />
    </h2>
  );
};
const Heading3: BlockComponent<Heading3BlockObjectResponse> = ({ block }) => {
  return (
    <h3>
      <RichText text={block.heading_3.rich_text} />
    </h3>
  );
};
const Paragraph: BlockComponent<ParagraphBlockObjectResponse> = ({ block }) => {
  return (
    <p>
      <RichText text={block.paragraph.rich_text} />
    </p>
  );
};
// TODO: wrap all sequential bulleted list items in <ul />
const BulletedListItem: BlockComponent<BulletedListItemBlockObjectResponse> = ({
  block
}) => {
  return (
    <li>
      <RichText text={block.bulleted_list_item.rich_text} />
    </li>
  );
};
const Image: BlockComponent<ImageBlockObjectResponse> = ({ block }) => {
  const src =
    block.image.type === 'external'
      ? block.image.external.url
      : block.image.file.url;
  return <img src={src} alt={richText(block.image.caption)} />;
};
const Code: BlockComponent<CodeBlockObjectResponse> = ({ block }) => {
  return (
    <SyntaxHighlighter
      language={block.code.language}
      style={syntaxHighlighterStyle}
      wrapLongLines
    >
      {richText(block.code.rich_text)}
    </SyntaxHighlighter>
  );
};

const blockComponentMap: BlockComponentMap = {
  heading_1: Heading1,
  heading_2: Heading2,
  heading_3: Heading3,
  paragraph: Paragraph,
  bulleted_list_item: BulletedListItem,
  image: Image,
  code: Code,
  divider: Todo
};

const richText = (text: RichTextItemResponse[]) =>
  text.map((t) => t.plain_text).join('');

const RichText: FC<{ text: RichTextItemResponse[] }> = ({ text }) => {
  return (
    <>
      {text.map((item, index) => {
        const style = getTextStyle(item.annotations);
        let element: ReactNode = item.plain_text;

        if (item.type === 'text') {
          const { content, link } = item.text;
          if (link) {
            element = (
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {element}
              </a>
            );
          } else {
            element = content;
          }
        }

        if (style !== '') {
          return (
            <span key={index} className={style}>
              {element}
            </span>
          );
        }

        return <Fragment key={index}>{element}</Fragment>;
      })}
    </>
  );
};

const colorMap: Partial<
  Record<RichTextItemResponse['annotations']['color'], string>
> = {
  gray: 'text-gray-300'
};

const getTextStyle = (annotation: RichTextItemResponse['annotations']) =>
  clsx(colorMap[annotation.color], {
    'font-bold': annotation.bold,
    italic: annotation.italic,
    underline: annotation.underline,
    'line-through': annotation.strikethrough,
    'bg-gray-200 text-black dark:text-white dark:bg-gray-600 font-medium px-1 py-0.5 rounded':
      annotation.code
  });
