import React, {useState} from 'react';


export default function About(props){

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor : props.mode === 'dark' ? 'black' : 'white',
    }

    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3 '></h1>
        </div>
    )
}

