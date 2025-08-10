function TransferPage() {
  return (
    <form className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-blue-400 px-6 py-3 rounded-lg shadow-md">
          Transfer Money Between Accounts
        </h1>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">From Account</label>
          <input
            type="text"
            placeholder="Enter your account number"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">To Account</label>
          <input
            type="text"
            placeholder="Enter receiver's account number"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Amount</label>
          <input
            type="number"
            placeholder="Enter amount to send"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-green-600 transition duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default TransferPage;
