import headerimg from '../../public/img/header-img.png'
import documentimg from '../../public/img/documentfixed.png'
export default function Header() {
  return (
    <header className="header">
      <div className="container-data">
        <div className="title-text">
          <h1 translate='no'>TaskNow</h1>
          <p>La mejor aplicacion para mantener tus dias en orden mientras mas lo necesitas. Utilizala con facilidad y sin necesidad de preocuparte por tus problemas.</p>

          <div className="img-fixed">
      
             </div>
        </div>

        <div className="container-img">
            <picture>
                <img loading="lazy" src={headerimg} alt="Imagen header" />
            </picture>
        </div>
      </div>

   
    </header>
  );
}
