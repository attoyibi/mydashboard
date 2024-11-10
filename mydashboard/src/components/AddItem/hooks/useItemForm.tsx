// useItemForm.tsx

import { useState } from "react";
import { ItemData, UseItemFormReturnType } from "../types/ItemTypes";

export default function useItemForm(): UseItemFormReturnType {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [itemData, setItemData] = useState<ItemData>({
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
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setItemData({
      ...itemData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit item data
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
