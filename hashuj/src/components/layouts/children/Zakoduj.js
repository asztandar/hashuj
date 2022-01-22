import * as React from "react";
import { useState } from "react";
import "../../../styles/style.css";
import klucz from "../../../images/key.png";

const Zakoduj = () => {
    const [input, setInput] = useState("");


    return (
        <article className="article">
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
                />
            </div>
        </article>
    );
};

export default Zakoduj;
