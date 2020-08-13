
import React, { Component } from 'react';
import CommentStyle from './CommentStyle';
import data from './commentData';


class Comments extends Component
{

    render()
    {

        let comments = data.map(comment => {
            return <CommentStyle img={comment.img} name={comment.name} description={comment.description}/>
        });

        return(
            <>
                {comments}
            </>
        );
    }

}

export default Comments
