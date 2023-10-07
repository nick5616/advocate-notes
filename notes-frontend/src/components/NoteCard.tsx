import { Note } from "../models";

export function NoteCard(props: Note) {
    return (
        <div
            style={{
                // border: "1px solid grey",
                padding: "5px",
                marginBottom: "20px",
                // borderRadius: "20px",
                boxShadow: "0px 5px 7px #d9d9d9",
                borderRadius: "10px",
                backgroundColor: "white",
            }}
        >
            <h1 className="heading-style-display-md left-align-text padded-md">
                {props.title}
            </h1>
            <p style={{ padding: "0 20px" }}>{props.body}</p>
            <p>
                Written {props.date} for client {props.clientId}
            </p>
            {props.shared ? <div>Share</div> : <></>}
        </div>
    );
}
