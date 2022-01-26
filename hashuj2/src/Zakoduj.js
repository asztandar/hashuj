import klucz from "./key.png";
import React, { useState } from "react";

async function handleClick(input, checkbox) {
    const checkExist = await fetch("http://zakoduj-labproj24.apps.ocp.lab.cloudpak.site/existModule")
        .then((response) => response.json())
        .then(({ existModule }) => {
            return existModule;
        })
        .catch((error) => {
            console.error("Error:", error);
        });

    if (checkExist) {
        if (notEmpty(input)) {
            encrypt(input, checkbox);
        } else {
            const message = "Wprowadź poprawny skrót md5";
            setMEssage(message, "warning");
        }
    } else {
        setMEssage("Problem połączenia z modułem, odśwież stronę", "warning");
    }
}

async function encrypt(input,checkbox) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userText: input, checkboxChoose: checkbox }),
    };

    const odp = await fetch("http://zakoduj-labproj24.apps.ocp.lab.cloudpak.site/encryptText", requestOptions)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error("Error:", error);
        });

    console.log("odp: ", odp);

     if (odp.responseCode === 0)
         setMEssage(odp.userTextHash, "ok");
    if(odp.responseCode === 1) setMEssage(odp.userTextHash + " dodany do bazy danych", "ok");
     if (odp.responseCode === 2) setMEssage(odp.userTextHash + " już istnieje w bazie", "warning");
}

function notEmpty(text) {
    if (text.length !==0) {
      return true;
    }
    else {
      return false;
    }
}

function cleanMessage() {
    let messageDiv = document.getElementById("message");
    let child = messageDiv.lastChild;
    if (child) messageDiv.removeChild(child);
}

function setMEssage(message, classess) {
  cleanMessage()
    let messageDiv = document.getElementById("message");
    let mess = document.createElement("span");
    mess.className = classess;
    mess.innerHTML = message;
    messageDiv.append(mess);
}

function Zakoduj() {
    const [input, setInput] = useState("");
    const [checkbox, setCheckbox] = useState(false);
    return (
        <div className="Sprawdz" id="sprawdz">
            <div className="sprawdz-div">
                <input
                    type="text"
                    placeholder="Wprowadź tekst"
                    value={input}
                    onInput={(e) => setInput(e.target.value)}
                    onClick={() => cleanMessage()}
                />
                <img
                    src={klucz}
                    alt="lupa"
                    onClick={() => handleClick(input, checkbox)}
                />
            </div>
            <div className="checkbox">
                <input
                    type="checkbox"
                    onChange={(e) => setCheckbox(e.target.checked)}
                />
                <span>Dodaj do bazy</span>
            </div>
            <div id="message"></div>
        </div>
    );
}

export default Zakoduj;
