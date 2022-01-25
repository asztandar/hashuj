import * as React from "react";
import { useState } from "react";
import "../../../styles/style.css";
import lupa from "../../../images/search.png";
import { goodLenght, isEmpty } from "../../../functions/functions";
const Sprawdz = () => {
    const [input, setInput] = useState("");
    const [hash, setHash] = useState("");
    const [hashText, setHashText] = useState("");
    const [responseCode, setResponseCode] = useState("");

    function handleClick() {
        if (isEmpty(input) && goodLenght(input)) checkHashExist(input);
    }

    async function checkHashExist(value) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userHash: value }),
        };
        await fetch("http://hashuj-labproj24.apps.ocp.lab.cloudpak.site:3000/checkHash", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setHash(data.userHash);
                setHashText(data.hashText);
                setResponseCode(data.responseCode);
                message();
            });
        console.log(hash);
    }

    function message() {
        let parent = document.getElementById("sprawdzMessage");
        let child = parent.lastChild;
        if (child) {
            parent.removeChild(child);
            parent.className = "";
        }
        else {
            if (responseCode === 5 || responseCode === 3) {
                let mess = document.createElement("span");
                console.log(hashText)
                mess.innerHTML = hashText;
                parent.className = "ok"
                parent.appendChild(mess);
            }
            else {
                let mess = document.createElement("span");
                mess.innerHTML = "Nie znaleziono";
                parent.className = "error"
                parent.appendChild(mess);
            }
        }
    }

    return (
        <article className="article">
            <div className="sprawdz-div">
                <input
                    type="text"
                    placeholder="Wprowadź swój skrót tutaj"
                    value={input}
                    onInput={(e) => setInput(e.target.value)}
                />
                <img
                    src={lupa}
                    alt="lupa"
                    role="presentation"
                    onClick={handleClick}
                    onKeyDown={handleClick}
                />
            </div>

            <div id="sprawdzMessage"></div>
        </article>
    );
};

export default Sprawdz;
