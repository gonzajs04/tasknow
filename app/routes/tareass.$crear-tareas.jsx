import LeftPanel from '../components/LeftPanel';
import styles from '../styles/tareas.css';
import Calendar from 'react-calendar';
import FormTarea from '../components/FormTarea'
import { useLoaderData } from '@remix-run/react';

export function links(){
    return[
        {rel:"stylesheet",href:styles}
    ]
}


export function loader() {
    const categorias = [
      "Comidas",
      "Despensas",
      "Entretenimiento",
      "Trabajo",
      "Insitucional",
      "Casa",
      "Varios",
    ];
    return categorias;
  }

  
export default function crearTarea(){
    const categorias = useLoaderData();

    return(
        <div className="tareas">
            
            <LeftPanel/>
            <FormTarea categorias={categorias}/>
        </div>
    )
}