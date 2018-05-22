import React from 'react';

export default props => (
    <section className="content-header">
        <h1>
            {props.title}&nbsp;
            <small>{props.small}</small>
        </h1>
        {props.children}
    </section>
)