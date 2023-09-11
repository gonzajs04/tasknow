
import Header from '../components/Header'
import Ventajas from '../components/Ventajas'
import Uso from '../components/Uso'
import Separator from '../components/Separator'
import {useState} from 'react';

export default function Index() {

      {/**PONER FLECHA QUE INDIQUE EL LEFT PANEL DE TAREAS, CUAND SE HACE HOVER QUE HAGA EL EFECTO */}
      {/*BUSCAR FORMA DE COLOCAR MODERNAMENTE LAS VENTAJAS DE USO.*/ }
   {/*REORDENAR EN LOS PASOS  DE USO. PONER EL TITULO ARRIBA E IMAGENES ABAJO EN RESPONSIVE. BUSCAR FORMA DE REPRODUCIR EL VIDEO SOLO AL HACER CONTACTO CON LA SECCION*/ }
  return (
    <div className='index'>
      <Header/>
      <Separator/>
      <Ventajas/>
      <Uso/> {/*SEGUIR CON SECCION USO: DISEÑO HASTA TERMINAR, BUSCAR COMO HACER PARA QUE VIDEO SOLO SE REPRODUZCA AL LLEGAR A LA SECCION */}
    </div>
  );
}
