import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import FiveYearFuture from '../components/FiveYearFuture/FiveYearFuture';
import ThemeOfTheYear from '../components/ThemeOfTheYear/ThemeOfTheYear';
import HappinessFactor from '../components/HappinessFactor/HappinessFactor';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavigationBar/>
                <FiveYearFuture/>
                <ThemeOfTheYear/>
                <HappinessFactor/>
            </div>
        );
    }
}

export default App;
