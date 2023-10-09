import "./App.css";
import { Checklist } from "./components/Checklist";

export type Item = {
  id: string;
  name: string;
  completed: boolean;
};
export type ListofItems = Item[];

const DATA: ListofItems = [
  { id: "item-0", name: "Eggs", completed: true },
  { id: "item-1", name: "Milk", completed: false },
  { id: "item-2", name: "Bread", completed: true },
];

function App() {
  return (
    <>
      <Checklist items={DATA}></Checklist>

      <p className="read-the-docs">A simple checklist app written in react</p>
    </>
  );
}

export default App;
