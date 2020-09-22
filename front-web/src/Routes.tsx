import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header';
import Footer from './components/Footer';
import Records from './pages/Records';
import Charts from './pages/Charts';
import Info from './pages/Info';


const Routes = () => (
    <BrowserRouter>
    <Header />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/records">
                <Records />
            </Route>
            <Route path="/charts">
                <Charts />
            </Route>
            <Route path="/info">
                <Info />
            </Route>
        </Switch>
        <Footer />
    </BrowserRouter>
);

export default Routes;