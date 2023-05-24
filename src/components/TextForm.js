import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [textChunks, setTextChunks] = useState({
    firstPart: "",
    selectedPart: "",
    endPart: "",
  });
  function upper() {
    let newtext =
      textChunks.firstPart +
      textChunks.selectedPart.toUpperCase() +
      textChunks.endPart;
    console.log(newtext, textChunks);
    setText(newtext);
  }
  function lower
  () {
    let newtext =
      textChunks.firstPart +
      textChunks.selectedPart.toLowerCase() +
      textChunks.endPart;
    console.log(newtext, textChunks);
    setText(newtext);
  }
  function onchangehandler(event) {
    setText(event.target.value);
  }
  function logSelection(event) {
    const log = document.getElementById("log");
    console.log("hell", log);
    const firstPart = event.target.value.substring(
      0,
      event.target.selectionStart
    );
    const endPart = event.target.value.substring(event.target.selectionEnd);
    const selection = event.target.value.substring(
      event.target.selectionStart,
      event.target.selectionEnd
    );
    setTextChunks({
      firstPart: firstPart,
      selectedPart: selection,
      endPart: endPart,
    });
    // log.textContent = `You selected: ${selection}`;
  }

  //   const input = document.querySelector("input");
  //   input.addEventListener("select", logSelection);
  return (
    <div className="container my-3">
      <h1>Enter the text to analyze</h1>
      <div
        className="container my-3"
        style={{
          border: "2px solid grey",
          height: "40px",
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <button className="btn btn-light btn-sm mt-1" onClick={upper}>
          Uppercase
        </button>
        <button className="btn btn-light btn-sm mt-1" onClick={lower}>
          Lowercase
        </button>
        <button className="btn btn-light btn-sm mt-1" onClick={upper}>
          Remove Puntuations
        </button>
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="log"
          value={text}
          onChange={onchangehandler}
          placeholder="Enter your text here"
          onSelect={logSelection}
          rows="8"
        ></textarea>
      </div>
    </div>
  );
}
