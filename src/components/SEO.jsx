import React from 'react'
import Head from 'next/head'

export default function SEO() {
  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1  maximum-scale=1, user-scalable=0'
      />
      <meta charSet='utf-8' />
      <title>Zamin</title>
      <meta name='description' content='Zamin' />
      <meta name='keywords' content='zamin' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Zamin' key='ogtitle' />
      <meta property='og:description' content='Zamin' key='ogdesc' />
      <meta property='og:site_name' content='Zamin' key='ogsitename' />
      {/* <meta property='og:image' content='/images/banner.jpg' key='ogimage' /> */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content='Zamin' />
      <meta name='twitter:description' content='Zamin' />
      <meta name='twitter:site' content='Zamin' />
      <meta name='twitter:creator' content='Udevs' />
      {/* <meta name='twitter:image' content='/images/banner.jpg' /> */}
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
