import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

export default function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <IconButton>
                <DeleteIcon
                    sx={{ color: '#d61a29' }}
                    onClick={() => deleteTodo(id)} />
            </IconButton>
            {/* <button onClick={() => deleteTodo(id)} className="btn btn-danger">
                Delete
            </button> */}
        </li>
    )
}