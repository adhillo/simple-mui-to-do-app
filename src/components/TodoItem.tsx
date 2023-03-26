import Todo  from "../types/todo";
import { Checkbox, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem: React.FC<Props> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <ListItem   sx={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        marginBottom: 1,
        borderRadius: 1,
      }}>
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <ListItemText
        primary={todo.title}
        sx={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: "white",
          }}
      />
      <IconButton edge="end" onClick={() => deleteTodo(todo.id)} sx={{color:"red"}}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
