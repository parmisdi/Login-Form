import React from 'react';
import Submit from 'react';


export default class UserName extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name : '',
            comment :''
        }
    }
    handleValue = (e) => {
        this.setState ({
            name : e.target.value ,
            comment : e.target.value
        });
        console.log(this.state.name)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            name : ''
        })
    }

    render(){
        return (
            <div>
                username : 
                <input type="text" id="userName" name="text" onChange={this.handleValue}/>
                <textarea rows="5" cols="50" onChange={this.handleValue}></textarea>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
};
