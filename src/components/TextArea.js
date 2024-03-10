import React from 'react'

export default function TextArea() {
  return (
    <div className='container'>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label"><h1>Enter Text to Analyse</h1></label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
    </div>
  )
}
