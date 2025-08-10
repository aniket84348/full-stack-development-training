function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300">
      <form className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-bold text-center text-blue-700">
          Login to Your Bank Account
        </h1>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter number..."
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
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

export default LoginPage;
