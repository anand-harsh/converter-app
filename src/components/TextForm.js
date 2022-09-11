import React, {useState} from "react";
const TextForm = (props) => {

  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase", "success")

  }

  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase", "success")

  }

  const handleDeClick=()=>{
    let newText=('');
    setText(newText)
    props.showAlert("Text is Deleted", "success")

  }

  // Copy Text
  const handleCopy=()=>{
    let text =document.getElementById('mybox')
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copied!!", "success")

  }
  
  //
  const handleReSpace=()=>{
    console.log('Removed space')
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Space Removed", "success")

  }

  const handleOnChange=(event)=>{
    console.log("on change")
    setText(event.target.value);
  }

  // default value of text
const [text, setText]=useState('Enter Text Here');
// to change text
// setText("text changed");
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div class="form-group">
        <textarea
          class="form-control"
          value={text}
          onChange={handleOnChange} //handle event
          id="mybox"
          style={{background: props.mode==='dark'?'grey':'white'}}
          rows="5"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleDeClick}>Clear Text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleReSpace}>Remove Space</button>
    </div>
    <div className="container" my-3>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} chars</p>
      <p>{0.008* text.split(" ").length} Minutes Read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
};

export default TextForm;
