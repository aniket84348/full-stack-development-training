function ShowTodoPage(props) {
  let todoArr = props.todo;

  function handleClick(e, todoId) {
    // delete todo from todoArr where id = todoId
    todoArr = todoArr.filter(todo => todo.id !== todoId);
    props.setTodo(todoArr);
    alert("Todo Completed");
  }

  return (
    <div className="bg-purple-200 min-h-[250px] flex justify-center items-center p-4">
      <table className="table-auto border border-black rounded shadow-md bg-white">
        <thead>
          <tr className="bg-purple-300">
            <th className="px-4 py-2 border border-black">Todo Title</th>
            <th className="px-4 py-2 border border-black">Due Date</th>
            <th className="px-4 py-2 border border-black">Mark Done</th>
          </tr>
        </thead>
        <tbody>
          {todoArr.map((value) => (
            <tr key={value.id} className="text-center">
              <td className="px-4 py-2 border border-black">{value.todoTitle}</td>
              <td className="px-4 py-2 border border-black">{value.dueDate}</td>
              <td className="px-4 py-2 border border-black">
                <button
                  onClick={(e) => handleClick(e, value.id)}
                  className="text-green-600 hover:bg-green-100 px-2 py-1 rounded"
                >
                  ✅
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowTodoPage;
