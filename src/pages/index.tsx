import { useState } from "react";
import TodoItem from "../components/TodoItem";
import Todo from "../types/todo";
import styles from "../styles/Home.module.css";

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
    <div className={styles.topContainer}>
      <div className={styles.title}>
        <h1> Simple To Do App</h1>
      </div>
      <form onSubmit={addTodo} className={styles.formInput}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button type="submit">Add</button>
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
