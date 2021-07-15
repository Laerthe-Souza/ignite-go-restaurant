import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import { Input } from '../Input';
import { Modal } from '../Modal';

import { Form } from './styles';

type IFood = {
  id: string;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

type ModalAddFoodProps = {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: Omit<IFood, 'id' | 'available'>) => void;
}

export const ModalAddFood: React.FC<ModalAddFoodProps> = ({ isOpen, setIsOpen, handleAddFood }) => {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(formData: Omit<IFood, 'id' | 'available'>) {
    handleAddFood(formData);

    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};
