import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

export default class Post extends Component {
    render() {
        return(
            <Fragment>
                
                <p></p>
            </Fragment>
        )
    }
}

render(<Post />, document.getElementById("app_body"))