import * as React from "react";
import "../../../styles/style.css";

const NoModule = () => {
    return (
         <article className="article">
            <div className="nomodule">
                <p>Przepraszamy, błąd podczas łączenia się z modułem</p>
                <p>Odśwież stronę!</p>
            </div>
         </article>
    );
};

export default NoModule;
