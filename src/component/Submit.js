import React from 'react';

export default class Submit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            submit: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            name : ''
        })
        alert('hi')
    }

    render(){
        return (
            <div>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
};