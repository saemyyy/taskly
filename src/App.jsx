import { useState } from "react";
import "./Index.css";
import Button from "./components/AddButton";
import InputField from "./components/InputField";

function App() {
  const [task, setTask] = useState(""); // State to hold the task

  const handleAddTask = () => {
    if (task) {
      console.log("Task added:", task); // You can handle task submission here
      setTask(""); // Reset the task field
    } else {
      console.log("Enter a task");
    }
  };

  return (
    <div className="app-wrapper">
      <InputField task={task} setTask={setTask} /> {/* Pass task and setTask */}
      <Button task={task} onAddTask={handleAddTask} />
    </div>
  );
}

export default App;
