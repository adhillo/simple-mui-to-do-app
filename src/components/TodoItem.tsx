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
    <div>
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
        <button className={styles.deleteButton} onClick={handleDeleteClick}>
          Delete
        </button>
      </span>
    </div>
  );
};

export default TodoItem;
