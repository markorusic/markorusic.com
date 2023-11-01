import {
  FC,
  Fragment,
  ReactNode,
  createElement,
  useEffect,
  useState
} from 'react';
import clsx from 'clsx';
import { copyText, slugify } from '@/lib/utils';
import {
  BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  CalloutBlockObjectResponse,
  CodeBlockObjectResponse,
  DividerBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ImageBlockObjectResponse,
  ParagraphBlockObjectResponse,
  QuoteBlockObjectResponse,
  RichTextItemResponse
} from '@notionhq/client/build/src/api-endpoints';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl as syntaxHighlighterStyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import ts from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('ts', ts);

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

const Heading1: BlockComponent<Heading1BlockObjectResponse> = ({ block }) => {
  return (
    <h1>
      <RichText text={block.heading_1.rich_text} />
    </h1>
  );
};
const Heading2: BlockComponent<Heading2BlockObjectResponse> = ({ block }) => {
  const id = slugify(richText(block.heading_2.rich_text));
  return (
    <h2 id={id}>
      <a className="anchor" href={`#${id}`} />
      <RichText text={block.heading_2.rich_text} />
    </h2>
  );
};
const Heading3: BlockComponent<Heading3BlockObjectResponse> = ({ block }) => {
  const id = slugify(richText(block.heading_3.rich_text));
  return (
    <h3 id={id}>
      <a className="anchor" href={`#${id}`} />
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
  const text = richText(block.code.rich_text);
  return (
    <div className="relative">
      <CopyButton className="absolute text-white top-3 right-3" text={text} />
      <SyntaxHighlighter
        language={block.code.language}
        style={syntaxHighlighterStyle}
        customStyle={{ padding: 16 }}
        wrapLongLines
      >
        {text}
      </SyntaxHighlighter>
    </div>
  );
};
const Divider: BlockComponent<DividerBlockObjectResponse> = () => {
  return <div className="w-full h-[1px] bg-gray-600 my-4" />;
};
const Quote: BlockComponent<QuoteBlockObjectResponse> = ({ block }) => {
  return (
    <div className="my-5 py-1 px-4 border-l-2 border-black dark:border-white">
      <RichText text={block.quote.rich_text} />
    </div>
  );
};
const Callout: BlockComponent<CalloutBlockObjectResponse> = ({ block }) => {
  return (
    <div className="bg-gray-200 text-black dark:text-white dark:bg-gray-800 p-4 rounded my-5">
      <RichText text={block.callout.rich_text} />
    </div>
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
  divider: Divider,
  quote: Quote,
  callout: Callout
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
  gray: 'text-gray-600 dark:text-gray-300'
};

const getTextStyle = (annotation: RichTextItemResponse['annotations']) =>
  clsx(colorMap[annotation.color], {
    'font-bold': annotation.bold,
    italic: annotation.italic,
    underline: annotation.underline,
    'line-through': annotation.strikethrough,
    'bg-gray-200 text-black dark:text-white dark:bg-gray-800 font-medium px-1 py-0.5 rounded':
      annotation.code
  });

type CopyButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

type CopyState = 'idle' | 'success' | 'error';

const CopyButton: FC<CopyButtonProps> = ({ text, ...props }) => {
  const [state, setState] = useState<CopyState>('error');

  useEffect(() => {
    if (state !== 'idle') {
      const timeout = setTimeout(() => setState('idle'), 2500);
      return () => clearTimeout(timeout);
    }
  }, [state]);

  return (
    <button
      {...props}
      onClick={(event) => {
        event.preventDefault();
        void copyText(text)
          .then(() => setState('success'))
          .catch(() => setState('error'));
      }}
    >
      <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </svg>

      {state !== 'idle' && (
        <span className="absolute -bottom-2 -translate-x-1/2 translate-y-full px-1 py-0.5 text-xs bg-gray-400 rounded">
          {state === 'success' ? 'Copied!' : 'Failed!'}
        </span>
      )}
    </button>
  );
};
