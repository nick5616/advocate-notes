import React from "react";
import { Note } from "../models";
import { LengthIndicator } from "./LengthIndicator";
function validatePost(note: Note) {
    const isValid =
        note.title.length > 0 &&
        note.body.length <= 300 &&
        note.body.length > 20;
    console.log("validating post. valid?", isValid);

    return isValid;
}
export function NoteCreator(props: { onPostClicked: (note: Note) => void }) {
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");
    const postValid = validatePost({ title, body });
    const buttonColoring = postValid
        ? {
              backgroundColor: "#d7a13b",
              backgroundImage: "linear-gradient(45deg,#deb260,#d39009)",
          }
        : { backgroundColor: "#e9e9e9" };
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h2>Create a note</h2>
            <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Note title"
            ></input>
            <input
                value={body}
                onChange={(event) => setBody(event.target.value)}
                placeholder="Write it down!"
            ></input>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px",
                }}
            >
                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "5px" }}>{body.length}/300</div>
                    <LengthIndicator length={body.length}></LengthIndicator>
                </div>

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
                    onClick={() => {
                        console.log("post clicked");
                        // TODO: Put the validation constants (20, 300) as constants in their own module
                        // or create a validator that <LengthIndicator> and <NoteCreator> use
                        if (postValid) {
                            props.onPostClicked({ title: title, body: body });
                        }
                    }}
                >
                    Post
                </div>
            </div>
        </div>
    );
}
