import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Home2 from "./views/Home2";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";
import { getConfig } from "./config";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(config.audience ? { audience: config.audience } : null),
  },
};

const App = () => {
  const { isLoading, error } = useAuth0();

  /*
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }*/

  return (
    <Auth0Provider
    {...providerConfig}
    cacheLocation="localstorage"
    >
      <Router history={history}>
        <div id="app" className="d-flex flex-column h-100">
          <NavBar />
          <Container className="flex-grow-1 mt-5">
            <Switch>
              <Route path="/react" exact component={Home} />
              <Route path="/react/home2" exact component={Home2} />
              <Route path="/react/about" exact component={About} />
              <Route path="/react/contact" exact component={Contact} />
              <Route path="/react/profile" component={Profile} />
              <Route path="/react/external-api" component={ExternalApi} />
            </Switch>
          </Container>
          <Footer />
        </div>
      </Router>
    </Auth0Provider>

    
  );
};

class Mfe4Element extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('react-element', Mfe4Element);

export default App;


/*
class App extends React.Component {
  render() {
    const reactVersion = require('../package.json').dependencies['react'];

    const { isLoading, error } = useAuth0();

    if (error) {
      return <div>Oops... {error.message}</div>;
    }

    if (isLoading) {
      return <Loading />;
    }

    return ([
      <Router history={history}>
        <div id="app" className="d-flex flex-column h-100">
          <NavBar />
          <Container className="flex-grow-1 mt-5">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/external-api" component={ExternalApi} />
            </Switch>
          </Container>
          <Footer />
        </div>
      </Router>
    ]);
  }
}
*/