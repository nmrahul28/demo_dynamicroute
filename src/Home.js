import React, { Component } from 'react'

export class Home extends Component {
    about=()=>{
        this.props.history.push('/about')
    }
    contact=()=>{
        this.props.history.push('/contact')
    }
    render() {
        return (
            <div style={{alignContent:'center'}}>
                <h1>This is Home Page</h1>
                <br></br>
                <button type="button" onClick={this.about}>About</button>
                <button type="button" onClick={this.contact}>Contact</button>
            </div>
        )
    }
}

export default Home
