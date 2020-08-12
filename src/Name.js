import React from 'react';

// req.body.firstName
// {props.firstName}
function Name (props) {
    return(
        <>
            This is a student at Digitalcrafts: <h1>{props.firstName}</h1>
        </>
    );
}

export default Name