import { useState } from 'react'
import './App.css'

function App() {
  const [newItem, setNewItem] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo(currentTodo => {
      return [
        ...todo, {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        }
      ]
    })
  }

  return (
    <>
      <form onClick={handleSubmit}>
        <div>
          <h1>TODO App</h1>
          <label htmlFor='newItem'>Add item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type='text'
            id='newItem'
          />
          <button>Add</button>
        </div>
      </form>

      <h1>TODO list</h1>
      <ul>
        <li>
          <label>
            <input type='checkbox' />
            Item 1
          </label>
          <button>Delete</button>
        </li>
      </ul>
    </>
  )
}

export default App
