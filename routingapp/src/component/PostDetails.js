import React from 'react';
import {Link} from 'react-router-dom';

const PostDetails = (props) => {
    console.log(props.match.params.topic);
    return(
        <div className="panel panel-success">
           <div className="panel-heading">
               Post Details Page for {props.match.params.topic}
           </div>
           <div className="panel-body">
                <p>{props.match.params.topic} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <Link className="btn btn-danger" to="/post">Back</Link>
           </div>
        </div>
    )
}

export default PostDetails