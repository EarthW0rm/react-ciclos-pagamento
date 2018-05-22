import React, { Component } from 'react';

import Header from '../common/blocks/header';
import SideBar from '../common/blocks/sidebar';
import Footer from '../common/blocks/footer';
import Routes from './routes';

import { BrowserRouter, HashRouter } from 'react-router-dom'

export default class App extends Component {

    render(){
        return(
            <HashRouter>
                <div className="wrapper">
                    <Header />
                    <SideBar />
                    <div className="content-wrapper">
                        <Routes />
                    </div>
                    <Footer />
                </div>
            </HashRouter>
        );
    }

}

