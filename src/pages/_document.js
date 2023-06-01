import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          defer
          // dangerouslySetInnerHTML={{
          //   __html: `(function(d){var s = d.createElement("script");s.setAttribute("data-account", "BVDvm0tQ0l");s.setAttribute("src", "https://cdn.userway.org/widget.js");(d.body || d.head).appendChild(s);})(document)`,
          // }}
          dangerouslySetInnerHTML={{
            __html: `(function(d){var s = d.createElement("script");s.setAttribute("data-account", "BVDvm0tQ0l");s.setAttribute("src", "https://cdn.userway.org/widget.js");(d.body || d.head).appendChild(s);})(document)`,
          }}
        ></script>
      </body>
    </Html>
  );
}
