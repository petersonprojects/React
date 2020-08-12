import React from 'react';
import Child from './Child'

function Parent (props) {
    return(
        <>
            <h1>I am a grandparent and my name is {props.name} </h1>
            <Child name="Scott"/>
        </>
    );
}

export default Parent