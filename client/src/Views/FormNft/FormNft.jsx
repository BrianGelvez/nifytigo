import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNft } from "../../Redux/postNft"; // Asegúrate de importar las acciones correctas
import { getCategories } from "../../Redux/getCategories";
import style from "./FormNft.module.css"; // Importa los estilos CSS correspondientes

const FormNft = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const [formData, setFormData] = useState({
    iduser: "214891cc-6378-475b-98a7-67cf1fbb2ffd",//214891cc-6378-475b-98a7-67cf1fbb2ffd
    image: "",
    name: "",
    description: "",
    price: "",
    categorie: [],
  });

  const [formErrors, setFormErrors] = useState({
    image: "",
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    dispatch(getCategories()); // Cargar las categorías al cargar el componente
  }, [dispatch]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Validaciones y actualización de errores
    const errors = validateField(name, value);
    setFormErrors({ ...formErrors, [name]: errors });
  };

  const validateField = (fieldName, value) => {
    let errors = "";
    switch (fieldName) {
      case "image":
        // Validar la URL de la imagen con una expresión regular
        if (!/^.{1,210}$/.test(value)) {
          errors = "La URL debe tener hasta 210 caracteres y no debe contener espacios en blanco.";
        }
        break;
      case "name":
        // Validar el nombre con una expresión regular
        if (!/^[A-Za-z]{3,25}$/.test(value)) {
          errors = "El nombre debe tener entre 3 y 25 letras y no debe contener espacios en blanco.";
        }
        break;
      case "description":
        // Validar la descripción con la longitud máxima
        if (value.length > 210) {
          errors = "La descripción no debe exceder los 210 caracteres.";
        }
        break;
      default:
        break;
    }
    return errors;
  };

  const handleCategoryChange = (event) => {
console.log(formData)
    setFormData({
      ...formData,
      ...formData.categorie.push(event.target.value)
    })
  }
  //const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
  //setFormData({ ...formData, categorie: selectedOptions });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Llamar a la acción para enviar los datos al servidor
    dispatch(postNft(formData));
  };

  return (
    <div className={style.containerFormNft}>
      <div className={style.containerMain}>
        <h1>Crear NFT</h1>
        <form onSubmit={handleSubmit}>
          <h3 htmlFor="imageUrl">URL de la Imagen:</h3>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            required
            className={style.input}
          />
          {formErrors.image && <p className={style.error}>{formErrors.image}</p>}

          <h3 htmlFor="name">Nombre:</h3>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          {formErrors.name && <p className={style.error}>{formErrors.name}</p>}


          <h3 htmlFor="description">Descripción:</h3>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            required
          ></textarea>
          {formErrors.description && <p className={style.error}>{formErrors.description}</p>}


          <h3 htmlFor="price">Precio:</h3>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            step="0.01"
            required
          />
          {formErrors.price && <p className={style.error}>{formErrors.price}</p>}

          <h3 htmlFor="categories">Categorías:</h3>
          <select
            multiple
            id="categories"
            onChange={handleCategoryChange}
            required
          >
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          {formData.categorie.map((cat) => <p> Categorias Seleccionadas:{cat}</p>)}
          <button type="submit" className={style.button}>
            Create NFT
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormNft;



