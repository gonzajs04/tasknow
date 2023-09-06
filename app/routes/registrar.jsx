import styles from "../styles/registrar.css";
import registerimg from "../../public/img/register-img.png";
import registerimgw from "../../public/img/register-img.webp";
import Formulario from "../components/Formulario";
import MensajeError from "../components/MensajeError";
import { useEffect, useState } from "react"
import Swal from 'sweetalert2';
import { regex,regexPassword } from "../helpers/app.js";
import { Form, useActionData } from "@remix-run/react";
//////////////////////////////////////////////////FIN IMPORTS

export const meta = () => {
  return [
    { title: "Registrar Usuario - TaskNow" },
    { name: "description", content: "Registrate para empezar con tus tareas" },
  ];
};

export const links = () => {
    return [{ rel: "stylesheet", href: styles }];
  };

///////////////////FIN HEAD META AND STYLES

export async function action({ request, params }) {
  const dataForm = await request.formData();
  const values = Object.fromEntries(dataForm);
  
  const errores = [];
  if (!regex(values?.email)) {
    errores.push("El Email no es valido");
  }
  if(!regexPassword(values?.password)){
    errores.push("La contraseña debe contener almenos 8 caracteres, un numero, una minuscula, una mayuscula, y un simbolo especial como ?!*");

  }
  if (values?.name === "" || values?.surname === "" || values?.email === "") {
    errores.push("Todos los campos deben estar llenos");
  }

  return errores;
}

////////////////////////////////INICIO DE COMPONENTE REGISTRAR
export default function registrar() {
  const [registroExitoso,setRegistroExitoso] = useState(false);
  const[user,setUser] = useState({})
  const[name,setName] = useState('')
  const[surname,setSurName] = useState('')
  const[email,setEmail] = useState('')
  const errores = useActionData();

  useEffect(()=>{
    if(errores?.length ===0){
      setRegistroExitoso(); 
    }
  },[errores]);

  useEffect(() => {
    registroExitoso && mostrarAlerta();
  },[registroExitoso]);


  function mostrarAlerta(){
      Swal.fire({
          icon:"success",
          title:"Registro",
          text:"Registrado Satisfactoriamente"
      });
  }

  return (
    <section className="registrar">
   
      <div className="container-left">
        <div className="container-registrar-text">
          <div className="text-register">
            <h2>Registrate para empezar</h2>
            <p>Comienza tu camino ahora. Ordena y despeja tu mente</p>
          </div>
        </div>
        <div className="container-img">
          <picture>
            <source srcSet={registerimgw} type="image/webp" />
            <img loading="lazy" src={registerimg} alt="registro mg" />
          </picture>
        </div>
      </div>

      <div className="containerg-right">
        {errores?.length &&
          errores.map((error) => <MensajeError key={error} error={error} />)}

        <div className="container-right">
          <Form noValidate method="POST" action="#" style={{ width: "100%" }}>
            <Formulario
                name={name}
                setName={setName}
                surname={surname}
                setSurName= {setSurName}
                email={email}
                setEmail={setEmail}
            />
            <input className="btn-enviar" type="submit" value="Enviar" />
          </Form>
        </div>
      </div>
    </section>
  );
}
