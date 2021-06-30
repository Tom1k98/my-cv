import React from "react";
import Head from "next/head";

const HeadLayout = ({ language }) => {
  return (
    <Head>
      <title>
        {language === "cz"
          ? "Tomáš Štorc | Linux specialista a JavaScript vývojář"
          : "Tomáš Štorc | Linux specialist and JavaScript developer"}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
    </Head>
  );
};

export default HeadLayout;
