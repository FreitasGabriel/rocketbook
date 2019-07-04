import React from 'react';
import PostHeader from './PostHeader';
import PropTypes from 'prop-types';

const Post = ({data}) => (
            <div className='post'>
                <PostHeader image={data.image} time={data.time} name={data.name} />
                <p>{data.text}</p>
            </div>
        )

Post.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
};

export default Post;