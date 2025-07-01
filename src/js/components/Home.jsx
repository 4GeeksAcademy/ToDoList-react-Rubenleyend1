import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	// tarea es lo que escribe el usuario, seTarea es la funcion para cambiar el texto de tarea y useState guarda el contenido
	const [tarea, setTarea] = useState("")

	// lista es una lista de tareas, setLista es para cambiar esa lista
	const [lista, setLista] = useState([])

	// Agrega una tarea
	const agregarTarea = (e) => {

		// si la tarea no tiene espacios 
		if (tarea.trim() != "" && e.key === "Enter") {
			setLista([...lista, tarea])//  Crea una copia exacta de la lista, y agraga tarea al final
			setTarea("")// Una vez guardada la tarea en la lista, limpia el estado tarea
		}
	}
	const borrarTarea = (indexBorrar) => {
		const listaNueva = lista.filter((_, index) => index !== indexBorrar)
		setLista(listaNueva)
	}

	return (
		<div className="container  ">
			<p className="text-center display-1 text-body-tertiary">todos</p>
			<div className="shadow-lg">
			<input
				className="form-control fs-4 rounded-0 ps-5"
				type="text"
				placeholder="What do you need to do?"
				onChange={(e) => setTarea(e.target.value)}
				onKeyDown={agregarTarea}
				value={tarea}
			/>

			<ul className="list-group rounded-0 ">
				{lista.map((nuevaTarea, index) => (
					<li className="list-group-item d-flex justify-content-between ps-5 fs-4" key={index}>
						{nuevaTarea}
						<span className="text-danger icono fs-6  align-items-center" onClick={() => borrarTarea(index)}><i class="fa-solid fa-x "></i></span></li>
				))}
			<li className="list-group-item text-body-tertiary">{lista.length === 0 ? "No hay mas tareas" : `${lista.length} tarea${lista.length > 1 ? "s" : ""}`}</li>
			</ul>
			
			</div>
			<div className="hoja1"></div>
			<div className="hoja2 "></div>
		</div>
	);
}
export default Home;