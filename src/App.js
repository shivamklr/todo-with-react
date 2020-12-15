import React from "react";
import Header from "./components/Header";
import Main from "./components/Main"
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./index.css"
function App() {
    return (
        <div className="App">
            <Header />
            <Main/>
        </div>
    );
}

export default App;
