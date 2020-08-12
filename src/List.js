
import React, { Component } from 'react';
import ChildList from './Childlist';

class List extends Component {

    // render returns JSX back to its parent
    // every class based component is going to have a render method

    render() {

        return (
            <>
                I am a List.
                <ChildList name="Micah"/>
            </>
        )
    }
}

export default List
