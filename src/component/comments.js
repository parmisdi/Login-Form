import React from 'react';
import Comment  from './comment';

class CommentsComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      comment: '',
      comments: [],
      submit: false,
      deleteComponent: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete .bind(this)
  }

  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit () {
    if (!this.state.submit) {
      this.setState({
        userName: '',
        comment: ''
      })
      const comment = {
        userName: this.state.userName,
        comment: this.state.comment
      }
      const currentComments = [...this.state.comments, comment]
      this.setState({
        comments: currentComments
      })
    }
  }
  handleDelete (index,e) {
    // const newComment = [...this.state.comments,comment];
    // newComment.splice(index, 1)
    // this.setState({
    //   comment: this.state.comments
    // })
    // const newComment = [...this.state.comments];
    // newComment.splice(index)
    // this.setState({
    // });
  }

  render () {
    return (
      <div className="Wrapper">
        <div className="purple">
          <div className="contentWrapper">
            <div className='content'>
              <h1>Form</h1>
              User name: <input type='text' name='userName' value={this.state.userName} onChange={ e => this.handleInput(e)} />
              Comment: <input type='text' name='comment' value={this.state.comment} onChange={ e => this.handleInput(e)} />
              <input type='button' value='Submit' onClick={this.handleSubmit} />
              <div id="submited">
                {this.state.comments.map((a, index) =>{
                return <Comment key={index} userName={a.userName} comment={a.comment} delete={() => this.handleDelete(index)}/>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentsComponent
