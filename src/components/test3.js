import React, { Fragment } from 'react';

import './test3.less';

export default class Test3 extends React.Component {
    render () {
        return (
            <div className='test-3'>
                <h1>My<strong>Application</strong></h1>

                <nav>
                    <h2>My Projects</h2>
                    <ul>
                        <li><a href="#">Project 1</a></li>
                        <li><a href="#">Project 2</a></li>
                        <li><a href="#">Project 3</a></li>
                        <li><a href="#">Project 4</a></li>
                        <li><a href="#">Project 5</a></li>
                        <li><a href="#">Project 6</a></li>
                        <li><a href="#">Project 7</a></li>
                        <li><a href="#">Project 8</a></li>
                        <li><a href="#">Project 9</a></li>
                        <li><a href="#">Project 10</a></li>
                    </ul>
                </nav>

                <article>
                    <h2>Project Title</h2>
                    <p>
                All the main content lives in here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eius cumque, nihil nesciunt qui ea vero consequatur, dignissimos maxime ratione itaque amet, ab aliquid recusandae illo quibusdam debitis? Deserunt, saepe.
                    </p>
                </article>

                <footer>
                    Copyright (c) 1017 Nobody Ever
                </footer>
            </div>
        );
    }

}
