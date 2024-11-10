import React from "react";

export default function VisitorTable() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
              {/* Header */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">Visitors</h2>
                  <p className="text-sm text-gray-600 dark:text-neutral-400">Visitors overview by country.</p>
                </div>
                <div>
                  <div className="inline-flex gap-x-2">
                    <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700">
                      View all
                    </button>
                    <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                      <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5v14" />
                      </svg>
                      Create
                    </button>
                  </div>
                </div>
              </div>
              {/* End Header */}

              {/* Table */}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-gray-50 dark:bg-neutral-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Country
                    </th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Visitor Count
                    </th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Percentage
                    </th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr>
                    <td className="px-6 py-4 text-gray-800 dark:text-neutral-200">United States</td>
                    <td className="px-6 py-4 text-gray-800 dark:text-neutral-200">10,000</td>
                    <td className="px-6 py-4 text-gray-800 dark:text-neutral-200">25%</td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:underline dark:text-blue-400">Edit</button>
                      <button className="ml-4 text-red-600 hover:underline dark:text-red-400">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-800 dark:text-neutral-200">Canada</td>
                    <td className="px-6 py-4 text-gray-800 dark:text-neutral-200">5,000</td>
                    <td className="px-6 py-4 text-gray-800 dark:text-neutral-200">12.5%</td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:underline dark:text-blue-400">Edit</button>
                      <button className="ml-4 text-red-600 hover:underline dark:text-red-400">Delete</button>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
              {/* End Table */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
