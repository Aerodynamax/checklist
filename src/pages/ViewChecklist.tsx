import "../App.css";
import { Checklist } from "../components/Checklist";
import { firebaseApp } from "../firebase";

import {
  getFirestore,
  collection,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { Item, ListofItems } from "../types";
import { FunctionComponent } from "react";

// const DATA: ListofItems = [
//   { id: "item-0", name: "Eggs", completed: true },
//   { id: "item-1", name: "Milk", completed: false },
//   { id: "item-2", name: "Bread", completed: true },
// ];

const fireStore = getFirestore(firebaseApp);

type Props = {
  checklistParams: string;
};

export const ViewChecklist: FunctionComponent<Props> = ({
  checklistParams,
}) => {
  const collectionPath = `/Checklists/${checklistParams}`;

  const handleAdd = async (item: Item) => {
    await setDoc(doc(fireStore, `${collectionPath}/items`, item.id), item);

    document.getElementById(item.id)?.scrollIntoView();
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(fireStore, `${collectionPath}/items`, id));
  };

  const handleCheck = async (item: Item) => {
    await updateDoc(doc(fireStore, `${collectionPath}/items`, item.id), {
      completed: item.completed,
    });
  };

  const collectionRef = collection(fireStore, `${collectionPath}/items`);

  const [value, loading, error] = useCollection(
    query(collectionRef, orderBy("timeStamp"))
  );

  const firebaseData = value?.docs.map((document) => {
    return document.data();
  }) as ListofItems;

  setDoc(doc(fireStore, `${collectionPath}`), {
    public: true,
  });

  return (
    <>
      {loading && <span>Collection: Loading...</span>}
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {value && (
        <Checklist
          items={firebaseData || []}
          onAdd={handleAdd}
          onDelete={handleDelete}
          onCheck={handleCheck}
        ></Checklist>
      )}

      <p className="read-the-docs">
        Currently viewing checklist: {checklistParams}
      </p>
    </>
  );
};
