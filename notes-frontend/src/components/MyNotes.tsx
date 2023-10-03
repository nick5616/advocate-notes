import React from "react";
import { Note } from "../models";
import { NoteCard } from "./NoteCard";
import { NoteCreator } from "./NoteCreator";

export function MyNotes() {
    const mockNotes: Note[] = [
        {
            title: "Pigeon",
            body: "I'm writing a story about a pigeon named Boyd. Well he loved to play in the leaves and eat old hotdog buns from the trash next to the hotdog stand on 9th by Lucy's go-to bodega. Lucy is Boyd's human friend. She will give him PigeonSnacks. At least, that's what she calls 'em. Boyd don't know what they are...",
        },
    ];
    const [notes, setNotes] = React.useState<Note[]>(mockNotes);
    const [showNoteCreator, setShowNoteCreator] = React.useState(false);
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

                        setNotes((oldNotes) => [...oldNotes, note]);
                        setShowNoteCreator(false);
                    }}
                ></NoteCreator>
            ) : (
                <div>
                    {notes.map((note, key) => (
                        <NoteCard
                            key={key}
                            title={note.title}
                            body={note.body}
                        ></NoteCard>
                    ))}
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
