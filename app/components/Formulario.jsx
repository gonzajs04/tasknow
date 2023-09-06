

import {validateDataSpaces} from '../helpers/app'
export default function Formulario({name,setName,surname,setSurName,email,setEmail,password,setPassword}){

    
    return(
        <div className='form'>
                <div className="container-name">
                    <label htmlFor="name">Nombre</label>
                    <input placeholder="Atenea" type="text" name="name" id="name" onChange={(e)=>{setName(validateDataSpaces(e.target.value))}} value={name} />
                </div>

                <div className="container-surname">
                    <label htmlFor="surname">Apellido</label>
                    <input placeholder="Zeuz" type="text" name="surname" id="surname" onChange={(e)=>setSurName(e.target.value)} value={surname} />
                </div>

                <div className="container-email">
                    <label htmlFor="email">Email</label>
                    <input placeholder="mail@mail.com" type="email" name="email" id="email" onChange={(e)=>setEmail(validateDataSpaces(e.target.value))} value={email} />
                </div>

                <div className="container-password">
                    <label htmlFor="password">Contraseña</label>
                    <input placeholder="Mistareas123!" type="password" name="password" id="password" value={password} onChange={(e)=>{setPassword(validateDataSpaces(e.target.value))}} />
                </div>

              
                </div>
    )
}