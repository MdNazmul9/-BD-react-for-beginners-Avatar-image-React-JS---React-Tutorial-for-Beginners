import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count:0,
        

    };
    styles = {
        fontSize:10,
        fontWeight: "bold"
    }


    render() { 
        
        return (
            <div> 
                <h1>Hello world</h1>
                <span style={this.styles} className='badge badge-primary m-2'>{this.formatCount()}</span>
                
                <button className='btn btn-secondary btn-sm'>Increment</button>
            </div>
        );
    }
    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : this.state.count;
    }
}
 
export default Counter;