import * as React from "react";
import { useState } from "react";
import "../styles/style.css";
import lupa from "../images/search.png";





const Sprawdz = () => {
  const [input, setInput] = useState("");

 const handleSearch = () =>{
     if(input.replace(/\s/g, "").length !== 32) wrongHash();
     else goodHash();
 }

 const goodHash = () =>{
    let infoDiv = document.getElementById("info");
    let child = infoDiv.lastChild;
    if(child) infoDiv.removeChild(child);
    let newEl = document.createElement("span");
    newEl.className = "ok";
    newEl.innerHTML = input;
    infoDiv.appendChild(newEl);
 }



 const wrongHash = () => {
     let infoDiv = document.getElementById("info");
     let child = infoDiv.lastChild;
    if(child) infoDiv.removeChild(child);
     let newEl = document.createElement("span");
     newEl.className = "error";
     newEl.innerHTML = "Niepoprawny format"
     infoDiv.appendChild(newEl);
 }

 const handleOnChange = () =>{
    let infoDiv = document.getElementById("info");
    let child = infoDiv.lastChild;
    if(child) infoDiv.removeChild(child);
 }

  return (
    <article className="sprawdz">
      <div className="sprawdz-div">
        <input
          type="text"
          placeholder="Wprowadź swój skrót tutaj"
          value={input}
          onInput={(e) => setInput(e.target.value)}
          onChange={handleOnChange}
        />
        <img 
        src={lupa} 
        alt="lupa" 
        role="presentation" 
        onClick={handleSearch}
        />
      </div>
    </article>
  );
};

export default Sprawdz;
