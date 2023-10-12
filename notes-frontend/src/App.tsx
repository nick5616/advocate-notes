import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MyNotes } from "./components/MyNotes";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";

function App() {
    return (
        <Router>
            <div>
                <section>
                    <Routes>
                        {" "}
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/home" element={<MyNotes />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </section>
            </div>
        </Router>
    );
}

export default App;
