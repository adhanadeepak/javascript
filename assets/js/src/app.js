import React from 'react';
import Post from './Post';

export default function App(){
    const[state,setState] = React.useState({comments:[
        { post: 'This looks cool', author: 'Deepak'},
        { post: 'No it is not', author: 'Deepak'},
        { post: 'WHo cares', author: 'Deepak'}
    ],
    inputComment: ''
    });

    const handleInput = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let input = e.target.value;
        setState((prevState) => {
            return {
                ...prevState,
                inputComment: input
            }
        })
    }

    const addComment = (e) => {
        e.preventDefault();
        let commentsList = JSON.parse(JSON.stringify(state.comments));
        let post = state.inputComment;
        commentsList.push({post: post,author: 'Deepak'})
        setState((prevState) => {
            return {
                ...prevState,
                inputComment: '',
                comments: commentsList
            }
        });
    }
   
    React.useEffect(()=>{
     console.log('render');
    },[])
    
        return (
            <div className="comments_wrapper">
                <form className="add_comments_wrapper" onSubmit={addComment}>        
                    <label htmlFor="comment_box">
                        Add comment
                    </label>
                    <input id="comment_box" className="input_primary" onChange={handleInput} value={state.inputComment}/>
                    <button type="submit" className="btn btn_primary">Post</button> 
                </form>
                <Post comments={state.comments}/>
            </div>
        )

}

