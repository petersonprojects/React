
import React, { Component } from 'react'
import Days from './Days';
import Dropdown from './Dropdown';

class SimpleList extends Component
{

    render()
    {

        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        return (
            <>
                <Days days={days}/>
                <Dropdown days={days}/>
            </>
        )
    }

}

export default SimpleList
