import { useState } from 'react'
import { callCreateAPI, callGetAllAPI } from './BackendAPI'

function AddTodoPage(props) {
  let setTodo = props.setTodo;

  let [formData, setFormData] = useState({
    todoTitle: '',
    dueDate: '',
    status: 'pending'
  })

  function handleChange(e) {
    let inputName = e.target.name;
    let inputValue = e.target.value;

    setFormData(prev => ({
      ...prev,
      [inputName]: inputValue
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let newTodo = {
      todoId: Date.now().toString(),
      todoTitle: formData.todoTitle,
      dueDate: formData.dueDate,
      status: 'pending'
    }

    await callCreateAPI('/create-todo', newTodo);

    // fetch updated list
    const todoList = await callGetAllAPI('/read-todos');
    setTodo(todoList);

    // reset form
    setFormData({ todoTitle: '', dueDate: '', status: 'pending' });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-pink-200 to-pink-100 flex justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 border border-pink-200">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">
          ✍️ Add New Todo
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Todo Title
            </label>
            <input
              type="text"
              placeholder="Enter your todo title"
              name="todoTitle"
              value={formData.todoTitle}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 outline-none transition text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Due Date
            </label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 outline-none transition text-gray-800"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-pink-400/50 transform hover:scale-105 transition duration-300"
          >
            ➕ Add Todo
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddTodoPage

