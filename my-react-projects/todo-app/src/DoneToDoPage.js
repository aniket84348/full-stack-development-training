function DoneTodoPage() {
  return (
    <div className="bg-yellow-200 min-h-[250px] flex justify-center items-center p-4">
      <table className="table-auto border border-black bg-white rounded shadow-md">
        <thead>
          <tr className="bg-yellow-300">
            <th className="px-4 py-2 border border-black">Todo Title</th>
            <th className="px-4 py-2 border border-black">Completed On</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="px-4 py-2 border border-black">Goto gym</td>
            <td className="px-4 py-2 border border-black">05/08/2025</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2 border border-black">Goto gym</td>
            <td className="px-4 py-2 border border-black">05/08/2025</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2 border border-black">Goto gym</td>
            <td className="px-4 py-2 border border-black">05/08/2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DoneTodoPage;
