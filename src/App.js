import logo from "./logo.svg";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import React, { Fragment, useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Redirect,
} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  return (
    <Fragment>
      {/* <div style={{
            background: "#41D69B",
          }}> */}
        <Router>
          <div className="container">
            <Switch>
              <Route
                exact
                path="/login"
                render={(props) =>
                  !isAuthenticated ? (
                    <Login {...props} setAuth={setAuth} />
                  ) : (
                    <Redirect to="/dashboard" />
                  )
                }
              />
              <Route
                exact
                path="/register"
                render={(props) =>
                  !isAuthenticated ? (
                    <Register />
                  ) : (
                    <Redirect to="/dashboard" setAuth={setAuth} />
                  )
                }
              />
              <Route
                exact
                path="/dashboard"
                render={(props) =>
                  isAuthenticated ? (
                    <Dashboard {...props} setAuth={setAuth} />
                  ) : (
                    <Redirect to="/login" />
                  )
                }
              />
            </Switch>
          </div>
        </Router>
      {/* </div> */}
    </Fragment>
  );
}

export default App;
