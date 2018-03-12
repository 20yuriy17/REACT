import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import News from './components/News.js'
import UsersList from './components/UsersList.js'
import Trener from './components/Trener.js'
import CheckList from './components/CheckList.js'






class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<News />*/}
                {/*<UsersList/>*/}
                <Trener/>
                <CheckList/>
            </div>
        );
    }
}

export default App;