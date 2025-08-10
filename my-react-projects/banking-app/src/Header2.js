function Header2() {
  return (
    <form className="bg-blue-500 shadow-md p-4">
      <div className="flex justify-between items-center">
        
        {/* Left side - Home Button */}
        <div>
          <button
            type="button"
            className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-100 transition"
          >
            Home
          </button>
        </div>

        {/* Right side - Other Buttons */}
        <div className="flex gap-4">
          <button
            type="button"
            className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-100 transition"
          >
            Bank Detail
          </button>
          <button
            type="button"
            className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-100 transition"
          >
            Transfer
          </button>
          <button
            type="button"
            className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-100 transition"
          >
            Transaction
          </button>
          <button
            type="button"
            className="bg-red-500 text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </form>
  );
}

export default Header2;

