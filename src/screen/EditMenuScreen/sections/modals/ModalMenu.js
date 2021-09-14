import Modal from 'react-modal';
import {useForm} from '../../../../hooks/useForm';

// Estilos del modal a modificar
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root');

export const ModalMenu = ({openModal, handleCloseModal}) => {
  // Manejo del estado del fomulario
  const {values, handleInputChange} = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
    description: '',
    price: '',
    category: ''
  });

  const {name, description, price, category} = values;

  // Manejo del boton submit del formulario
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(values);
  };
  // modalMenuInterface
  const closeModal = (e) => {
    e.preventDefault();
    handleCloseModal();
  };
  return (
    <div>
      <Modal isOpen={openModal} onRequestClose={closeModal} closeTimeoutMS={200} style={customStyles}>
        <form className="" onSubmit={handleSubmitForm}>
          <div className="form-control m-2 border border-black border-opacity-25 rounded-md p-8 text-center">Imagen</div>
          <div className="form-control m-2 border border-black border-opacity-25 rounded-md p-2">
            <label htmlFor="name" className="label mr-2">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Nombre"
              className="input input-warning input-bordered"
              name="name"
              id="name"
              value={name}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
          <div className="form-control m-2 border border-black border-opacity-25 rounded-md p-2 flex">
            <label htmlFor="description" className="label mr-2">
              Descripcion
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Description"
              className="input input-warning input-bordered"
              value={description}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
          <div className="form-control m-2 border border-black border-opacity-25 rounded-md p-2">
            <label htmlFor="price" className="label mr-2">
              Precio
            </label>
            <input
              name="price"
              id="price"
              placeholder="5000"
              type="number"
              autoComplete="off"
              className="input input-warning input-bordered"
              value={price}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control m-2 border border-black border-opacity-25 rounded-md p-2">
            <label htmlFor="category" className="label mr-2">
              Categoria
            </label>
            <input
              name="category"
              id="category"
              placeholder="Categoria"
              type="text"
              autoComplete="off"
              className="input input-warning input-bordered"
              value={category}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex w-full justify-between mt-8">
            <button className="btn btn-outline border-blue-800 text-blue-800" onClick={closeModal}>
              Close Modal
            </button>
            <button className="btn bg-blue-800 text-white" type="submit">
              Agregar Producto
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
