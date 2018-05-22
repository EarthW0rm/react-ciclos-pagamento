import React, { Component } from 'react';

import ContentHeader from '../../common/blocks/components/contentheader';
import Content from '../../common/blocks/components/content';
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    render() { 
        return (        
            <div>
                <ContentHeader title="Dashboard" small="Painel de Controle">
                <ol className="breadcrumb">
                    <li><i className="fa fa-dashboard"></i> Dashboard</li>
                </ol>
                </ContentHeader>
                <Content>
                    <h1>Dashboard, say hello to my little friend</h1>
                </Content>
            </div> 
        )
    }
}
 
export default Dashboard;