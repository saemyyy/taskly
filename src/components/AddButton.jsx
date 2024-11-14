function Button({ task, onAddTask }) {
  const handleClick = () => {
    if (task) {
      onAddTask(); // Call onAddTask when button is clicked
    } else {
      console.log("Enter A Task");
    }
  };

  return <button onClick={handleClick}>Add Task</button>;
}

export default Button;
