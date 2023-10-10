import "./App.css";
import { ViewChecklist } from "./pages/ViewChecklist";
import { ListOfChecklists } from "./pages/ListOfChecklists";

function App() {
  const url = import.meta.env.DEV ? document.URL : document.referrer;
  const urlParams = url
    ? new URL(url).pathname
        .replace(/\/$/, "")
        .replace("/checklist", "")
        .replace(/^\//, "")
        .split("/")
    : [""];

  const checklistId = urlParams[0];

  if (checklistId) {
    return <ViewChecklist checklistParams={checklistId} />;
  }

  return <ListOfChecklists />;
}

export default App;
