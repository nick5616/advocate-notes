export function LengthIndicator(props: { length: number }) {
    let expr = "";

    if (props.length < 20) {
        expr = "Must be 20 characters or greater";
    } else if (props.length > 300) {
        expr = "Must be 300 characters or less";
    } else {
        expr = "";
    }
    return <div>{expr}</div>;
}
