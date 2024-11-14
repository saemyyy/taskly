function InputField({ task, setTask }) {
  const handleChange = (event) => {
    setTask(event.target.value); // Update task value
  };

  return (
    <input
      type="text"
      placeholder="Enter a Task"
      value={task}
      onChange={handleChange} // Update task state on change
    />
  );
}

export default InputField;
