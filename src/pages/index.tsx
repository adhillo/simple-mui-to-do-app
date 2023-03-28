import { useState } from "react";
import TodoItem from "../components/TodoItem";
import Todo from "../types/todo";
import { Container, Typography, Box, TextField, Button } from "@mui/material";

export default function Home() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      task: input,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, newTask: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      )
    );
  };

  const toggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h4" component="h1" align="center">
          Simple To-Do App
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={addTodo}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          marginBottom: 2,
        }}
      >
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          label="Enter a new task"
          autoComplete="off"
          variant="outlined"
          sx={{
            marginRight: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
            },
            "& .MuiOutlinedInput-root:hover": {
              "& fieldset": {
                borderColor: "green",
              },
            },
            "& .MuiInputLabel-root": {
              color: "grey",
            },
            "& .MuiInputBase-root": {
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </Box>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </Container>
  );
}
