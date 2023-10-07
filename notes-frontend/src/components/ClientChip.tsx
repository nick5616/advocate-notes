interface ChipProps {
    text: string;
    active: boolean;
    index: number;
    onChipClick: (chipIndex: number) => void;
}
export function ClientChip(props: ChipProps) {
    const classString = props.active ? "chip chip-active" : "chip";
    return (
        <div
            className={classString}
            onClick={() => props.onChipClick(props.index)}
        >
            {props.text}
        </div>
    );
}
