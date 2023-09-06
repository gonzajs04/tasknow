import {Link} from '@remix-run/react'
export default function Navegation() {
  return (
    <div className="containerg-nav">
      <div className="container-nav">
        <div className="container-logo">
          <h2 translate="no">TaskNow</h2>
        </div>
        <div className="nav">
          <Link to='/'>Inicio</Link>
          <a href="">Ventajas</a>
          <a href="">Uso</a>
          <a href="">Contacto</a>
          <Link to='/registrar'>Registro</Link>
          <Link to='/tareas'>Crea tu primer tarea</Link>
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
