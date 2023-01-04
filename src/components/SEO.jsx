import React from "react";
import Head from "next/head";

export default function SEO() {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1  maximum-scale=1, user-scalable=0"
      />
      <meta charSet="utf-8" />
      <title>Zamin</title>
      <meta name="description" content="Zamin" />
      <meta name="keywords" content="zamin" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Zamin" key="ogtitle" />
      <meta property="og:description" content="Zamin" key="ogdesc" />
      <meta property="og:site_name" content="Zamin" key="ogsitename" />
      {/* <meta property='og:image' content='/images/banner.jpg' key='ogimage' /> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Zamin" />
      <meta name="twitter:description" content="Zamin" />
      <meta name="twitter:site" content="Zamin" />
      <meta name="twitter:creator" content="Udevs" />
      <script
        defer
        dangerouslySetInnerHTML={{
          __html: `(function(d){
              var s = d.createElement("script");
              /* uncomment the following line to override default position*/
              /* s.setAttribute("data-position", 1);*/
              /* uncomment the following line to override default size (values: small, large)*/
              /* s.setAttribute("data-size", "large");*/
              /* uncomment the following line to override default language (e.g., fr, de, es, he, nl, etc.)*/
              /* s.setAttribute("data-language", "null");*/
              /* uncomment the following line to override color set via widget (e.g., #053f67)*/
              s.setAttribute("data-color", "#09999A");
              /* uncomment the following line to override type set via widget (1=person, 2=chair, 3=eye, 4=text)*/
              /* s.setAttribute("data-type", "1");*/
              /* s.setAttribute("data-statement_text:", "Our Accessibility Statement");*/
              /* s.setAttribute("data-statement_url", "http://www.example.com/accessibility";*/
              /* uncomment the following line to override support on mobile devices*/
              /* s.setAttribute("data-mobile", true);*/
              /* uncomment the following line to set custom trigger action for accessibility menu*/
              /* s.setAttribute("data-trigger", "triggerId")*/
              s.setAttribute("data-account", "CZDyCvecmY");
              s.setAttribute("src", "https://cdn.userway.org/widget.js");
              (d.body || d.head).appendChild(s);})(document)`,
        }}
      ></script>
      {/* <meta name='twitter:image' content='/images/banner.jpg' /> */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
