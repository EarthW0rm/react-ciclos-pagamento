import React, { Component } from 'react';

import Header from '../common/blocks/header';
import SideBar from '../common/blocks/sidebar';
import Footer from '../common/blocks/footer';

export default class App extends Component {

    render(){
        return(
            <div className="wrapper">
                <Header />
                <SideBar />
                <div className="content-wrapper">
                    <section className="content">
                        <h1>Say hello to my little friend!</h1>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }

}

