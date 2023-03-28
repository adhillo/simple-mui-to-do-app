import Todo from "../types/todo";
import {
  Checkbox,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Button,
  Box,
} from "@mui/material";
import {
  DeleteOutlined as DeleteIcon,
  EditOutlined as EditIcon,
} from "@mui/icons-material";
import { useState } from "react";

type Props = {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newTask: string) => void;
};

const TodoItem: React.FC<Props> = ({
  todo,
  toggleComplete,
  deleteTodo,
  editTodo,
}) => {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    editTodo(todo.id, editedTask);
    setEditing(false);
  };
  return (
    <ListItem
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        marginBottom: 1,
        borderRadius: 1,
      }}
    >
      {editing ? (
        <Box
          component="form"
          onSubmit={handleEdit}
          sx={{ display: "flex", alignItems: "center", width: "100%" }}
        >
          <TextField
            variant="standard"
            fullWidth
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            sx={{
              marginRight: 1,
              "& .MuiInputBase-root": {
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
              "& .MuiInputBase-input": {
                paddingLeft: 1, // Add this line
              },
            }}
          />
          <Button variant="contained" type="submit" color="secondary">
            Save
          </Button>
        </Box>
      ) : (
        <>
          <Checkbox
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            sx={{
              color: "white",
            }}
          />
          <ListItemText
            primary={todo.task}
            sx={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: "white",
            }}
          />
          <IconButton
            onClick={() => {
              setEditing(true);
            }}
            color="success"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            onClick={() => deleteTodo(todo.id)}
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        </>
      )}
    </ListItem>
  );
};

export default TodoItem;
