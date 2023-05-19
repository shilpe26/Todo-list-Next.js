import { useState } from "react";

const Index = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([input, ...todoList]);
    setInput("");
  };
  const handleDelete = (item) => {
    const updatedArr = todoList.filter(
      (el) => todoList.indexOf(el) !== todoList.indexOf(item)
    );
    setTodoList(updatedArr);
  };
  return (
    <div>
      <h3>Next JS Todolist</h3>
      <form>
        <input
          type="text"
          value={input}
          placeholder="enter"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <ul>
        {todoList?.length >= 1
          ? todoList?.map((item, id) => {
              return (
                <li key={id}>
                  {item}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(item);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })
          : "Enter"}
      </ul>
    </div>
  );
};
export default Index;
