import React from 'react'
import {  BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Dashboard from './dashboard/dashboard';
import BillingCycle from './billingCycle/billingCycle';

export default props => (
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/billingCycle" component={BillingCycle} />
                <Route component={Dashboard} />
            </Switch>
        )