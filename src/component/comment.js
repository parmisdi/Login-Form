import React, { useState } from 'react';
import Dislike from './dislike2.svg'
import Like from './like.svg'
import Trash from './trash.svg'
 
function Comments(props) {
    const [userName, setUserName] = useState('');
    const [comment, setComment] = useState('');
    const [edit, setedit] = useState(true);
    const [dislike, setDislike] = useState(props.dislike);
    const [like, setLike] = useState(props.like);
    const [isLikedOrDisliked, setIsLikedOrDisliked] = useState(false);
    
    const handleEdit = () => {
        setedit(!edit)
    }

    return (
        <div className='submitted'>
            <div className='submittedCm'>
                <label for="userName">User name: </label>
                <input name='userName' value={props.userName} onChange={(e) => props.onInputChange(e)} disabled={edit} style={edit ? { border : 'none'} : {}}/>
                <label for="comment">Comment: </label>
                <textarea name='comment' value={props.comment} rows="8" cols="20"  onChange={(e) => props.onInputChange(e)} disabled={edit} style={edit ? { border : 'none'} : {}}/>
            </div>
            <div className="buttonStyle">
                <div className='likeAction'>
                    <h6>like:{props.like}</h6>
                    <h6>dislike:{props.dislike}</h6>
                </div>
                <img src={Like} className='likeDislike' alt='like' onClick={() => props.onLikeHandle('like')} />
                <img src={Dislike} className='likeDislike' alt='dislike' onClick={() => props.onLikeHandle('dislike')} />
                { edit ? (
                        <button className='editButton' onClick={handleEdit}>Edit</button>
                    ) : (
                        <button className='editButton' onClick={handleEdit}>Update</button>
                )}
                    <img src={Trash} alt='trash' className='trash' onClick={props.delete} />
            </div>
        </div> 
    )
}

export default Comments