import './App.css';
import logo from './logo_defensa_civil_ultimate.png';

function App() {
  return (
    <div className="App" >

      <div className='Container'>
        <h1>Formulario de Registro</h1>
        <div className='DatosPersonales'>
        <p className='.Pdatos'>Datos personales: </p>
        <form className='D1'>
        <label>Cargo: </label>
          <select>
            <option></option>
          </select> 
          <label>Fecha de Ingreso:</label>
          <input type="Date"></input>
          <label>Cedula: </label>
          <input type="text"/>
          <label>Pasaporte: </label>
          <input type="text"/>
          <label>Nombre: </label>
          <input type="text"/>
          <label>Apellido: </label>
          <input type="text"/>
          <label>Apodo: </label>
          <input type="text"/>
          <label>Sexo: </label>
          <input type="Radio" name='F' value='F'/>Femenino
          <input type="Radio" name='M' value='F'/>Masculino
          <label>Fecha de nacimiento:</label>
          <input type="Date"></input>
          <label>Nacionalidad:</label>
          <select>
            <option></option>
          </select>
          <label>Ciudad de nacimiento:</label>
          <select>
            <option></option>
          </select>
          <label>Estado civil:</label>
          <select>
            <option></option>
          </select>
          <label>Estatura:</label>
          <select>
            <option></option>
          </select>
          <label>Peso: </label>
          <input type="text"/>
          <label>Talla de Camiseta:</label>
          <select>
            <option></option>
          </select>
          <label>Color de cabello:</label>
          <select>
            <option></option>
          </select>
          <label>Color de piel:</label>
          <select>
            <option></option>
          </select>
          <label>Grupo sanguíneo:</label>
          <select>
            <option></option>
          </select>
          <label>No. de cuenta BanReservas: </label>
          <input type="text"/>
          <label>No. de NSS: </label>
          <input type="text"/>
          <label>Categoría de licencia: </label>
          <select>
            <option></option>
          </select> 
        </form>
        </div>

        <div>
          <p>Información de Contacto:</p>
          <form>
          <label>Provincia: </label>
          <select>
            <option></option>
          </select>
          <label>Municipio: </label>
          <select>
            <option></option>
          </select>
          <label>Sector: </label>
          <input type="text"/>
          <label>Dirección: </label>
          <input type="text"/>
          <label>Correo electrónico: </label>
          <input type="text"/>
          <label>Teléfono celular: </label>
          <input type="text"/>
          <label>Teléfono residencial: </label>
          <input type="text"/>
          <label>Teléfono oficina: </label>
          <input type="text"/>
          </form>
        </div>

        <div>
          <p>Datos familiares: </p>
          <form>
          <label>Nombre de madre: </label>
          <input type="text"/>
          <label>Nombre de padre: </label>
          <input type="text"/>
          <label>Nombre de conyuge: </label>
          <input type="text"/>
          <label>Cantidad hijos: </label>
          <input type="text"/>
          <div className='Hijos'>
          /*Hacer que campos se generen en base a la cantidad de hijos*/
            <p>Hijos</p>
            <form>
            <label>Nombre: </label>
            <input type="text"/>
            <label>Apellido: </label>
            <input type="text"/>
            <label>Sexo: </label>
            <input type="Radio" name='F' value='F'/>Femenino
            <input type="Radio" name='M' value='F'/>Masculino
            <label>Fecha de nacimiento:</label>
            <input type="Date"></input>

            </form>

          </div>
          </form>
        </div>

        <div>
          <p>Experiencia: </p>
          <form>
          <label>Lugar de trabajo: </label>
          <input type="text"/>
          <label>Nivel académico:</label>
          <select>
            <option></option>
          </select>
          <label>Nombre de institucion académica: </label>
          <input type="text"/>
          <label>Nombre de carrera: </label>
          <input type="text"/>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default App;
