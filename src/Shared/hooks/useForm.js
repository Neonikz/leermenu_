import {useState} from 'react';

// custom hook para el manejo de formularios
export const useForm = initialState => {
  // Implementamos el useState
  const [values, setValues] = useState(initialState);

  // Funcion de reseteo del form
  const reset = (newState = initialState) => {
    setValues(newState);
  };

  // Funcion para cambiar el estado del imput
  const handleInputChange = ({target}) => {
    setValues({
      ...values,
      [target.name]: target.value
    });
  };

  return {values, handleInputChange, reset};
};
