import React from "react";
import Todo from "../types/todo";
import styles from "./TodoItem.module.css";

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleComplete,
  deleteTodo,
}) => {
  const handleCheckboxChange = () => {
    toggleComplete(todo.id);
  };
  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };
  return (
    <div className={styles.toDoCard}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
      />
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          marginLeft: "10px",
          fontFamily: "monospace",
        }}
      >
        {todo.title}
      </span>
      <button className={styles.deleteButton} onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
};

export default TodoItem;
