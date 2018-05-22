import React, { Component } from 'react';

import ContentHeader from '../../common/blocks/components/contentheader';
import Content from '../../common/blocks/components/content';
import { Link } from 'react-router-dom';
import ValueBox from '../../common/widget/valuebox';

class Dashboard extends Component {
    render() { 
        return (        
            <div>
                <ContentHeader title="Dashboard" small="Painel de Controle">
                <ol className="breadcrumb">
                    <li><i className="fa fa-dashboard" /> Dashboard</li>
                </ol>
                </ContentHeader>
                <Content>
                    <div className="row">
                        <ValueBox cols="12 6 4 4" color="green" icon="plus-square" text="Total de crédito" value="20,00"/>
                        <ValueBox cols="12 6 4 4" color="red" icon="minus-square" text="Total de dédito" value="10,00"/>
                        <ValueBox cols="12 6 4 4" color="aqua" icon="signal" text="Total" value="10,00"/>
                    </div>
                </Content>
            </div> 
        )
    }
}
 
export default Dashboard;