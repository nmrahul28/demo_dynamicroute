import React, { Component } from 'react'

export class Home extends Component {
    about=()=>{
        this.props.history.push('/about')
    }
    contact=()=>{
        this.props.history.push('/contact')
    }
    filter=()=>{
        this.props.history.push('/filter')
    }
    render() {
        return (
            <div style={{alignContent:'center'}}>
                <h1>This is Home Page</h1>
                <br></br>
                <button type="button" onClick={this.about}>About</button>&emsp;
                <button type="button" onClick={this.contact}>Contact</button>&emsp;
                <button type="button" onClick={this.filter}>Filter</button>
            </div>
        )
    }
}

export default Home
