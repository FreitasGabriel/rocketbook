import React from 'react';
import PropTypes from 'prop-types';


const PostHeader = ({name, time, image}) => (
            <div className='post_header'>
                <img src={image} id="photo"/>
                <p id="name"> {name}</p>
                <p id="time"> {time}</p>
                <hr id='post_header_hr'></hr>
            </div>
        );

PostHeader.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

export default PostHeader;