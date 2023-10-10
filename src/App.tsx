import "./App.css";
import { ViewChecklist } from "./pages/ViewChecklist";
import { ListOfChecklists } from "./pages/ListOfChecklists";

function App() {
  const urlParams = new URL(document.location.href).pathname
    .replace(/\/$/, "")
    .replace("/checklist", "")
    .replace(/^\//, "")
    .split("/");

  const checklistId = urlParams[0];

  if (checklistId) {
    return <ViewChecklist checklistParams={checklistId} />;
  }

  return <ListOfChecklists />;
}

export default App;
