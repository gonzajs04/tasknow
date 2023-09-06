import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import styles from '../styles/tareas.css';

import { useLoaderData, useLocation } from '@remix-run/react';
export function meta(){
    return[
        {title:"TaskNow - Tareas"},
        {name:"description",content:"Registra todas tus tareas y mantente al tanto"}
    ]
}

export function links(){
    return[
        {rel:"stylesheet",href:styles}
    ]
}
export function loader(){
  return 0;
}

export default function tareas(){
 
    return(
        <div className="tareas">
           <LeftPanel/>
          
            <RightPanel/>

         
            
        </div>
    )
}