import "./App.css";
import Sprawdz from "./Sprawdz";
import Zakoduj from "./Zakoduj";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function App() {
    console.log("Frontend")
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/zakoduj">
                        <Zakoduj />
                    </Route>
                    <Route path="/">
                        <Sprawdz />
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
