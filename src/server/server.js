import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import App from "../App";
import GlobalStyle from "../globalStyle";

const PORT = 8000;

const app = express();

//first check if the url match build folder entries (except index.html)
app.use(
  express.static(path.resolve(__dirname, "../..", "build"), {
    index: false,
  })
);

app.get("*", (req, res, next) => {
  const { path: location } = req;
  const context = {};
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(`ERROR: `, err);
      return res.status(500).send("Some error happens");
    }

    const sheet = new ServerStyleSheet();
    let html = "";
    let styleTags = "";
    try {
      html = renderToString(
        <StyleSheetManager sheet={sheet.instance}>
          <>
            <GlobalStyle />
            <StaticRouter location={location} context={context}>
              <App />
            </StaticRouter>
          </>
        </StyleSheetManager>
      );
      styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
    } catch (error) {
      // handle error
      console.error(error);
    } finally {
      sheet.seal();
    }

    return res
      .status(context.statusCode === 404 ? 404 : 200)
      .send(
        data
          .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
          .replace("</head><body>", `${styleTags}</head><body>`)
      );
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
