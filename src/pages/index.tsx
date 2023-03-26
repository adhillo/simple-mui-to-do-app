import { useState } from "react";
import TodoItem from "../components/TodoItem";
import Todo from "../types/todo";
import styles from "../styles/App.module.css";

export default function Home() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      title: input,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}> Simple To Do App</h1>

      <form onSubmit={addTodo} className={`${styles.flex} ${styles.justifyCenter}`}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.formInput}
        ></input>
        <button type="submit" className={styles.formButton}>Add</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          ></TodoItem>
        ))}
      </div>
    </div>
  );
}
