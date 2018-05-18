import React, { Component } from 'react';

import Header from '../common/blocks/header';

export default class App extends Component {

    render(){
        return(
            <div className="wrapper">
                <Header />
                <h1>Say hello to my little friend</h1>
            </div>
        );
    }

}

