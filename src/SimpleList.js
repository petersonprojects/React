
import React, { Component } from 'react'
import Days from './Days';

class SimpleList extends Component
{

    render()
    {

        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        return (
            <>
                <Days days={days}/>
            </>
        )
    }

}

export default SimpleList
