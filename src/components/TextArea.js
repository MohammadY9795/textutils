import React, { useState } from 'react'

export default function TextArea() {
    const [text, setText] = useState('hi my name is yusuf');

    const handleClick = () => {
        let upperCase = text.toUpperCase();
        setText(upperCase);
    }

    const handleChange = (event) => {
        let updatedtext = event.target.value;
        setText(updatedtext)
    }

    const capitalizeFirstLetter = () => {
        if(text.length === 0){
            return text;
        }

        if(text.toString().charAt(0) === text.toString().charAt(0).toUpperCase()){
            return text;
        }
        else{
            return setText(text.toString().charAt(0).toUpperCase() + text.slice(1))
        }
    }
  return (
    <div className='container'>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>Enter Text to Analyse</h1></label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleChange}></textarea>
        </div>
        <div>
            <button className='btn btn-primary mx-3' onClick={handleClick}>
                Change to uppercase
            </button>
            <button className='btn btn-primary' onClick={capitalizeFirstLetter}>
                Capitalize
            </button>
        </div>
    </div>
  )
}
