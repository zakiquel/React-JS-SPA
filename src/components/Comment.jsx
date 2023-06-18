import React from 'react';
import Loader from "./UI/Loader/Loader";

const Comment = (props) => {
    return (
        <div>
            {props.isLoading
                ? <Loader/>
                : props.comments.map(comment =>
                    <div style={{display: "flex", flexDirection: "column", paddingTop: 10}}>
                        <h4>
                            {comment.email}
                        </h4>
                        <p>
                            {comment.body}
                        </p>
                    </div>
                )
            }
        </div>
    );
};

export default Comment;