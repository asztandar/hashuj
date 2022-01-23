import * as React from "react";
import NoModule from "../components/layouts/children/NoModule";
import Sprawdz from "../components/layouts/children/Sprawdz";
import Layout from "../components/layouts/Layout";
import "../styles/style.css";

class IndexPage extends React.Component {
    state = {
        res: "",
        comp: <NoModule />,
        comp2: <Sprawdz />,
        exist: false,
        view: "",
    };

    async componentDidMount() {
        try {
            await fetch("http://localhost:3000/existModule")
                .then((response) => response.json())
                .then(({ existModule }) =>
                    this.setState({ res: JSON.stringify(existModule) })
                );
        } catch (e) {
            console.error(e);
        }
        if (this.state.res === "true")
            this.setState({ view: this.state.comp2 });
        else this.setState({ view: this.state.comp });
    }

    render() {
        return (
            <main className="main">
                <Layout>
                    <article className="article">{this.state.view}</article>
                </Layout>
            </main>
        );
    }
}

export default IndexPage;

// const IndexPage = () => {
//   return (
//     <main className="main">
//        <Layout>
//          <Sprawdz />
//        </Layout>
//     </main>
//   )
// }

// export default IndexPage
