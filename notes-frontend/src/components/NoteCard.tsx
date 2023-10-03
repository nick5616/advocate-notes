export function NoteCard(props: { title: string; body: string }) {
    return (
        <div
            style={{
                border: "1px solid black",
                padding: "5px",
                marginBottom: "5px",
            }}
        >
            <h1>{props.title}</h1>
            <p>{props.body}</p>
        </div>
    );
}
