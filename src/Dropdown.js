
import React, { Component } from 'react'

class Dropdown extends Component
{

    render()
    {

        let days = this.props.days.map(day => {
            return <option>{day}</option>;
        });

        return (
            <>
                <select>
                    <option>Select a day</option>
                    {days}
                </select>
            </>
        )
    }
}

export default Dropdown
