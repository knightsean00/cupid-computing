import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import { Router, Switch, Route } from 'wouter';
import "./commons/index.css";
import "./commons/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/"><Home /></Route>
                <Route path="*">
                    <div className="full">
                        <h2>404 Error</h2>
                        <h3><a style={{ fontFamily: "inherit" }} href="/">Return home</a></h3>
                    </div>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>
);
