import {Link} from '@remix-run/react';
import menu from '../../public/img/menu.png';
import { useState } from 'react';
export default function Navegation() {
  const[isMenuOpen,setIsMenuOpen] = useState(false);
  return (
    <div className="containerg-nav">
      <div className="container-menu" onClick={()=>isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)}>
        <picture>
          <img src={menu} alt="Menu" />
        </picture>
      </div>
      <div className={`container-nav ${isMenuOpen ? "isOpen" : ""}`}>
        <div className="container-logo">
          <h2 translate="no">TaskNow</h2>
        </div>
        <div className="nav">
          <Link to='/'>Inicio</Link>
          <a href="">Ventajas</a>
          <a href="">Uso</a>
          <a href="">Contacto</a>
          <Link to='/registrar'>Registro</Link>
          <Link to='/tareas'>Tu primer tarea</Link>
        </div>
        <div className="user">
          <div className="user-photo">
            <picture>
              <img loading="lazy" src="" alt="Foto" />
            </picture>
          </div>
          <p>Bienvenido Profile</p>
        </div>
      </div>
    </div>
  );
}
