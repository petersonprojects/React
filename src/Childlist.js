
import React, { Component } from 'react'

class ChildList extends Component 
{

    render() 
    {
        let names = this.props.array.map(name => {
            return <h2>{name}</h2>;
        });
        
        return (
            <>
                I am a Childlist.

                {names}

            </>
        )
    }
}

export default ChildList
