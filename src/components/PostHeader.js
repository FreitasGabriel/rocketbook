import React, {Component, Fragment} from 'react';
import { render } from 'react-dom';
import photo from '../image/photo.png'

export default class PostHeader extends Component{
    render() {
        return (
            <div className='post_header'>
                <img src={photo} />
                <hr id='post_header_hr'></hr>
            </div>
        )
    }
}

render(<PostHeader/>, document.getElementById('app'))