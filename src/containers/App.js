import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavigationBar/>
                {/*<FiveYearFuture/>
                <ThemeOfTheYear/>
                <HappinessFactor/>*/}
            </div>
        );
    }
}

export default App;
