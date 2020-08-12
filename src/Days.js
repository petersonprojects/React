
import React, { Component } from 'react'

class Days extends Component
{

    render()
    {

        let days = this.props.days.map(day => {
            return <h2>{day}</h2>;
        });

        return (
            <>
                {days}
            </>
        )
    }
}

export default Days
