import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomePage from './pages/home';
import MoviesPage from './pages/movies';
import Sidebar from './components/sidebar/sidebar';

function App() {
    return (
        <>
            <Router>
                <Sidebar />
                <div className="main-app">
                    <Switch>
                        <Route exact path="S/" component={HomePage} />
                        <Route path="/movies" component={MoviesPage} />
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default App;