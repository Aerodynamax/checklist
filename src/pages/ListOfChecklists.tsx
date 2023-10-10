import { useCollection } from "react-firebase-hooks/firestore";
import "../App.css";
import { firebaseApp } from "../firebase";

import { getFirestore, collection } from "firebase/firestore";
import { FunctionComponent } from "react";

// const DATA: ListofItems = [
//   { id: "item-0", name: "Eggs", completed: true },
//   { id: "item-1", name: "Milk", completed: false },
//   { id:"item-2", name: "Bread", completed: true },
// ];

const fireStore = getFirestore(firebaseApp);

export const ListOfChecklists: FunctionComponent = () => {
  const collectionPath = `Checklists`;

  const [value, loading, error] = useCollection(
    collection(fireStore, collectionPath)
  );

  const Checklists = value?.docs.map((doc) => {
    return (
      <li key={doc.id} className="card-li">
        <a href={`./${doc.id}`} className="card">
          {doc.id}
        </a>
      </li>
    );
  });

  return (
    <>
      {loading && <span>Collection: Loading...</span>}
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {value && (
        <>
          <h1 className="heading">Checklists</h1>

          <ul className="card-list" aria-labelledby="list-heading">
            {Checklists}
          </ul>
        </>
      )}
    </>
  );
};
