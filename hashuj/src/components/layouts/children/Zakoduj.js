import * as React from "react";
import { useState } from "react";
import "../../../styles/style.css";
import klucz from "../../../images/key.png";
import { isEmpty } from "../../../functions/functions";

const Zakoduj = () => {
    const [input, setInput] = useState("");
    const [checkbox, setCheckbox] = useState(false);
    const [hash, setHash] = useState("");
    const [responseCode, setResponseCode] = useState("");

    function handleKey(){
        if(isEmpty(input)){
            fetchZakoduj(checkbox)
        }else{
            let parent = document.getElementById("sprawdzMessage");
            let child = parent.lastChild;
            if (child) {
                parent.removeChild(child);
                parent.className = "";
            }
            let mess = document.createElement("span");
            mess.innerHTML = "Wprowadź tekst";
            parent.className = "warning"
            parent.appendChild(mess);
        }
    }

    async function fetchZakoduj(isChecked){
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                userText: input,
                checkboxChoose: isChecked
            }),
        };

       await fetch("http://localhost:3002/encryptText", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setHash(data.userTextHash)
                setResponseCode(data.responseCode)
                message();
            })
            .catch((error) => {
                console.error('Error:', error);
              });
        
    }


    function message() {
        let parent = document.getElementById("sprawdzMessage");
        let child = parent.lastChild;
        if (child) {
            parent.removeChild(child);
            parent.className = "";
        }
        else {
            if (responseCode === 0) {
                let mess = document.createElement("span");
                mess.innerHTML = hash;
                parent.className = "ok"
                parent.appendChild(mess);
            }
            else if ( responseCode === 1){
                let mess = document.createElement("span");
                mess.innerHTML = hash + " dodany do bazy danych";
                parent.className = "ok"
                parent.appendChild(mess);
            }

            else {
                let mess = document.createElement("span");
                mess.innerHTML = hash + " nie dodany do bazy bo już istnieje";
                parent.className = "ok"
                parent.appendChild(mess);
            }
        }
    }

    return (
         <article className="article-zakoduj">
            <div className="sprawdz-div">
                <input
                    type="text"
                    placeholder="Wprowadź wiadomość"
                    value={input}
                    onInput={(e) => setInput(e.target.value)}
                />
                <img
                    src={klucz}
                    alt="klucz"
                    role="presentation"
                    onClick={handleKey}
                />
            </div>
            <div className="checkbox">
                <input type="checkbox" onChange={e => setCheckbox(e.target.checked)} />
                <span>Dodaj do bazy danych</span>
            </div>
            <div id="sprawdzMessage">

            </div>
            
     </article>
    );
};

export default Zakoduj;
