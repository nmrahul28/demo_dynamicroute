import React, { Component } from 'react'
import { cities } from './routes.js';

export class filter extends Component {

    next=()=>{
        var checked_list=[]
        for(let i=0;i<cities.length; i++){
            if(document.getElementById(cities[i]).checked){
                checked_list.push(cities[i]);
            }
        }
        this.props.history.push({
            pathname:'/show_filter', state:{
                data:checked_list
            }
        })
    }

    render() {
        return (<div>
            {cities.map((ele, ind) => {
                return <label key={ind}><input id={ele} type='checkbox' name={ele} />{ele}<br></br></label>
            })}
            <div>
                <br></br>
                <button type="button" onClick={this.next}>Next</button>
            </div>
        </div>)


    }
}

export default filter
