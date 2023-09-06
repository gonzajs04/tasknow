import pen from '../../public/img/penimg.png'

export default function Card({ventaja}){
    return(
        <div className="card">
            <div className="img-pen">
                    <picture>
                        <img loading="lazy" src={pen} alt="imagen pen" />
                    </picture>
            </div>
                <div className="img-card">
                    <picture>
                        <img  src={ventaja.img} loading="lazy" alt="imagen card" />
                    </picture>
                </div>
                <div className="card-title">
                        <h3>{ventaja.title}</h3>
                </div>        
        </div>
    )
}