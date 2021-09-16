import React, {useState} from 'react';
import {ModalMenu} from './modals/ModalMenu';

export const Menu = () => {
  // Estado del boton de agregar
  const [showModal, setshowModal] = useState(false);

  // Funcion que abre el modal
  const handleopenModal = () => {
    setshowModal(true);
  };

  const handleCloseModal = () => {
    setshowModal(false);
  };

  return (
    //  Aca tiene que venir un FOR con todos los platos anterioreres
    <div className="py-48 flex w-full bg-green-600">
      {/* // Boton que abre el modal */}
      <button className="btn  ml-8 p-4 rounded-lg bg-white" onClick={handleopenModal}>
        Agregar
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      <ModalMenu openModal={showModal} handleCloseModal={handleCloseModal} />
    </div>
  );
};
