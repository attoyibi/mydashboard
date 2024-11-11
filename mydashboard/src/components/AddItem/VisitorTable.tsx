import React, { useState } from "react";
import { ItemData } from '../../types/itemTypes';
import useItemForm from '../../hooks/useItemForm';

interface VisitorTableProps {
  onCreateClick: () => void;
  items: ItemData[];
}

const VisitorTable: React.FC<VisitorTableProps> = ({ items, onCreateClick, onDelete }) => {
  const { isLoading, fetchItems, setItems } = useItemForm();
  const [showModal, setShowModal] = useState(false); // State for showing confirmation modal
  const [itemToDelete, setItemToDelete] = useState<ItemData | null>(null); // Item to delete
  const [isProcessing, setIsProcessing] = useState(false); // State to track if deletion is in progress

  const openModal = (item: ItemData) => {
    setItemToDelete(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setItemToDelete(null);
  };

  const handleConfirmDelete = async () => {
    if (itemToDelete) {
      setIsProcessing(true); // Show loading spinner
      await onDelete(itemToDelete.id);
      setIsProcessing(false); // Hide loading spinner after deletion
      closeModal();
    }
  };
  // const handleDeleteItem = async (itemId: number) => {
  //   await handleDelete(itemId); // Handle deletion logic
  //   fetchItems();
  //   // Update the items state to remove the deleted item
  //   // setItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  // };
  console.log(items);

  return (
    <div className="max-w-[85rem] py-10 lg:py-10 mx-auto">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
              {/* Header */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                    Items
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    Overview of your items.
                  </p>
                </div>
                <div>
                  <div className="inline-flex gap-x-2">
                    <button
                      onClick={onCreateClick}
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                    >
                      <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5v14" />
                      </svg>
                      Add New Item
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
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-gray-800 dark:text-neutral-200">{item.name}</td>
                      <td className="px-6 py-4 text-gray-800 dark:text-neutral-200">{item.description}</td>
                      <td className="px-6 py-4 text-gray-800 dark:text-neutral-200">{item.quantity}</td>
                      <td className="px-6 py-4 text-gray-800 dark:text-neutral-200">${item.price}</td>
                      <td className="px-6 py-4">
                        {/* <button className="text-blue-600 hover:underline dark:text-blue-400">Edit</button> */}
                        <button
                          onClick={() => openModal(item)} // Open modal to confirm deletion
                          className="ml-4 text-red-600 hover:underline dark:text-red-400"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* End Table */}

              {/* Modal for confirmation */}
              {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                  <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200 mb-4">
                      Are you sure you want to delete this item?
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-neutral-400 mb-4">
                      This action cannot be undone.
                    </p>
                    <div className="flex justify-end gap-4">
                      {!isLoading &&
                        <button
                          onClick={closeModal}
                          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                        >
                          Cancel
                        </button>
                      }

                      <button
                        onClick={handleConfirmDelete}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        disabled={isProcessing || isLoading} // Disable if processing or loading
                      >
                        {isProcessing || isLoading ? (
                          <div className="flex">
                            Deleting...
                            <svg className="animate-spin w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
                            </svg>
                          </div>
                        ) : (
                          "Yes, Delete"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorTable;
