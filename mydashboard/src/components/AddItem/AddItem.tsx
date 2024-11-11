import React, { useState } from "react";
import VisitorTable from "./VisitorTable";
import Modal from "../Modal";
import useItemForm from "../../hooks/useItemForm";

export default function AddItem() {
  // State untuk mengontrol apakah modal terbuka atau tidak
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const { isModalOpen, isLoading, items, handleSubmit, handleChange, toggleModal, handleDelete } = useItemForm();
  // Toggle untuk membuka atau menutup modal
  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-900">Your Item List</h1>
      <p className="mt-4 text-lg text-gray-700">
        Review and update existing items in the table below.
      </p>



      {/* Visitor Table */}
      <VisitorTable items={items} onCreateClick={toggleModal} onDelete={handleDelete} />

      {/* Modal untuk menambah item */}
      <Modal isModalOpen={isModalOpen} onClose={toggleModal} title="Add Visitor">
        {/* Form input yang ditampilkan di modal */}
        <form>
          {/* <div className="mb-4">
            <label className="block text-gray-700">User ID</label>
            <input
              type="number"
              name="user_id"
              className="w-full px-4 py-2 mt-2 border rounded-md"
            />
          </div> */}

          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 mt-2 border rounded-md"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">Description</label>
            <textarea
              name="description"
              className="w-full px-4 py-2 mt-2 border rounded-md"
              onChange={handleChange} // use handleChange for updates
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Quantity</label>
            <input
              type="number"
              name="quantity"
              className="w-full px-4 py-2 mt-2 border rounded-md"
              onChange={handleChange} // use handleChange for updates

            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input

              type="number"
              step="0.01"
              name="price"
              className="w-full px-4 py-2 mt-2 border rounded-md"
              onChange={handleChange} // use handleChange for updates
            />
          </div>

          <div className="flex justify-end">
            {!isLoading && <button
              type="button"
              onClick={toggleModal}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md mr-2"
            >
              Close
            </button>}

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md"
              onClick={handleSubmit}
            >
              {isLoading ? "Loading..." : "Add"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
