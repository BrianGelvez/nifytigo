import { useEffect, useState } from "react";
import validation from "./validation";
import "./index.css";
import Login from "../Login/Login";
import { useDispatch } from "react-redux";
import { createUser } from "../../Redux/userActions";

const Account = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    username: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
    cellPhone: "",
    country: "",
  });
  const [errors, setErrors] = useState({});
  const [userCreationStatus, setUserCreationStatus] = useState('');
const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validation(userData);
    if (Object.keys(formErrors).length === 0) {
      try {
        // Aquí llamamos a la acción createUser con los datos del formulario
        dispatch(createUser(userData));
        setUserCreationStatus('User created successfully!');
        setErrorMessage(''); // Limpiamos el mensaje de error en caso de existir previamente
      } catch (error) {
        setUserCreationStatus('User creation failed.');
        setErrorMessage(error.message);
      }
    } else {
      setErrors(formErrors);
    }
  };

  useEffect(() => {
    // Creamos un temporizador para limpiar el mensaje después de 3 segundos
    const timer = setTimeout(() => {
      setUserCreationStatus("");
      setErrorMessage("");
    }, 3000);

    // Limpiamos el temporizador cuando el componente se desmonte o se actualice el estado showUserCreationStatus
    return () => clearTimeout(timer);
  }, [userCreationStatus, errorMessage]);



  const handleSignUp = () => {
    window.location.href = Login;
  };

  return (
    <div className="AccountContainer">
      <div className="main">
        <div className="container a-container" id="a-container">
          <form className="form" id="a-form" onSubmit={handleSubmit}>
            <h2 className="form_title title">Create Account</h2>
            <div>
          {userCreationStatus && <h1>{userCreationStatus}</h1>}
          {errorMessage && <h1 className="error">{errorMessage}</h1>}
        </div>
            <div className="form__icons">
              <img className="form__icon" src="" alt="" />
              <img className="form__icon" src="" />
              <img className="form__icon" src="" />
            </div>
            <span className="form__span">or use email for registration</span>
            <input
              className="form__input"
              type="text"
              name="username"
              placeholder="Username"
              value={userData.username}
              onChange={handleChange}
            />
            <input
              className="form__input"
              type="text"
              name="name"
              placeholder="Name"
              value={userData.name}
              onChange={handleChange}
            />
            <input
              className="form__input"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={userData.lastName}
              onChange={handleChange}
            />
            <input
              className="form__input"
              type="text"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleChange}
            />
            <input
              className="form__input"
              type="password"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
            />
            <input
              className="form__input"
              type="text"
              name="cellPhone"
              placeholder="Cell Phone"
              value={userData.cellPhone}
              onChange={handleChange}
            />
            <input
              className="form__input"
              type="text"
              name="country"
              placeholder="Country"
              value={userData.country}
              onChange={handleChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
            <button
              className="form__button button submit"
              onClick={handleSubmit}
            >
              SIGN UP
            </button>
          </form>
        </div>
        <div className="switch" id="switch-cnt">
          <div className="switch__container" id="switch-c1">
            <h2 className="switch__title title">Welcome Back !</h2>
            <p className="switch__description description">
              To keep connected with us please login with your personal info
            </p>
            {/*<button className="switch__button button switch-btn">SIGN IN</button>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;