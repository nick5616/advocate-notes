import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MyNotes } from "./components/MyNotes";

function App() {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "auto",
            }}
            className="App"
        >
            <MyNotes></MyNotes>
        </div>
    );
}

export default App;
