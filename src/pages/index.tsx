import { useState } from "react";
import TodoItem from "../components/TodoItem";
import Todo from "../types/todo";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { grey } from "@mui/material/colors";

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
          autoComplete='off'
          variant="outlined"
                 sx={{
            marginRight: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
            "& .MuiInputLabel-root": {
              color: "white",
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
          />
        ))}
      </div>
    </Container>
  );
}
