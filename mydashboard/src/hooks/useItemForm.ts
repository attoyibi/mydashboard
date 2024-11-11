import { useState, useEffect } from "react";
import api from '../services/axiosInstance';
import { ItemData } from '../types/itemTypes';
import { ApiResponse } from "../types/apiTypes";

export default function useItemForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [itemData, setItemData] = useState({
    name: "",
    description: "",
    quantity: 0,
    price: 0,
  });
  const [items, setItems] = useState<ItemData[]>([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const fetchItems = async () => {
    setIsLoading(true);
    try {
      const response = await api.get<ApiResponse<ItemData[]>>('/items/5');
      const items = response.data.data;
      setItems(items);
    } catch (error) {
      console.error("Failed to fetch items:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setItemData({
      ...itemData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const userIdString = window.localStorage.getItem("userId");
    const intUserId = userIdString ? parseInt(userIdString, 10) : null;

    try {
      const newItemData = {
        user_id: intUserId,
        ...itemData,
      };
      // setItems((prevItems) => [...prevItems]);
      const response = await api.post('/items', newItemData);

      if (response.status === 200 || response.status === 201) {
        setItems([...items, response.data]);
        setItemData({
          name: "",
          description: "",
          quantity: 0,
          price: 0,
        });
        toggleModal();
        fetchItems();
        // alert("Data has been successfully added!");
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Failed to create item:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    // Optimistically update the UI by removing the item immediately
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));

    setIsLoading(true);
    try {
      const response = await api.delete(`/items/${id}`);
      if (response.status !== 200 && response.status !== 204) {
        // If the API response is not as expected, restore the item
        alert("Failed to delete item. Restoring...");
        setItems((prevItems) => [
          ...prevItems,
          items.find((item) => item.id === id)!, // Restore the item
        ]);

      } else {
        // alert("Item has been successfully deleted!");
        fetchItems();
      }
    } catch (error) {
      console.error("Failed to delete item:", error);
      // If an error occurs, restore the item
      setItems((prevItems) => [
        ...prevItems,
        items.find((item) => item.id === id)!, // Restore the item
      ]);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    fetchItems();
  }, []);

  return {
    isModalOpen,
    isLoading,
    itemData,
    items,
    fetchItems,
    setItems,
    toggleModal,
    handleChange,
    handleSubmit,
    handleDelete, // Expose delete function
  };
}
