import React, { Fragment } from 'react';

import './test4.less';

export default class Test4 extends React.Component {
    render () {
        return (
            <section className="slide">
                <h1>I am designed just so.</h1>

                <p>My design is intentional. I want to be scaled in such a way that scales the design. No reflows or anything, just straight up scaling. Kinda like SVG.</p>

                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/skull-and-crossbones.svg" alt=""/>

                <p className="bigred"> ✖ ✖ ✖ </p>
            </section>
        );
    }

}
