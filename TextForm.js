import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase ", "success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase ", "success")
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text ", "success")
  };
  const handleCopyClick = () => {
    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has Copied ", "success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#627ca2" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="MyBox"
            rows="8"
          ></textarea>
        </div>
        <div >
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
            Convert To UpperCase
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
            Convert To LowerCase
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={handleClearClick}
          >
            Clear The Text
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>
            Copy Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summery</h1>
        <p>
          {text.split(" ").length}word and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length}Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
