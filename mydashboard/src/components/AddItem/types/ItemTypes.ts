// interfaces/ItemTypes.ts

export interface ItemData {
  name: string;
  description: string;
  quantity: string;
  price: string;
}

export interface UseItemFormReturnType {
  isModalOpen: boolean;
  itemData: ItemData;
  toggleModal: () => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
