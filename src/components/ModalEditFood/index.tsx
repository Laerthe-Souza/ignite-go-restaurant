import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';

type IFood = {
  id: string;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

type ModalEditFoodProps = {
  isOpen: boolean;
  editingFood: any;
  setIsOpen: () => void;
  handleUpdateFood: (food: Omit<IFood, 'id'>) => void;
}

export const ModalEditFood: React.FC<ModalEditFoodProps> = ({ isOpen, editingFood, setIsOpen, handleUpdateFood }) => {
  const formRef = useRef<FormHandles>(null)

  async function handleSubmit(formData: Omit<IFood, 'id'>) {
    handleUpdateFood(formData);

    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};
