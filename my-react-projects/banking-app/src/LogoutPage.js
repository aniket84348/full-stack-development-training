function LogoutPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Are you sure you want to log out?
        </h1>
        <button
          className="bg-red-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default LogoutPage;
