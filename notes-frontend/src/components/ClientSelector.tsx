import { useState } from "react";
import { ClientChip } from "./ClientChip";

export function ClientSelector(props: {
    enableMultiSelect: boolean;
    text: string;
    onClientsSelectedChanged: (clientIds: number[]) => void;
}) {
    const clients = [
        { name: "Client 1", clientId: 1 },
        { name: "Client 2", clientId: 2 },
        { name: "Client 3", clientId: 3 },
        { name: "Client 4", clientId: 4 },
        { name: "Client 5", clientId: 5 },
    ];
    const [selected, setSelected] = useState<boolean[]>(
        clients.map((_) => false)
    );

    console.log("selected", selected);
    const array = [];
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
            }}
        >
            <h2>{props.text}</h2>
            {clients.map((chip, index) => {
                return (
                    <ClientChip
                        text={chip.name}
                        active={selected[index]}
                        index={index}
                        onChipClick={(index: number) => {
                            console.log("toggling", index);

                            const clientIdsSelected = props.enableMultiSelect
                                ? (selected
                                      .map(
                                          (
                                              chipSelected: boolean,
                                              i: number
                                          ) => {
                                              console.log(
                                                  "chipSelected",
                                                  chipSelected,
                                                  i
                                              );
                                              if (
                                                  (!chipSelected &&
                                                      i !== index) ||
                                                  (chipSelected && i === index)
                                              ) {
                                                  return;
                                              }
                                              return clients[i].clientId;
                                          }
                                      )
                                      .filter(
                                          (chip) => chip !== undefined
                                      ) as number[])
                                : [clients[index].clientId];
                            console.log(
                                "determined client ids selected",
                                clientIdsSelected
                            );
                            props.onClientsSelectedChanged(clientIdsSelected);
                            setSelected((selectedChips) => {
                                const newSelectedChips = [...selectedChips];
                                newSelectedChips[index] =
                                    !newSelectedChips[index];

                                return props.enableMultiSelect
                                    ? newSelectedChips
                                    : clients.map((_, i) => i === index);
                            });
                        }}
                    ></ClientChip>
                );
            })}
        </div>
    );
}
