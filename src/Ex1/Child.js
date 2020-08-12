import React from 'react';
import Grandchild from './Grandchild'

function Child (props) {
    return(
        <>
        <h1>I am the child and my name is {props.name}</h1>
            <Grandchild name="Micah"/>
        </>
    );
}

export default Child