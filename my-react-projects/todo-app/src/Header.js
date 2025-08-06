import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-300 py-3 shadow-md">
      <nav className="flex justify-center space-x-150">
        <Link to="/todo-add">
          <button className="bg-pink-300 hover:bg-blue-700 text-white px-4 py-1 rounded">
            Add
          </button>
        </Link>

        <Link to="/todo-show">
          <button className="bg-purple-400 hover:bg-blue-700 text-white px-4 py-1 rounded">
            Show
          </button>
        </Link>

        <Link to="/todo-done">
          <button className="bg-yellow-200 hover:bg-blue-700 text-white px-4 py-1 rounded">
            Done
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
