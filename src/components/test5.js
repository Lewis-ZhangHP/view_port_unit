import React, { Fragment } from 'react';

import './test5.less';

export default class Test4 extends React.Component {
    render () {
        return (
            <Fragment>
                <header>
                    <h1>Scroll Indicator</h1>
                </header>
                <main>
                    <h2>I was interested to see if I could make a scroll indicator <a href="https://codepen.io/derekjp/pen/pJzpxB" target="_blank">like this</a> with just CSS.</h2>
                    <p>You can! But maybe you shouldn't. This is an interesting consequence of a bunch of hacks held together with duct tape. It uses z-index hacks, gradient hacks and tricks with calc and viewport units.</p>
                    <p>Having said that, hacks are not always bad. I love hacks and many of us have made quite a good living selling floats and clearfixes.</p>
                    <p>The techniques used here are well supported, if not conventional. If you can read the CSS, understand how it works, and how to change it, and you think this works better for you than JavaScript, feel free to implement it. Just be aware of the z-index behaviour and possible conflict with other CSS using negative z-index.</p>
                    <hr />
                        <p>Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.</p>
                        <h3>Tristique Aenean Etiam Cras</h3>
                        <p>Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                        <p>Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.</p>
                        <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.</p>
                        <p>Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                        <ul>
                            <li>Ullamcorper Aenean Ornare</li>
                            <li>Ridiculus Lorem Malesuada Consectetur</li>
                            <li>Aenean Tristique Sit Lorem Purus</li>
                            <li>Vehicula Egestas Mollis Cursus Nibh</li>
                        </ul>
                        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                        <h3>Bibendum Aenean Dapibus Tristique</h3>
                        <p>Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.</p>
                        <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.</p>
                        <p>Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                        <ul>
                            <li>Ullamcorper Aenean Ornare</li>
                            <li>Ridiculus Lorem Malesuada Consectetur</li>
                            <li>Aenean Tristique Sit Lorem Purus</li>
                            <li>Vehicula Egestas Mollis Cursus Nibh</li>
                        </ul>
                        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                        <h2>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</h2>
                        <p>Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.</p>
                        <h3>Tristique Aenean Etiam Cras</h3>
                        <p>Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                        <p>Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.</p>
                        <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.</p>
                        <p>Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                        <ul>
                            <li>Ullamcorper Aenean Ornare</li>
                            <li>Ridiculus Lorem Malesuada Consectetur</li>
                            <li>Aenean Tristique Sit Lorem Purus</li>
                            <li>Vehicula Egestas Mollis Cursus Nibh</li>
                        </ul>
                        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                        <h3>Bibendum Aenean Dapibus Tristique</h3>
                        <p>Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.</p>
                        <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.</p>
                        <p>Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                        <ul>
                            <li>Ullamcorper Aenean Ornare</li>
                            <li>Ridiculus Lorem Malesuada Consectetur</li>
                            <li>Aenean Tristique Sit Lorem Purus</li>
                            <li>Vehicula Egestas Mollis Cursus Nibh</li>
                        </ul>
                        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                        <h3>Tristique Aenean Etiam Cras</h3>
                        <p>Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                        <p>Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.</p>
                        <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.</p>
                        <p>Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                        <ul>
                            <li>Ullamcorper Aenean Ornare</li>
                            <li>Ridiculus Lorem Malesuada Consectetur</li>
                            <li>Aenean Tristique Sit Lorem Purus</li>
                            <li>Vehicula Egestas Mollis Cursus Nibh</li>
                        </ul>
                        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                        <h3>Bibendum Aenean Dapibus Tristique</h3>
                        <p>Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.</p>
                        <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.</p>
                        <p>Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                        <ul>
                            <li>Ullamcorper Aenean Ornare</li>
                            <li>Ridiculus Lorem Malesuada Consectetur</li>
                            <li>Aenean Tristique Sit Lorem Purus</li>
                            <li>Vehicula Egestas Mollis Cursus Nibh</li>
                        </ul>
                        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                        <h2>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</h2>
                        <p>Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.</p>
                        <h3>Tristique Aenean Etiam Cras</h3>
                        <p>Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                        <p>Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.</p>
                        <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.</p>
                        <p>Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                        <ul>
                            <li>Ullamcorper Aenean Ornare</li>
                            <li>Ridiculus Lorem Malesuada Consectetur</li>
                            <li>Aenean Tristique Sit Lorem Purus</li>
                            <li>Vehicula Egestas Mollis Cursus Nibh</li>
                        </ul>
                        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                        <h3>Bibendum Aenean Dapibus Tristique</h3>
                        <p>Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.</p>
                        <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.</p>
                        <p>Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                        <ul>
                            <li>Ullamcorper Aenean Ornare</li>
                            <li>Ridiculus Lorem Malesuada Consectetur</li>
                            <li>Aenean Tristique Sit Lorem Purus</li>
                            <li>Vehicula Egestas Mollis Cursus Nibh</li>
                        </ul>
                        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                </main>
            </Fragment>
        );
    }

}
