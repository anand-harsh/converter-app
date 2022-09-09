import React, {useState} from "react";


const TextForm = (props) => {

  const handleUpClick=()=>{
    console.log("uppercasec lcicked"+text)
    let newText=text.toUpperCase();
    setText(newText)
  }

  const handleLoClick=()=>{
    console.log("lowercase lcicked"+text)
    let newText=text.toLowerCase();
    setText(newText)
  }

  const handleDeClick=()=>{
    console.log("deletion lcicked"+text)
    let newText=('');
    setText(newText)
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
          rows="5"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleDeClick}>Clear Text</button>
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
