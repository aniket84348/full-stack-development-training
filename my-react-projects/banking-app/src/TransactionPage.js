function TransactionPage() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Your Bank Transactions
      </h1>

      {/* Transaction Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm text-gray-700">
          <thead className="bg-blue-100 text-gray-900">
            <tr>
              <th className="border border-gray-300 px-4 py-2">S.No</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Amount</th>
              <th className="border border-gray-300 px-4 py-2">Transfer Type</th>
              <th className="border border-gray-300 px-4 py-2">Account No</th>
              <th className="border border-gray-300 px-4 py-2">Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {/* Empty Row 1 */}
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>

            {/* Empty Row 2 */}
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionPage;
