import React from "react";
import { Helmet } from "react-helmet";
import { Link, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  const defaultLocale = "";
  const url = "";
  const metaOgImageUrl = "";
  return (
    <>
      <div>
        <Helmet
          defer={false}
          htmlAttributes={{
            lang: defaultLocale,
          }}
          link={[{ rel: "canonical", href: url }]}
          meta={[
            { property: "og:url", content: url },
            {
              property: "og:image",
              content: metaOgImageUrl,
            },
            { property: "og:site_name", content: "Demo App" },
            /*{property: 'fb:app_id', content: facebookAppId},
            {name: 'apple-itunes-app', content: appStoreIdContent},
            {name: 'google-play-app', content: androidStoreIdContent},*/
          ]}
        />
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
