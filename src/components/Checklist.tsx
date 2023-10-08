import { FunctionComponent } from "react";
import { ChecklistItem } from "./ChecklistItem";
import { ListofItems } from "../App";

type Props = { items: ListofItems };

export const Checklist: FunctionComponent<Props> = ({ items }) => {
  const taskList = items.map((task) => (
    <ChecklistItem
      id={task.id}
      title={task.name}
      completed={task.completed}
      key={task.id}
    ></ChecklistItem>
  ));

  return (
    <>
      <h1 className="heading">Checklist</h1>

      <ul role="list" className="card-list" aria-labelledby="list-heading">
        {taskList}
      </ul>

      <form className="submit-form">
        <input
          type="text"
          id="card-title-input"
          className="input-for-card fill"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="add-card">
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
