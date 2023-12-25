import React, { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState('');

    const handleUpCase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLocase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear= () =>{
        let newText = '';
        setText(newText);
    }
    
    const handleCopy = () =>{
        let text = document.getElementById('form-ctrl');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleRmvSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }
    return (

        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            
               <textarea
                    className="form-control"
                    id="form-ctrl"
                    rows={8}
                    value={text}
                    defaultValue={""}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <button className="btn btn-primary mx-1" onClick={handleUpCase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLocase}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleRmvSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
        </div>

        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters.</p>
            <p> <b>Time to read:</b> {0.008 * text.split(" ").length} minutes to read your available Text. </p>

            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>



    )
}

export default TextForm;