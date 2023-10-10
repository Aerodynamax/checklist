import "./App.css";
import { Checklist } from "./components/Checklist";
import { firebaseApp } from "./firebase";

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
import { Item, ListofItems } from "./types";

// const DATA: ListofItems = [
//   { id: "item-0", name: "Eggs", completed: true },
//   { id: "item-1", name: "Milk", completed: false },
//   { id: "item-2", name: "Bread", completed: true },
// ];

const fireStore = getFirestore(firebaseApp);

async function handleAdd(item: Item) {
  await setDoc(
    doc(fireStore, "/Checklists/gCZXvFafbCgSThFMFscp/items", item.id),
    item
  );

  document.getElementById(item.id)?.scrollIntoView();
}

async function handleDelete(id: string) {
  await deleteDoc(doc(fireStore, "/Checklists/gCZXvFafbCgSThFMFscp/items", id));
}

async function handleCheck(item: Item) {
  await updateDoc(
    doc(fireStore, "/Checklists/gCZXvFafbCgSThFMFscp/items", item.id),
    {
      completed: item.completed,
    }
  );
}

function App() {
  const collectionRef = collection(
    fireStore,
    "/Checklists/gCZXvFafbCgSThFMFscp/items"
  );

  const [value, loading, error] = useCollection(
    query(collectionRef, orderBy("timeStamp"))
  );

  const firebaseData = value?.docs.map((document) => {
    return document.data();
  }) as ListofItems;

  console.log(document.referrer);

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

      <p className="read-the-docs">A simple checklist app written in react</p>
    </>
  );
}

export default App;
