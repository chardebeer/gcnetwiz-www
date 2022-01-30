import React from "react";



export default {
  plugins: ["react-static-plugin-svg", "react-static-plugin-styled-components", "react-static-plugin-reach-router", "react-static-plugin-sitemap",
],

  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="en-US">
      <Head>
        <meta image="https://ibb.co/2PNL91c"/>
        <meta title="Tradeacade"/>
        <meta description="Welcome to Tradeacade"/>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  devServer: {
    port: 1234,
    host: '127.0.0.1',
  }
}
