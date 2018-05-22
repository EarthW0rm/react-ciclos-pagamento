import React, { Component } from 'react';
import Grid from '../layout/grid';

export default class ValueBox extends Component {

    render(){
        return (
            <Grid cols={this.props.cols}>
                <div className="info-box">
                    <span className={`info-box-icon bg-${this.props.color}`}>
                        <i className={`fa fa-${this.props.icon}`}/>
                    </span>
                    <div className="info-box-content">
                        <span className="info-box-text">{this.props.text}</span>
                        <span className="info-box-number">{this.props.value}<small>R$</small></span>
                    </div>
                </div>
            </Grid>
        )
    }
}
