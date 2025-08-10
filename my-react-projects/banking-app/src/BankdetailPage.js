function BankdetailPage() {
  return (
    <form className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          Your Account Detail
        </h1>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <table className="border border-gray-300 border-collapse text-center">
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Name
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  placeholder="Enter name"
                  className="border border-gray-300 rounded px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Number
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  placeholder="Enter number"
                  className="border border-gray-300 rounded px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Branch
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  placeholder="Enter branch"
                  className="border border-gray-300 rounded px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Balance
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="number"
                  placeholder="Enter balance"
                  className="border border-gray-300 rounded px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
}

export default BankdetailPage;

