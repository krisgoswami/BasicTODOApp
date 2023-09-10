import { useState } from 'react'
import './App.css'

function App() {
  const [newItem, setNewItem] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo(currentTodo => {
      return [
        ...currentTodo, {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        }
      ]
    })
    setNewItem("");
  }

  const toggleTodo = (id, completed) => {
    setTodo(currentTodo => {
      return currentTodo.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo;
      })
    })
  }

  const deleteTodo = (id) => {
    setTodo(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id);
    })
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='new-item-form'
      >
        <div className='form-row'>
          <h1>TODO App</h1>
          <label htmlFor='newItem'>Type a todo you want to add</label>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type='text'
            id='newItem'
          />
        </div>
        <button className='btn'>Add</button>
      </form>

      <h1 className='header'>TODO list</h1>
      <ul className='list'>
        {todo.map(todo => {
          return (
            <li>
              <label>
                <input
                  type='checkbox'
                  checked={todo.completed}
                  onClick={e => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                className='btn btn-danger'
                onClick={() => deleteTodo(todo.id)}
              >Delete</button>
            </li>
          )
        })}

      </ul>
    </>
  )
}

export default App
