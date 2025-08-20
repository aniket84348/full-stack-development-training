function DoneTodoPage(props) {
  let todoArr = props.todo;

  // filter completed todos
  let completedTodos = todoArr.filter((t) => t.status === "completed");

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-100 via-emerald-100 to-white p-8">
      <div className="bg-white rounded-2xl shadow-2xl border border-green-200 w-full max-w-3xl overflow-hidden transform transition-all duration-500 hover:shadow-green-300/50 hover:-translate-y-1">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-700 p-6 text-center relative">
          <h2 className="text-white text-3xl font-bold tracking-wide drop-shadow-lg">
            ✅ Completed Todos
          </h2>
          <p className="text-green-100 text-sm mt-1">
            Great job! Here are the tasks you’ve finished 🎉
          </p>
          {/* glossy shine effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
        </div>

        {/* Table */}
        {completedTodos.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse text-gray-700">
              <thead>
                <tr className="bg-green-200/70">
                  <th className="px-6 py-3 text-left text-sm font-semibold tracking-wide border-b border-green-300">
                    Todo Title
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold tracking-wide border-b border-green-300">
                    Completed On
                  </th>
                </tr>
              </thead>
              <tbody>
                {completedTodos.map((todo, index) => (
                  <tr
                    key={todo.id || index}
                    className="bg-white even:bg-green-50 hover:bg-green-100 transition duration-300 ease-in-out animate-fadeIn"
                  >
                    <td className="px-6 py-3 border-b border-green-200 text-sm font-medium">
                      {todo.todoTitle}
                    </td>
                    <td className="px-6 py-3 border-b border-green-200 text-sm">
                      <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-700 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-green-300">
                        {new Date(todo.completionDate).toLocaleDateString()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          // Empty State
          <div className="p-8 text-center text-gray-500 text-lg">
            🌱 No completed todos yet. Keep going, you’re doing great!
          </div>
        )}
      </div>
    </div>
  );
}

export default DoneTodoPage;
