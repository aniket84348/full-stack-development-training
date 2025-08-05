function Header() {
    return (
        <div className="bg-gray-100 shadow-md p-4">
            <nav className="flex justify-center space-x-4">
                <button className="bg-green-400 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Add</button>

                <button className="bg-blue-300 text-white px-4 py-2 rounded hover:bg-green-600 transition">Show</button>
                
                <button className="bg-purple-400 text-white px-4 py-2 rounded hover:bg-purple-600 transition">Done</button>
            </nav>
        </div>
    )
}
export default Header
