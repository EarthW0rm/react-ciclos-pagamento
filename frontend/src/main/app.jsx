import React, { Component } from 'react';

import Header from '../common/blocks/header';
import SideBar from '../common/blocks/sidebar';

export default class App extends Component {

    render(){
        return(
            <div className="wrapper">
                <Header />
                <SideBar />
            </div>
        );
    }

}

