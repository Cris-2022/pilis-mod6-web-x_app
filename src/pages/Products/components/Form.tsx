import './Form.css'

const Form = () => {
  return (
      <div className='head-prod'>        
          <input type="text" placeholder='ingrese nombre' name="" id="" />
          <select>
              <option value=''>-- Categoria --</option>               
          </select>
          <input className="precio" type="text" placeholder='ingresar precio' name="" id="" />          
          <input type="file" name="" id="" /> 
                    
          <button className='button-new'>Agregar</button>
      </div>         
  )
}

export default Form