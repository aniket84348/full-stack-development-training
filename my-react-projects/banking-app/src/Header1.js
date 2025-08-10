function Header1() {
  return (
    <header className="bg-blue-500 shadow-md">
      <nav className="max-w-4xl mx-auto px-5 py-6 flex justify-between items-center ">
        {/* Left side - Home button */}
        <div>
          <button className="bg-green-300 text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 transition ">
            Home
          </button>
        </div>

        {/* Right side - Create Account & Login buttons */}
        <div className="flex space-x-4">
          <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 transition">
            Create Account
          </button>
          <button className="bg-yellow-300 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header1;



