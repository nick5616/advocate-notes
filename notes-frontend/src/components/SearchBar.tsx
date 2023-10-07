import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export function SearchBar(props: {
    onSearchTextChanged: (text: string) => void;
}) {
    return (
        <div
            style={{
                display: "flex",
                marginLeft: "20px",
                alignItems: "center",
                justifyContent: "flex-end",
            }}
        >
            <h2>Search Notes</h2>
            <div
                style={{
                    marginLeft: "10px",
                    border: "1px solid #e9e9e9",
                    padding: "5px",
                    borderRadius: "5px",
                    alignItems: "center",
                }}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
                <input
                    placeholder=""
                    style={{ border: "none", outline: 0, marginLeft: "5px" }}
                    onChange={(event) =>
                        props.onSearchTextChanged(event.target.value)
                    }
                ></input>
            </div>
        </div>
    );
}
