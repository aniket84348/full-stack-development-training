import { useState } from 'react'

function AddTodoPage(props) {
    let setTodo = props.setTodo;


    let [formData, setFormData] = useState({
        todoTitle: '',
        dueDate: '',
        status: 'pending'
    });

    function handleChange(e) {
        let inputName = e.target.name;
        let inputValue = e.target.value;

        setFormData(prev => ({
            ...prev,
            [inputName]: inputValue
        }));
    }

    function handleSubmit(e) {
        e.preventDefault(); // prevent page refresh
        alert("Form submitted, data = " + JSON.stringify(formData));


        //update state 
        setTodo(previousTodos => ([
            ...previousTodos,
            {
                "id": Date.now(),
                "todoTitle": formData.todoTitle,
                "dueDate": formData.dueDate,
                "status": formData.status,
                "completedDate": ""
            }
        ]))
    }



    return (
        <div className="bg-pink-200 h-[250px] flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md flex flex-col gap-4"
            >
                <div>
                    <label className="block mb-1 font-medium">Todo Title</label>
                    <input
                        type="text"
                        placeholder="Enter your todo title"
                        name="todoTitle"
                        value={formData.todoTitle}
                        onChange={handleChange}
                        className="w-full px-3 py-1 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Due Date</label>
                    <input
                        type="date"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                        className="w-full px-3 py-1 border rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddTodoPage;
