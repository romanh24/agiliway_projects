import "./App.css";
import { Task1 } from "./tasks/Task1";
import { Task2 } from "./tasks/Task2";
import { Task3 } from "./tasks/Task3";
import { Task4 } from "./tasks/Task4";
import { Task5 } from "./tasks/Task5";
import { Task6 } from "./tasks/Task6";
import { Task7 } from "./tasks/Task7/Task7";
import { Task8 } from "./tasks/Task8/Task8";
import { Task9 } from "./tasks/Task9/Task9";
import { Task10 } from "./tasks/Task10/Task10";
import { Task11 } from "./tasks/Task11/Task11";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <ToDoList />
      {/* <Task1 />
      <Task2 />
      <Task3 />
      <Task4 name="Sara" />
      <Task5 />
      <Task6 />
      <Task7 />
      <Task8 />
      <Task9 />
      <Task10 />
      <Task11 /> */}
    </div>
  );
}

export default App;
