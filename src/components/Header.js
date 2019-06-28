import React, { Component, Fragment } from 'react';
import { render } from 'react-dom'

export default class Header extends Component {
    render() {
        return(
            <Fragment>
                <header id="header">
                    <h2 id="text_header">RocketBook</h2>
                </header>
            </Fragment>
        )
    }
}

render(<Header/>, document.getElementById("app"))