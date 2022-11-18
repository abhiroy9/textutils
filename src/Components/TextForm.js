import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lowercase", "success");
    }

    const handleCpClick = () => {
        let newText = text.toCopy();
        setText(newText)
        props.showAlert("converted to copy", "success");
    }



    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'balck' }}>

                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="MyBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 " onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleCpClick}> Copy </button>


            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'balck' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} Words and {text.length}characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
