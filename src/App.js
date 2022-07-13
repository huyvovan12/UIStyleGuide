import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Row } from 'antd';
import Color from './pages/Color';
import Typography from './pages/Typography';
import Icon from './pages/Icon';
import Component from './pages/Component';
import Header from './components/Header';

function App() {
  const routes = [
    {
      to: ['/color', '/'],
      component: <Color />,
      exact: true
    },
    {
      to: '/typography',
      component: <Typography />
    },
    {
      to: '/icon',
      component: <Icon />
    },
    {
      to: '/component',
      component: <Component />
    }
  ];

  return (
    <div className="App">
        <Row>
          <Header />
          <Router>
            <Switch>
              {
                routes.map((route) => 
                  <Route path={route.to} exact={route.exact}>
                    {
                      route.component
                    }
                  </Route>
                )
              }
            </Switch>
          </Router>
        </Row>
    </div>
  );
}

export default App;
