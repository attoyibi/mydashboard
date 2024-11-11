import React, { useState } from "react";
import VisitorTable from "./VisitorTable";
export default function AddItem() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemData, setItemData] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
  });

  // Fungsi untuk membuka dan menutup modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Mengatur nilai form input
  const handleChange = (e) => {
    setItemData({
      ...itemData,
      [e.target.name]: e.target.value,
    });
  };

  // Fungsi untuk submit data item
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Data barang:", itemData);
    // Clear form setelah submit
    setItemData({
      name: "",
      description: "",
      quantity: "",
      price: "",
    });
    toggleModal();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">Add Item</h1>
      <p className="mt-4 text-gray-600">Insert Your Data!</p>

      {/* Tombol untuk membuka modal */}
      {/* <button
        onClick={toggleModal}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Tambah Item
      </button> */}

      {/* create table here  */}
      <VisitorTable />
      {/* Modal */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Tambah Barang</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Nama Barang</label>
                <input
                  type="text"
                  name="name"
                  value={itemData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Deskripsi</label>
                <textarea
                  name="description"
                  value={itemData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Kuantitas</label>
                <input
                  type="number"
                  name="quantity"
                  value={itemData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Harga</label>
                <input
                  type="number"
                  name="price"
                  value={itemData.price}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="mr-2 bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-200"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
                >
                  Tambah
                </button>
              </div>
            </form>
          </div>
        </div>
      )} */}
    </div>
  );
}
