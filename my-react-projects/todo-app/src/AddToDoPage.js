import { useState } from 'react'

function AddToDoPage() {

    let [formData, setFormData] = useState({
        name: "",
        number: 0,
        email: "",
        password: ""
    })

    function handleChange(e) {
        let inputTagName = e.target.name;
        let inputTagValue = e.target.value;

        setFormData(previousObject => ({
            ...previousObject,
            [inputTagName]: inputTagValue
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        // handle form submit logic here
        console.log(formData);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <form onSubmit={(e) => handleSubmit(e)} className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
                
                <label className="block text-gray-700 font-semibold">TodoTitle</label>
                <input
                    type="text"
                    name="todoTitle"
                    onChange={(e) => handleChange(e)}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <label className="block text-gray-700 font-semibold">Due Date</label>
                <input
                    type="text"
                    name="DueDate"
                    onChange={(e) => handleChange(e)}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <label className="block text-gray-700 font-semibold">Status</label>
                <input
                    type="text"
                    name="status"
                    onChange={(e) => handleChange(e)}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddToDoPage
