import Card from '../components/Card';
import accessimg from '../../public/img/access.png'
import ventaja2 from '../../public/img/2ventaja.png'
import ventaja3 from '../../public/img/ventaja3.png'
import {useState} from 'react'
export default function Ventajas(){
    const [ventajas,setVentajas] = useState([
        {title:"Facil Acceso",img:accessimg},
        {title:"Rapido Registro",img:ventaja2},
        {title:"Facil usabilidad",img:ventaja3}

    ]);
    return(
        <section className="ventajas">
            <div className="container-data container-ventajas">
                <div className="title-text">
                    <p>Ventajas de TASKNOW</p>
                    <h2 translate="yes">Por que deberias usarnos?</h2>
                </div>

                <div className="container-card">
                       {ventajas.map(ventaja=>(
                        <Card key={ventaja.title}
                            ventaja={ventaja}
                        />
                       ))}
                </div>
            </div>
        </section>
    )
}