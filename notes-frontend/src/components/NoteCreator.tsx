import React from "react";
import { Note } from "../models";
import { LengthIndicator } from "./LengthIndicator";
import "./components.css";
import { ClientSelector } from "./ClientSelector";
function validatePost(title: string, body: string) {
    const isValid = title.length > 0 && body.length <= 300 && body.length > 20;
    console.log("validating post. valid?", isValid);

    return isValid;
}
export function NoteCreator(props: { onPostClicked: () => void }) {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");
    const date = new Date().toLocaleString("en-US", {
        hour12: true,
        timeZone,
    });
    const [clientId, setClientId] = React.useState(1);
    const postValid = validatePost(title, body);
    const buttonColoring = postValid
        ? {
              backgroundColor: "#d7a13b",
              backgroundImage: "linear-gradient(45deg,#deb260,#d39009)",
          }
        : { backgroundColor: "#e9e9e9" };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
            }}
        >
            <h1 className="heading-style-display-lg left-align-text-padded">
                Create a note
            </h1>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0px 5px 7px #d9d9d9",
                    borderRadius: "10px",
                }}
            >
                <input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Note title"
                    className="input input-note-title"
                ></input>

                <textarea
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                    placeholder="Write it down!"
                    className="input input-note-body"
                ></textarea>
            </div>
            <div style={{ display: "flex", marginTop: "10px" }}>
                <div style={{ marginRight: "5px" }}>{body.length}/300</div>
                <LengthIndicator length={body.length}></LengthIndicator>
            </div>
            <ClientSelector
                onClientsSelectedChanged={(newSelection) => {
                    setClientId(newSelection[0]);
                }}
                enableMultiSelect={false}
                text="Client"
            ></ClientSelector>
            <div style={{ display: "flex" }}>
                <input
                    id="share-button"
                    type="checkbox"
                    className="checkbox"
                ></input>
                <label htmlFor="share-button">Share with client</label>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    marginTop: "10px",
                }}
            >
                <div
                    style={{
                        color: "#101010",
                        textAlign: "center",
                        ...buttonColoring,
                        borderRadius: "10px",
                        padding: "1rem 4.5rem",
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        transition: "bottom .2s,box-shadow .2s",
                        position: "relative",
                        bottom: 0,
                        boxShadow:
                            "0 2px 17px 2px rgba(175,200,191,.3), inset 0 2px 4.7px rgba(255",
                    }}
                    className="emphasis-button"
                    onClick={() => {
                        console.log("post clicked");
                        // TODO: Put the validation constants (20, 300) as constants in their own module
                        // or create a validator that <LengthIndicator> and <NoteCreator> use
                        if (postValid) {
                            const note: Note = {
                                body,
                                title,
                                date,
                                shared: false,
                                clientId,
                            };
                            console.log("about to send note", note);
                            fetch("http://localhost:3001/notes", {
                                method: "POST",
                                body: JSON.stringify({ note: note }),
                                headers: {
                                    Accept: "application.json",
                                    "Content-Type": "application/json",
                                },
                            });
                            props.onPostClicked();
                        }
                    }}
                >
                    Post
                </div>
            </div>
        </div>
    );
}
