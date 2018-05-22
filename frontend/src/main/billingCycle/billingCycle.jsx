import React, { Component } from 'react';
import ContentHeader from '../../common/blocks/components/contentheader';
import Content from '../../common/blocks/components/content';
import { Link } from 'react-router-dom'

class BillingCycle extends Component {
    render() { 
        return ( 
            <div>
                <ContentHeader title="Ciclos de pagamentos" small="Cadastro">
                <ol className="breadcrumb">
                    <li><Link to="/dashboard"><i class="fa fa-dashboard"></i> Dashboard</Link></li>
                    <li><i className="fa fa-edit"></i> Cadastro</li>
                    <li className ="active">Ciclos de Pagamentos</li>
                </ol>
                </ContentHeader>
                <Content>
                    <h1>BillingCycle, say hello to my little friend</h1>
                </Content>
            </div> 
        )
    }
}
 
export default BillingCycle;