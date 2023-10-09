import { FunctionComponent, useState } from "react";
import { ChecklistItem } from "./ChecklistItem";
import { Item, ListofItems } from "../types";

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

type Props = {
  items: ListofItems;
  onAdd: (item: Item) => void;
  onDelete: (id: string) => void;
  onCheck: (item: Item) => void;
};

export const Checklist: FunctionComponent<Props> = ({
  items,
  onAdd,
  onDelete,
  onCheck,
}) => {
  const [newItemName, setNewItemName] = useState("");

  const taskList = items.map((task: Item) => (
    <ChecklistItem
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      onDelete={onDelete}
      onCheck={onCheck}
    ></ChecklistItem>
  ));

  return (
    <>
      <h1 className="heading">Checklist</h1>

      <ul role="list" className="card-list" aria-labelledby="list-heading">
        {taskList}
      </ul>

      <form
        className="submit-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          id="card-title-input"
          className="input-for-card fill"
          name="text"
          autoComplete="off"
          onChange={(event) => {
            setNewItemName(event.target.value);
          }}
        />
        <button
          type="submit"
          className="add-card"
          onClick={() => {
            const newData: Item = {
              id: uuidv4(),
              name: newItemName,
              completed: false,
              timeStamp: Date.now(),
            };

            onAdd(newData);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.8333 4.16667C10.8333 3.70643 10.4602 3.33333 10 3.33333C9.53977 3.33333 9.16667 3.70643 9.16667 4.16667V9.16667H4.16667C3.70643 9.16667 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70643 10.8333 4.16667 10.8333H9.16667V15.8333C9.16667 16.2936 9.53977 16.6667 10 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8333V10.8333H15.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16667 15.8333 9.16667H10.8333V4.16667Z"
              fill="white"
            />
          </svg>
        </button>
      </form>
    </>
  );
};
