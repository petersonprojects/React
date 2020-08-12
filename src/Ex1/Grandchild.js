import React from 'react';

function Grandchild (props) {
    return(
        <>
            <h1>I am the grandchild and my name is {props.name}</h1>
        </>
    );
}

export default Grandchild