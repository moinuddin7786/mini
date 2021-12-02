import React, {useState} from "react";
export default function TextForm(props) {
    const handelUpClick = ()=> {
        // console.log("clicked success" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handelLoClick = ()=> {
        // console.log("clicked success" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handelOnChange = (event)=> {
        // console.log("on changed");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here....!');
    // setText("hiii");//for updating new value 
  return (
      <>
    <div className="container">
        <h1 className="text-center">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handelOnChange}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handelLoClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-3">
        <h2>Text Summery</h2>
        <p><b><i>Total:</i></b>&nbsp;&nbsp;&nbsp;<b>{text.length}</b> Characters and <b>{text.split(" ").length}</b> Words</p>
        <p><b><i>Time:</i>&nbsp;&nbsp;&nbsp;{0.008*text.split(" ").length}</b>&nbsp;&nbsp;&nbsp;Minuts Read</p>
        <h3 className="text-center bg-dark text-light rounded p-2">Preview</h3>
        <p className="border border-primary rounded p-3">{text}</p>
    </div>
    </>
  );
}