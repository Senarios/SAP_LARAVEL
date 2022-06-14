import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Page1';
import Heatmap from './Page2';




function Example() {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/heat-map" exact component={Heatmap}></Route>
            </Switch>

        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
