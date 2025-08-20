import { callUpdateAPI, callGetAllAPI } from "./BackendAPI";

function ShowTodoPage(props) {
  let todoArr = props.todo;

  async function handleClick(e, todoId) {
    await callUpdateAPI(
      "/update-todo",
      { status: "completed", completionDate: new Date() },
      { todoId: todoId }
    );

    let todoList = await callGetAllAPI("/read-todos");
    props.setTodo(todoList);
  }

  return (
    <div className="min-h-[400px] flex justify-center items-center bg-gradient-to-br from-purple-100 via-pink-100 to-white p-8">
      <div className="bg-white rounded-2xl shadow-xl border border-purple-200 w-full max-w-4xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-center">
          <h2 className="text-white text-2xl font-bold tracking-wide drop-shadow-md">
            📝 Pending Todos
          </h2>
          <p className="text-purple-100 text-sm mt-1">
            Here’s what you still need to finish!
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-gray-700 border-collapse">
            <thead>
              <tr className="bg-purple-200/70">
                <th className="px-6 py-3 text-left text-sm font-semibold tracking-wide border-b border-purple-300">
                  Todo Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold tracking-wide border-b border-purple-300">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold tracking-wide border-b border-purple-300">
                  Due Date
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold tracking-wide border-b border-purple-300">
                  Mark Done
                </th>
              </tr>
            </thead>
            <tbody>
              {todoArr.map(
                (todo, index) =>
                  todo.status === "pending" && (
                    <tr
                      key={todo.todoId}
                      className="bg-white even:bg-purple-50 hover:bg-purple-100 transition-all duration-300"
                    >
                      <td className="px-6 py-3 border-b border-purple-200 text-sm font-medium">
                        {todo.todoTitle}
                      </td>
                      <td className="px-6 py-3 border-b border-purple-200 text-sm">
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {todo.status}
                        </span>
                      </td>
                      <td className="px-6 py-3 border-b border-purple-200 text-sm">
                        {new Date(todo.dueDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-3 border-b border-purple-200 text-center">
                        <button
                          onClick={(e) => handleClick(e, todo.todoId)}
                          className="bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:from-green-500 hover:to-green-600 hover:shadow-lg active:scale-95 transition transform duration-200"
                        >
                          ✅ Done
                        </button>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowTodoPage;
