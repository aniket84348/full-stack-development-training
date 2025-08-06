function DoneToDoPage(props) {
    let todoArr = props.todo;

    return (
        <div className="bg-yellow-100 min-h-screen flex justify-center items-start py-10 px-4">
            <div className="w-full max-w-5xl overflow-x-auto shadow-lg rounded-lg border border-gray-300 bg-white">
                <table className="w-full table-auto text-left">
                    <thead className="bg-yellow-300">
                        <tr>
                            <th className="px-6 py-3 text-md font-semibold text-gray-800 border-b border-gray-400">Completed Todo Title</th>
                            <th className="px-6 py-3 text-md font-semibold text-gray-800 border-b border-gray-400">Status</th>
                            <th className="px-6 py-3 text-md font-semibold text-gray-800 border-b border-gray-400">Completed Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoArr.map((todo) =>
                            todo.status === "completed" && (
                                <tr key={todo.id} className="hover:bg-yellow-50 transition">
                                    <td className="px-6 py-4 border-b border-gray-200">{todo.todoTitle}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 capitalize text-green-700 font-medium">{todo.status}</td>
                                    <td className="px-6 py-4 border-b border-gray-200">{new Date(todo.completedDate).toLocaleDateString()}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DoneToDoPage;


