import React from 'react';
import MenuItem from './menuitem';
import MenuTree from './menutree';

export default props => (
    <ul className="sidebar-menu">
        <li className="header">MAIN NAVIGATION</li>
        <MenuItem path="/dashboard" label="Dashboard" icon="dashboard" />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="/billingCycle" label="Ciclos de Pagamentos" icon="usd" />
        </MenuTree>
    </ul>
);