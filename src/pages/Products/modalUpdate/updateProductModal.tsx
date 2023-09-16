
import { useState } from 'react';
import "./updateProductModal.css"

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const categoriesTest = [
    "Bebidas",
    "Hamburgesas",
    "Sandwiches",
    "Helados"
  ];

  return (
    <div>
      <button onClick={openModal}>Abrir Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Actulizar Producto</h2>
            </div>
            <div className="modal-body">
              <form >
                <div>
                  <label htmlFor="name">Nombre:</label>
                  <input
                    className='input-product'
                    type="text"
                    id="name"
                  />
                </div>
                <div>
                  <label htmlFor="category">Categoria:</label>
                  <select >
                    {categoriesTest.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>

                </div>
                <div>
                  <label htmlFor="price">Precio:</label>
                  <input
                    type="text"
                    id="price"
                  />
                </div>
                <div>
                  <label htmlFor="image">Imagen:</label>
                  <input
                    className='input-archivo'
                    type="file"
                    id="image"
                  />
                </div>
                <div>
                  <label htmlFor="stock">Stock:</label>
                  <input
                    type="number"
                    id="stock"
                  />
                </div>
              </form>

            </div>
            <div className="modal-footer">
              <button onClick={closeModal} className="modal-button">Actualizar</button>
              <button onClick={closeModal} className="modal-button">Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
