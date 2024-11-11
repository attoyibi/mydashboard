import React, { useState } from "react";
import VisitorTable from "./VisitorTable";
import Modal from "../Modal";
import useItemForm from "../../hooks/useItemForm";

export default function AddItem() {
  // State untuk mengontrol apakah modal terbuka atau tidak
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle untuk membuka atau menutup modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-900">Your Item List</h1>
      <p className="mt-4 text-lg text-gray-700">
        + Below is the list of your existing items.
      </p>
      <p>
        + To add new items to the list, simply click the "Create" button.
      </p>


      {/* Visitor Table */}
      <VisitorTable onCreateClick={toggleModal} />

      {/* Modal untuk menambah item */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} title="Add Visitor">
        {/* Form input yang ditampilkan di modal */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              name="country"
              className="w-full px-4 py-2 mt-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Visitor Count</label>
            <input
              type="number"
              name="visitorCount"
              className="w-full px-4 py-2 mt-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Percentage</label>
            <input
              type="text"
              name="percentage"
              className="w-full px-4 py-2 mt-2 border rounded-md"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={toggleModal}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md mr-2"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Add
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
