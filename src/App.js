import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Col, Row } from "antd";
import Color from "./pages/Color";
import Component from "./pages/Component";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ListItem from "./pages/ListItem";
import EditItem from "./pages/EditItem";
import AddItem from "./pages/AddItem";

function App() {
  const routes = [
    {
      to: "/component",
      component: <Component />,
    },
    {
      to: "/form",
      component: <Color />,
    },
    {
      to: ["/", "/list-item"],
      component: <ListItem />,
      exact: true,
    },
    {
      to: "/edit-item",
      component: <EditItem />,
    },
    {
      to: "/add-item",
      component: <AddItem />,
    },
  ];

  return (
    <div className="App">
      <Row>
        <Header />
        <Col span={24} style={{ display: "flex" }}>
          <Sidebar />
          <Router>
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
        </Col>
      </Row>
    </div>
  );
}

export default App;
