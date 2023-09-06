import {Link} from '@remix-run/react'
export default function LeftPanel(){
    return(
        <div className="left-panel">
        <div className="links">
            <Link className='routesTasks' to="/tareas">Tareas</Link>
            <Link className='routesTasks' to="/tareass/crear-tareas">Crear Tareas</Link>
            <Link className='routesTasks' to="/">Salir</Link>
        </div>
    </div>
    )
}