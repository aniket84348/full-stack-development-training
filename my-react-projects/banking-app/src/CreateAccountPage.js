function CreateAccountPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300">
      <form className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          Create Your Bank Account
        </h1>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter name..."
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter your number..."
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Select Branch</label>
          <input
            type="text"
            placeholder="Enter branch..."
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter password..."
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateAccountPage;
