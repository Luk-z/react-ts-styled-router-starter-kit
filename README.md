# Installation

```
yarn install
yarn start
```

# Start from scratch

```
yarn create react-app my-app --template typescript && cd my-app
yarn add styled-components @types/styled-components react-router-dom @types/react-router-dom react-helmet @types/react-helmet
yarn add -D babel-plugin-styled-components
```

Add `resolutions` property to `package.json`:

```jsx
//package.json
{
  ...
  "resolutions": {
    "styled-components": "^5"
  }
}
```

Run `yarn install`.

Create `.babelrc` file:

```jsx
//.babelrc
{
  "plugins": [
    ["babel-plugin-styled-components", { "ssr": true }]
  ]
}
```

Add `.eslintcache` to `.gitignore`

```
//.gitignore

...

# ESLint cache
.eslintcache
```

Add `.eslintignore` file

```
//.eslintignore
node_modules
coverage
build
```

Add `.gitattributes` file

```
//.gitattributes
* text=auto eol=lf
```

Add `.prettierignore` file

```
//.prettierignore
node_modules
coverage
build
```

Add `.prettierrc` file

```
//.prettierrc
{
    "arrowParens": "avoid",
    "bracketSpacing": false,
    "endOfLine": "lf",
    "htmlWhitespaceSensitivity": "css",
    "insertPragma": false,
    "jsxBracketSameLine": false,
    "jsxSingleQuote": false,
    "printWidth": 80,
    "proseWrap": "always",
    "quoteProps": "as-needed",
    "requirePragma": false,
    "semi": false,
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "all",
    "useTabs": false
  }
```

Now edit files:

remove `index.css` and create `globalStyle.ts`:

```
//src/globalStyle.ts
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`
export default GlobalStyle
```

replace `index.tsx` with (just added `<GlobalStyle />` component ):

```
//src/index.tsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import GlobalStyle from './globalStyle'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
```

replace `App.tsx` with:

```
//src/App.tsx
import React from 'react'
import {Helmet} from 'react-helmet'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  const defaultLocale = ''
  const url = ''
  const metaOgImageUrl = ''
  return (
    <BrowserRouter>
      <div>
        <Helmet
          defer={false}
          htmlAttributes={{
            lang: defaultLocale,
          }}
          link={[{rel: 'canonical', href: url}]}
          meta={[
            {property: 'og:url', content: url},
            {
              property: 'og:image',
              content: metaOgImageUrl,
            },
            {property: 'og:site_name', content: 'Demo App'},
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
    </BrowserRouter>
  )
}

export default App
```

create `Logo.tsx` file:

```
//src/components/Logo.tsx
import styled from 'styled-components'
import logo from '../logo.svg'

const AppContainer = styled.div`
  text-align: center;
`
const AppLogoContainer = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    & {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
const AppHeaderContainer = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const AppLinkContainer = styled.a`
  color: #61dafb;
`

const Logo: React.FC = () => (
  <AppContainer>
    <AppHeaderContainer>
      <AppLogoContainer src={logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <AppLinkContainer
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </AppLinkContainer>
    </AppHeaderContainer>
  </AppContainer>
)

export default Logo
```

create `Home.tsx` file:

```
//src/pages/Home.tsx
import {Helmet} from 'react-helmet'
import Logo from '../components/Logo'

const Home: React.FC = () => (
  <div>
    <Helmet>
      <title>Home - React Demo</title>
    </Helmet>
    <Logo />
  </div>
)

export default Home
```

create `About.tsx` file:

```
//src/pages/About.tsx
import {Helmet} from 'react-helmet'

const About: React.FC = () => (
  <div>
    <Helmet>
      <title>About - React Demo</title>
    </Helmet>
    About
  </div>
)

export default About
```

Run:

```
yarn install
yarn start
```

# Fork

You cannot always make a branch or pull an existing branch and push back to it,
because you are not registered as a collaborator for that specific project.

Forking is nothing more than a clone on the GitHub server side:

- without the possibility to directly push back
- with fork queue feature added to manage the merge request

You keep a fork in sync with the original project by:

- adding the original project as a remote
- fetching regularly from that original project
- rebase your current development on top of the branch of interest you got
  updated from that fetch.

[source](https://stackoverflow.com/questions/3611256/forking-vs-branching-in-github)

## Don't fork into the same account

Duplicating the repository If the new repository absolutely must be owned by the
same account, you can duplicate the repository. This creates a new repository
that starts out identical to the original repository but is not a fork. For more
information, see
[Duplicating a repository](https://help.github.com/articles/duplicating-a-repository/).

Because the new repository is not a fork, you won’t be able to create pull
requests between the two repositories. However, you can still push and pull
changes between the two repositories by adding the original repository as remote
for the new repository. For more information, see
[Adding a remote](https://help.github.com/articles/adding-a-remote/).

[source](https://github.community/t/alternatives-to-forking-into-the-same-account/10200)

## Duplicate repository

- `git clone --bare https://github.com/Luk-z/react-typescript-styled-router-starter-kit.git`
- `cd react-typescript-styled-router-starter-kit`
- `git push --mirror https://github.com/Luk-z/react-typescript-styled-router-starter-kit-NEW.git`
- `cd ..`
- `rm -rf react-typescript-styled-router-starter-kit`

[source](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository)

# Getting Started with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
