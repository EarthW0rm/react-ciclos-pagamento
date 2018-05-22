import React, { Component } from 'react';
import Grid from '../layout/grid';

export default class ValueBox extends Component {

    render(){

        const fontStyle = { fontSize : '20px'};

        return (
            <Grid cols={this.props.cols}>
                <div className={`small-box bg-${this.props.color}`}>
                    <div className="inner">
                        <h3>{this.props.value}<sup style={fontStyle}>R$</sup></h3>
                        <p>{this.props.text}</p>
                    </div>
                    <div className="icon">
                        <i className={`fa fa-${this.props.icon}`} />
                    </div>
                </div>
            </Grid>
        );
    }
}
