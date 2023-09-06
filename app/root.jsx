import styles from "./styles/index.css";
import {Links,Meta,Outlet,LiveReload,Scripts} from '@remix-run/react';
import Navegation from './components/Navegation';
import Footer from './components/Footer';

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export function meta(){
  return[
    {title:"TaskNow"},
    {name:"description",content:"Registra todas tus tareas pendientes en tiempo real en TASKNOW"},
    {name:"viewport", content:"width=device-width,initial-scale=1"}
  ]
}

export function Head() {
  return (
    <head>
      <meta charSet="utf-8" />
      <Meta/>
      <Links/>
    </head>
  );
}

export default function App() {
  return (
    <html lang="es">
      <Head />
      <body>
        {/*SEGUIR CON LA SECCION USO DESPUES DE CREAR SECCIONES DE REGISTRAR, NUEVATAREA Y TAREAS */}
        <Navegation/>



  
        <Outlet/>
        <LiveReload/>
        <Scripts/>



        <Footer/>
      </body>
    </html>
  );
}
