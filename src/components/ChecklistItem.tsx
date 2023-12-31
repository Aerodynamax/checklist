import { FunctionComponent } from "react";
import { Item } from "../types";

type Props = {
  id: string;
  name: string;
  completed: boolean;
  onDelete: (id: string) => void;
  onCheck: (item: Item) => void;
};

export const ChecklistItem: FunctionComponent<Props> = ({
  id,
  name: title,
  completed,
  onDelete,
  onCheck,
}) => {
  return (
    <li className="card-li">
      <label className="card fill" htmlFor={id}>
        <div className="card-label-area">
          <input
            className="checkbox"
            id={id}
            type="checkbox"
            checked={completed}
            onChange={() => {
              onCheck({
                id: id,
                name: title,
                completed: !completed,
              } as Item);
            }}
          />
          <p className="title unselectable">{title}</p>
        </div>

        <button
          type="button"
          className="remove-card"
          onClick={() => {
            onDelete(id);
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
              d="M15.5893 5.58926C15.9147 5.26382 15.9147 4.73619 15.5893 4.41075C15.2638 4.08531 14.7362 4.08531 14.4107 4.41075L10 8.82149L5.58925 4.41075C5.26382 4.08531 4.73618 4.08531 4.41074 4.41075C4.0853 4.73619 4.0853 5.26382 4.41074 5.58926L8.82149 10L4.41074 14.4107C4.0853 14.7362 4.0853 15.2638 4.41074 15.5893C4.73618 15.9147 5.26382 15.9147 5.58925 15.5893L10 11.1785L14.4107 15.5893C14.7362 15.9147 15.2638 15.9147 15.5893 15.5893C15.9147 15.2638 15.9147 14.7362 15.5893 14.4107L11.1785 10L15.5893 5.58926Z"
              fill="var(--surface-text-default)"
            />
          </svg>
        </button>
      </label>
    </li>
  );
};
