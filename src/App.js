import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import Div from './07_elements';
import Button from './08_button';
import Checkbox from './09_checkbox';
import Radio from './10_radio';
import Input from './11_input';
import Textarea from './12_textarea';
import Tooltip from './13_tooltip';
import Upload from './14_upload';
import Container from './15_container';

function Text() {
  return <Div value="Hi" />;
}

const routes = [
  Text,
  Button,
  Checkbox,
  Radio,
  Input,
  Textarea,
  Tooltip,
  Upload,
  Container,
].map(Comp => {
  const name = Comp.name;
  return {
    name,
    Comp,
    path: `/${name.toLowerCase()}`,
  };
});

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul className="App_Links">
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              {routes.map(route => (
                <li key={route.name}>
                  <Link to={route.path}>
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            {routes.map(({name, path, Comp}) => (
              <Route key={name} path={path}>
                <Comp />
              </Route>
            ))}
          </Switch>
        </main>
      </div>
    </Router>
  );
}