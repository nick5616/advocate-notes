import React, { useState } from "react";
import { Note } from "../models";
import { NoteCard } from "./NoteCard";
import { NoteCreator } from "./NoteCreator";

export function MyNotes() {
    const [notes, setNotes] = React.useState<Note[]>();
    const [showNoteCreator, setShowNoteCreator] = React.useState(false);
    const [response, setResponse] = useState<Note[]>();
    React.useEffect(() => {
        fetch("http://localhost:3001/notes")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log("res", res);
                const notes: Note[] = res.notes;
                setNotes(notes);
            });
    }, []);

    return (
        <div
            style={{
                border: "1px solid black",
                width: "50vw",
                margin: "auto",
                padding: "10px",
            }}
        >
            <h1>My Notes</h1>
            {showNoteCreator ? (
                <NoteCreator
                    onPostClicked={(note: Note) => {
                        console.log("my notes knows post was clicked");

                        setNotes((oldNotes) => {
                            if (oldNotes) {
                                const notes = [...oldNotes];
                                return [...notes, note];
                            }
                            return [note];
                        });
                        setShowNoteCreator(false);
                    }}
                ></NoteCreator>
            ) : (
                <div>
                    {notes
                        ? notes.map((note, key) => (
                              <NoteCard
                                  key={key}
                                  title={note.title}
                                  body={note.body}
                              ></NoteCard>
                          ))
                        : "Take your first note"}
                    <div
                        style={{
                            backgroundColor: "#e9e9e9",
                            width: "fit-content",
                            padding: "10px",
                            marginTop: "10px",
                        }}
                        onClick={() => {
                            setShowNoteCreator(true);
                        }}
                    >
                        New note
                    </div>
                </div>
            )}
        </div>
    );
}
