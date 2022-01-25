import React, { useState } from "react";
import lupa from "./search.png";
import './App.css'



async function handleClick(input){
    cleanMessage();
    const checkExist = await fetch("http://sprawdz-labproj24.apps.ocp.lab.cloudpak.site:3006/existModule")
    .then((response) => response.json())
    .then(({ existModule }) =>{
        return existModule
    }).catch((error) => {
        console.error('Error:', error);
      });

    if(checkExist){
        if(notEmpty(input)){
            checkHash(input)
        }
        else{
            const message = "Wprowadź poprawny skrót md5";
            alert("elo")
            setMEssage(message, "warning");
        }
    }
    else{
        setMEssage("Problem połączenia z modułem, odśwież stronę", "warning")
    }    
}

function notEmpty(text){
    if(text.length === 32) return true
    else return false
}

function cleanMessage(){
    let messageDiv = document.getElementById("message");
    let child = messageDiv.lastChild;
    if(child) messageDiv.removeChild(child)
}

function setMEssage(message, classess){
    cleanMessage()
    let messageDiv = document.getElementById("message");
    let mess = document.createElement("span");
    mess.className = classess;
    mess.innerHTML = message;
    messageDiv.append(mess);

}

async function checkHash(input){

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userHash: input }),
    };

    const odp = await fetch("http://sprawdz-labproj24.apps.ocp.lab.cloudpak.site:3006/checkHash", requestOptions)
    .then((response) => response.json())
    .then((data) =>{
        return data
    }).catch((error) => {
        console.error('Error:', error);
      });

    console.log("odp: ", odp)

    if(odp.responseCode === 5 || odp.responseCode ===3) setMEssage(odp.hashText, "ok")
    if(odp.responseCode === 4) setMEssage("Nie znaleziono", "error")
}


function Sprawdz() {
    console.log("Sprawdz strona")
    const [input,setInput] = useState("");
    return (
        <div className="Sprawdz" id="sprawdz">
            <div className="sprawdz-div">
                <input type="text" placeholder="Wprowadź swój skrót tutaj" value={input} onInput={(e) => setInput(e.target.value)} onClick={() => cleanMessage()}/>
                <img src={lupa} alt="lupa" onClick={() => handleClick(input)}/>
            </div>
            <div id="message"></div>
        </div>
    );
}

export default Sprawdz;
