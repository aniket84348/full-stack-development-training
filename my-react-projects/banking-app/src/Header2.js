import { Link } from "react-router-dom";

function Header2() {
  return (
    <header className="bg-blue-500 shadow-md p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <Link to="/detail">
            <button className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-100 transition">
              Bank Detail
            </button>
          </Link>
          <Link to="/transferpage">
            <button className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-100 transition">
              Transfer
            </button>
          </Link>
          <Link to="/transactionpage">
            <button className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-100 transition">
              Transaction
            </button>
          </Link>
          <Link to="/logoutpage">
            <button className="bg-red-500 text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-red-600 transition">
              Logout
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header2;

