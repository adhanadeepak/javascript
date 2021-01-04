import React from 'react';

function Post({comments}){
    
    return (
        <ul className="comments_list">
                    <h4>Post</h4>
                    { comments && comments.length > 0 && comments.reverse().map((comment) =>{
                        return(
                            <li key={Math.random()}><textarea readOnly className="post" value={comment.post}/></li>
                        )
                    })} 
        </ul>
    )
}

export default React.memo(Post);