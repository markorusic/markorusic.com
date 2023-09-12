import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/ibm-plex-sans-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link href="favicon.ico" rel="shortcut icon" />
        <link href="site.webmanifest" rel="manifest" />
        <link
          rel="preconnect"
          href="https://cdn.usefathom.com"
          crossOrigin=""
        />
        <link
          href="apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link color="#4a9885" href="safari-pinned-tab.svg" rel="mask-icon" />
        <meta content="#000000" name="theme-color" />
        <meta content="#000000" name="msapplication-TileColor" />
        <meta content="browserconfig.xml" name="msapplication-config" />
        <meta content="14d2e73487fa6c71" name="yandex-verification" />
        <meta
          content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw"
          name="google-site-verification"
        />
      </Head>
      <body className="bg-white dark:bg-black text-white dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
