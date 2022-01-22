import * as React from "react";
import { useState } from "react";
import "../../../styles/style.css";
import lupa from "../../../images/search.png";
import { goodLenght, isEmpty } from "../../../functions/functions";
const Sprawdz = () => {
    const [input, setInput] = useState("");



    function handleClick(){
        if(isEmpty(input) && goodLenght(input))  checkHashExist(input)

    }

    function checkHashExist(value){
        alert("Tak");
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
        </article>
    );
};

export default Sprawdz;
