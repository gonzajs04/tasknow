import LeftPanel from '../components/LeftPanel';
import styles from '../styles/tareas.css';
import FormTarea from '../components/FormTarea'

export function links(){
    return[
        {rel:"stylesheet",href:styles}
    ]
}
export default function crearTarea(){

    return(
        <div className="tareas">
            <LeftPanel/>
            <FormTarea/>
        </div>
    )
}