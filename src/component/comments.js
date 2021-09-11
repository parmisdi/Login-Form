import React, { useState } from 'react';
import Comments from './comment.js'

function CommentsComponent() {
  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');
  const [succesMessage, setSuccesMessage] = useState('');

  const getUserNameValue = (e) => {
    setUserName(e.target.value)
  }

  const getCommentValue = (e) => {
    setComment(e.target.value)
  }

  const handelSubmit = () => {
    if (userName !== '' && comment !== '') {
      const addedComment = {
        userName : userName,
        comment : comment,
        dislike: 0,
        like: 0,
        isLikedOrDisliked: false
      }
      const currentComments = [...comments, addedComment]
      setUserName('')
        setComment('')
        setComments(currentComments)
        setError('')
        setSuccesMessage('Your comment submitted succesfuly')
    }else {
      setError('All feilds are required!')
        setSuccesMessage('')
    }
  }

  const handelKeyPress = (e) => {
    if (e.charcode === 13) {
      handelSubmit()
    }
  }

  const handleInputs = (e, index) => {
    const currentComments = [...comments]
    currentComments[index].[e.target.name] = e.target.value
    setComments(currentComments)
  }

  const handleDelete = (index) => {
    const currentComments = [...comments]
    currentComments.splice(index, 1)
    setComments(currentComments)
  }

  const handleLike = (index, action) => {
    const currentComment = [...comments]
    if (currentComment[index].isLikedOrDisliked) {
      if(action === 'like' && currentComment[index].like === 0) {
        currentComment[index].like = currentComment[index].like + 1
        currentComment[index].dislike = currentComment[index].dislike - 1
        setComments(currentComment)
      } else if (action === 'dislike' && currentComment[index].dislike === 0) {
          currentComment[index].like = currentComment[index].like - 1
          currentComment[index].dislike = currentComment[index].dislike + 1
          setComments(currentComment)
        }
    } else {
        currentComment[index].[action] = currentComment[index].[action] + 1
        currentComment[index].isLikedOrDisliked = true
        setComments(currentComment)
      }
  }
  return (
    <div className='Wrapper'>
      <div className='purple'>
        <div className='contentWrapper'>
          <div className='content'>
              <h1>Login Form</h1>
              <label for='userName'>User Name: </label>
              <input type='text' name='userName' value={userName} onChange={getUserNameValue} />
              <label for='comment'>Comment: </label>
              <input type='text' name='comment' value={comment} onChange={getCommentValue}/>
              <input type='button' value='Submit' onClick={handelSubmit} onKeyPress={handelKeyPress}/>
              {succesMessage !== '' && <h5 style={{color:'black'}}> {succesMessage} </h5>}
              { error !== '' && <h5 style={{color:'red'}}>{error}</h5>}
            <div className='comments'>
              {comments.map((comment ,index) =>{
                return <Comments key={index} {...comment} onLikeHandle={(action) => handleLike(index, action)} onInputChange={(e) => handleInputs(e, index)} delete={() => handleDelete(index)}/>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentsComponent