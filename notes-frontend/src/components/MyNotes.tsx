import React, { useState } from "react";
import { Note } from "../models";
import { NoteCard } from "./NoteCard";
import { NoteCreator } from "./NoteCreator";
import "../App.css";
import "./components.css";
import { ClientChip } from "./ClientChip";
import { ClientSelector } from "./ClientSelector";
import { SearchBar } from "./SearchBar";

export function MyNotes() {
    const [notes, setNotes] = React.useState<Note[]>();
    const [showNoteCreator, setShowNoteCreator] = React.useState(false);
    const [clientsDisplayed, setClientsDisplayed] = React.useState<number[]>(
        []
    );
    const [searchText, setSearchText] = React.useState<string | undefined>();
    console.log("clients displayed", clientsDisplayed);
    const notesDisplayed = notes
        ?.filter((note: Note) => {
            if (note && clientsDisplayed.length === 0) {
                return true;
            }
            return note && clientsDisplayed.includes(note.clientId);
        })
        .filter((note: Note) => {
            if (!searchText) {
                return true;
            }
            return (
                note.title.includes(searchText) ||
                note.body.includes(searchText)
            );
        });
    function fetchNotes() {
        console.log("🐽 re-fetching");
        fetch("http://localhost:3001/notes/")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log("res", res);
                const notes: Note[] = res.notes;
                setNotes(notes);
            });
    }
    console.log("🍏 notes displayed", notesDisplayed);
    React.useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div
            className="text-box_container outline-green"
            style={{
                width: "60vw",
            }}
        >
            {showNoteCreator ? (
                <></>
            ) : (
                <h1 className="heading-style-display-lg text-box_header-wrapper">
                    My Notes
                </h1>
            )}
            {showNoteCreator ? (
                <NoteCreator
                    onPostClicked={() => {
                        console.log("my notes knows post was clicked");

                        fetchNotes();
                        setShowNoteCreator(false);
                    }}
                ></NoteCreator>
            ) : (
                <div style={{ width: "100%" }}>
                    <SearchBar
                        onSearchTextChanged={(text: string) => {
                            setSearchText(text);
                        }}
                    ></SearchBar>

                    <div style={{ display: "flex" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                            }}
                        >
                            <ClientSelector
                                onClientsSelectedChanged={(newClients) => {
                                    console.log("new clients", newClients);
                                    setClientsDisplayed(newClients);
                                }}
                                enableMultiSelect={true}
                                text="Clients"
                            ></ClientSelector>
                        </div>
                    </div>
                    {notesDisplayed
                        ? notesDisplayed.map((note, key) => (
                              <NoteCard
                                  key={key}
                                  title={note.title}
                                  date={note.date}
                                  clientId={note.clientId}
                                  body={note.body}
                                  shared={note.shared}
                              ></NoteCard>
                          ))
                        : "Take your first note"}
                    <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                        <div
                            style={{
                                width: "fit-content",
                                marginTop: "20px",
                            }}
                            onClick={() => {
                                setShowNoteCreator(true);
                            }}
                            className="button button-is-icon-is-advocate flex-end"
                        >
                            <div>New note</div>
                            <img
                                src="https://uploads-ssl.webflow.com/632a21d0ec93a082b11988a0/63517660a3153196a02f850e_Arrow%201.svg"
                                loading="lazy"
                                alt=""
                            ></img>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
