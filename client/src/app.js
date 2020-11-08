import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from './pages/home';
import MoviesPage from './pages/movies';
import Sidebar from './components/sidebar/sidebar';
import FourZeroFour from './pages/fourZeroFour';

function App() {

    const sideBarItems = [
        {linkTo: "/", icon: {iconName: 'faHome', iconSize: '2x', iconColor: 'grey'}},
        {linkTo: "/movies", icon: {iconName: 'faFilm', iconSize: '2x', iconColor: 'grey'}},
        {linkTo: "/pictures", icon: {iconName: 'faImage', iconSize: '2x', iconColor: 'grey'}},
        {linkTo: "/music", icon: {iconName: 'faMusic', iconSize: '2x', iconColor: 'grey'}}
    ];

    return (
        <>
            <Router>
                <Sidebar items={sideBarItems} selectedItem={null}/>
                <div className="main-app">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/movies" component={MoviesPage} />
                        <Route component={FourZeroFour}/>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default App;