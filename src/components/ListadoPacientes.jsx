import Paciente from "./Paciente"
const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 ">

      {pacientes && pacientes.length ? (
        <>
      <div className="md:h-screen overflow-y-scroll"> 

      <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center text-pretty">Administra a tus  <span className="text-indigo-600 font-bold">pacientes y citas</span></p>
          { pacientes.map ( (paciente) => (
              <Paciente
              key={paciente.id} 
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
              />
          ))}
      </div>
      </>
      ) : (<>
      
      <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center text-pretty">Agrega tus pacientes y citas <span className="text-indigo-600 font-bold"> y apareceran aqui</span></p>
      </>)}
        
   
    </div>
  )
}

export default ListadoPacientes