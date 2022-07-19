import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Row } from "antd";
import Color from "./pages/Color";
import Typography from "./pages/Typography";
import Icon from "./pages/Icon";
import Component from "./pages/Component";
import Header from "./components/Header";

function App() {
  const routes = [
    {
      to: "/typography",
      component: <Typography />,
      exact: true,
    },
    {
      to: "/icon",
      component: <Icon />,
    },
    {
      to: "/component",
      component: <Component />,
    },
    {
      to: ["/form", "/"],
      component: <Color />,
      exact: true,
    },
  ];

  return (
    <div className="App">
      <Row>
        <Router>
          <Header title="Ui Style Guide" />
          <Switch>
            {routes.map((route) => {
              return (
                <Route
                  path={route.to}
                  exact={route.exact}
                  key={route.component}
                >
                  {route.component}
                </Route>
              );
            })}
          </Switch>
        </Router>
      </Row>
    </div>
  );
}

export default App;
