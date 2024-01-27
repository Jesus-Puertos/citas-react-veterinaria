import {useState, useEffect} from 'react'
import Error from './Error';


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] =  useState('');

  const [error, setError] = useState(false);

  //Se ejecuta cada vez que cambia el state (paciente)
  useEffect(()=>{
      if(Object.keys(paciente).length > 0){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
      }
  }, [paciente])

  //Se ejecuta una vez
  // useEffect(()=>{
  //   console.log('El componente esta listo')
  // },[])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;

  }


  const handleSubmit = (e) =>{
    e.preventDefault();

    //Validacion del formulario 
    if([nombre,propietario,email,fecha,sintomas].includes('')){
      setError(true)
      return;
    }
    setError(false) //Desaparece el mensaje de error

//Objeto de paciente 

const objetoPaciente = {
  nombre,
  propietario,
  email,
  fecha,
  sintomas,
}

//Agregar el objeto al state de pacientes
if(paciente.id){
  //Editando el registo
  objetoPaciente.id = paciente.id;
  const pacientesActualizados = pacientes.map((pacienteState)=> pacienteState.id === paciente.id ?objetoPaciente : pacienteState);

  setPacientes(pacientesActualizados);
  setPaciente({})
  }else{
    //Nuevo registro
      //Tomando una copia del arreglo de pacientes y agregando el nuevo paciente
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
  }

  

  //Reiniciar el formulario 
  setNombre('');
  setPropietario('');
  setEmail('');
  setFecha('');
  setSintomas('');

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg text-pretty mt-5 text-center mb-10"> 
          Añade Pacientes y {''} <span className="text-indigo-600 font-bold ">Administralos</span>
        </p>
        <form onSubmit={handleSubmit}
         action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

          {error && <Error>
                <p className='text-pretty'>Todos los campos son obligatorios, por favor rellene los campos faltantes.
                </p>
                </Error>
              }
          <div className="mb-5">
            <label 
            htmlFor="mascota" 
            className="block text-gray uppercase font-bold"
            >
            Nombre Mascota
              </label>
            <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
             />
          </div>
          <div className="mb-5">
            <label 
            htmlFor="propietario" 
            className="block text-gray uppercase font-bold"
            >
            Nombre Propietario
              </label>
            <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            value={propietario}
            onChange={(e)=> setPropietario(e.target.value)}
             />
          </div>
          <div className="mb-5">
            <label 
            htmlFor="email" 
            className="block text-gray uppercase font-bold"
            >
            Correo
              </label>
            <input
            id="email"
            type="email"
            placeholder="Email del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
             />
          </div>
          <div className="mb-5">
            <label 
            htmlFor="alta" 
            className="block text-gray uppercase font-bold"
            >
            Alta
              </label>
            <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2  rounded-md "
            value={fecha}
            onChange={(e)=> setFecha(e.target.value)}
             />
          </div>
          <div className="mb-5">
            <label 
            htmlFor="sintomas" 
            className="block text-gray uppercase font-bold"
            >
            Sintomas
              </label>
           <textarea  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md " name="" id="sintomas" cols="30" rows="10" placeholder="Describe los sintomas"  value={sintomas}
           onChange={(e) => setSintomas(e.target.value)}></textarea>
          
          </div>
          <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-all cursor-pointer" value={paciente.id ? 'Agregar Cambios' : 'Agregar paciente'} />
        </form>
    </div>
  )
}

export default Formulario