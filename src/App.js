import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import { Dashboard } from "./views/Dashboard";


const Component2 = () => {
  return <h1>Component 2</h1>;
};

const Components = () => {
  let routes = useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "/component2", element: <Component2 /> },

  ]);
  return routes;
};
function App() {
  return (
    <Router>
      <Components />
    </Router>
  );
}

export default App;
