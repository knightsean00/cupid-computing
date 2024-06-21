import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import { Router, Switch, Route } from 'wouter';
import "./commons/bootstrap.css";
import "./commons/index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/"><Home /></Route>
                <Route path="*">
                    <div className="full">
                        <h1>404 Error</h1>
                        <h2><a style={{ fontFamily: "inherit" }} href="/">Return home</a></h2>
                    </div>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>
);
