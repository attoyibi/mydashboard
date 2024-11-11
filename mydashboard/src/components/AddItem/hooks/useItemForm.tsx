// src/hooks/useItemForm.js
import { useState } from "react";

const useItemForm = () => {
  const [itemData, setItemData] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
  });
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Fungsi untuk validasi form
  const validateForm = () => {
    let formErrors = {};
    if (!itemData.name) formErrors.name = "Nama barang tidak boleh kosong";
    if (!itemData.description) formErrors.description = "Deskripsi tidak boleh kosong";
    if (!itemData.quantity || itemData.quantity <= 0)
      formErrors.quantity = "Kuantitas harus lebih besar dari 0";
    if (!itemData.price || itemData.price <= 0)
      formErrors.price = "Harga harus lebih besar dari 0";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Fungsi untuk submit data item
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Jangan lanjutkan jika form tidak valid
    console.log("Data barang:", itemData);
    // Clear form setelah submit
    setItemData({
      name: "",
      description: "",
      quantity: "",
      price: "",
    });
    toggleModal();
  };

  return {
    itemData,
    errors,
    isModalOpen,
    handleChange,
    handleSubmit,
    toggleModal,
  };
};

export default useItemForm;
