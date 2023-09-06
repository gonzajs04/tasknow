
import Header from '../components/Header'
import Ventajas from '../components/Ventajas'
import Uso from '../components/Uso'
import Separator from '../components/Separator'
import {useState} from 'react';

export default function Index() {



  return (
    <div className='index'>
      <Header/>
      <Separator/>
      <Ventajas/>
      <Uso/> {/*SEGUIR CON SECCION USO DISEÑO HASTA TERMINAR, BUSCAR COMO HACER PARA QUE VIDEO SOLO SE REPRODUZCA AL LLEGAR A LA SECCION */}
    </div>
  );
}
