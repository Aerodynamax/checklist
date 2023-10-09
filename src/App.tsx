import "./App.css";
import { Checklist } from "./components/Checklist";
import { firebaseApp } from "./firebase";

import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

export type Item = {
  id: string;
  name: string;
  completed: boolean;
};
export type ListofItems = Item[];

// const DATA: ListofItems = [
//   { id: "item-0", name: "Eggs", completed: true },
//   { id: "item-1", name: "Milk", completed: false },
//   { id: "item-2", name: "Bread", completed: true },
// ];

function App() {
  const [value, loading, error] = useCollection(
    collection(
      getFirestore(firebaseApp),
      "/Checklists/gCZXvFafbCgSThFMFscp/items"
    )
  );

  const firebaseData = value?.docs.map((doc) => {
    return doc.data();
  }) as ListofItems;

  console.log(firebaseData);

  return (
    <>
      {loading && <span>Collection: Loading...</span>}
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {value && <Checklist items={firebaseData || []}></Checklist>}

      <p className="read-the-docs">A simple checklist app written in react</p>
    </>
  );
}

export default App;
