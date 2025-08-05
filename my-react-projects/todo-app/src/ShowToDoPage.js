function ShowToDoPage() {
    return (
        <div className="max-w-4xl mx-auto mt-10">
            <table className="min-w-full table-auto border border-gray-300 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-blue-500 text-white text-left">
                    <tr>
                        <th className="px-6 py-4 border-b">Todo Title</th>
                        <th className="px-6 py-4 border-b">Due Date</th>
                        <th className="px-6 py-4 border-b">Mark Done</th>
                    </tr>
                </thead>
                <tbody className="text-gray-800">
                    <tr className="hover:bg-gray-50 even:bg-gray-100">
                        <td className="px-6 py-3 border-b">Meditate for 10 mins</td>
                        <td className="px-6 py-3 border-b">4/aug/2025</td>
                        <td className="px-6 py-3 border-b">✅</td>
                    </tr>
                    <tr className="hover:bg-gray-50 even:bg-gray-100">
                        <td className="px-6 py-3 border-b">Watch React tutorial</td>
                        <td className="px-6 py-3 border-b">6/aug/2025</td>
                        <td className="px-6 py-3 border-b">✅</td>
                    </tr>
                    <tr className="hover:bg-gray-50 even:bg-gray-100">
                        <td className="px-6 py-3 border-b">Buy groceries</td>
                        <td className="px-6 py-3 border-b">1/aug/2025</td>
                        <td className="px-6 py-3 border-b">✅</td>
                    </tr>
                    <tr className="hover:bg-gray-50 even:bg-gray-100">
                        <td className="px-6 py-3 border-b">Review PR on GitHub</td>
                        <td className="px-6 py-3 border-b">4/aug/2025</td>
                        <td className="px-6 py-3 border-b">✅</td>
                    </tr>
                    <tr className="hover:bg-gray-50 even:bg-gray-100">
                        <td className="px-6 py-3 border-b">Drink 2L water</td>
                        <td className="px-6 py-3 border-b">10/sep/2025</td>
                        <td className="px-6 py-3 border-b">✅</td>
                    </tr>
                    <tr className="hover:bg-gray-50 even:bg-gray-100">
                        <td className="px-6 py-3 border-b">Stretch after work</td>
                        <td className="px-6 py-3 border-b">15/dec/2025</td>
                        <td className="px-6 py-3 border-b">✅</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShowToDoPage
