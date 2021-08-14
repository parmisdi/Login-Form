function Comment(props) {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginBottom: '20px',border:'1px  dotted gray',padding:'30px 0'}}>
            <div className='img' style={{ width: '100px', height: '100px', background: 'black',marginLeft: '20px'}}></div>    
            name:
            <div className='userName' style={{marginRight: '20px',fontSize:'1.2rem'}}>
                {props.userName}
            </div>
            comment: 
            <div className='comment' style={{marginRight: '40px',fontSize:'1.2rem'}}>
                {props.comment}
            </div>
            <button className='deleteBtn' onClick={props.delete}>DELETE</button>
        </div>
    )
  }
export default Comment