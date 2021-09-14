import {Link} from 'react-router-dom';
import {useForm} from '../../hooks/useForm';

export const RegisterScreen = () => {
  // useState para el formulario en versiones con registro
  const {values, handleInputChange, reset} = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
    description: '',
    price: '',
    category: ''
  });

  // Funcion de submit del form
  const handleRegister = (e) => {
    e.preventDefault();

    reset();
  };

  const {name, email, password, password2} = values;

  return (
    <div className="bg-blue-800 w-screen h-screen flex justify-center flex-wrap items-center ">
      <form onSubmit={handleRegister} className="flex bg-white justify-center flex-col items-center   m-12 p-5">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="p-2 m-5 w-full outline-none"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          className="p-2 m-5 w-full outline-none"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="p-2 m-5 w-full outline-none"
          value={password}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          className="p-2 m-5 w-full outline-none"
          value={password2}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="self-center
            bg-color-secondary rounded-lg text-blue-800
            justify-self-center
            w-3/4 p-2 m-5 
            hover:bg-blue-800
            hover:text-white
            focus:outline-none"
        >
          Register
        </button>

        <Link to="/auth/login" className="">
          Already register?
        </Link>
      </form>
    </div>
  );
};
