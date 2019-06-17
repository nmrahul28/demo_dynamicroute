import React, { Component } from 'react'

export class Showfilter extends Component {
    render() {
        var new_data = this.props.history.location.state.data;
        return (
            <div>
                <h3>Selected Filters are</h3>
                {new_data.length!=0 ? 
                new_data.map((ele, ind)=>{
                    return <h4 key={ind}>{ele}</h4>
                }):<h4>None</h4>}
            </div>
        )
    }
}

export default Showfilter
