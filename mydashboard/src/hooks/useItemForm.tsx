import { useState } from "react";

export default function useItemForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemData, setItemData] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
  });

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle input change
  const handleChange = (e) => {
    setItemData({
      ...itemData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit item data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data barang:", itemData);

    // Clear form after submission
    setItemData({
      name: "",
      description: "",
      quantity: "",
      price: "",
    });

    // Close the modal
    toggleModal();
  };

  return {
    isModalOpen,
    itemData,
    toggleModal,
    handleChange,
    handleSubmit,
  };
}
