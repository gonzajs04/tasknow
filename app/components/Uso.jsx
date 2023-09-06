import paso1 from "../../public/img/paso1.mp4";
import paso2 from '../../public/img/paso2.png'
import { useRef, useEffect } from "react";
export default function Uso() {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <section className="uso">
      <div className="container-data container-uso">
        <div className="uso-pasos">
          <div className="paso">
            <p><span>Paso 1:</span> Ve a la pestaña de registro</p>
            <div className="container-video">
              <video loading="lazy" src={paso1} ref={vidRef} muted autoPlay loop />
            </div>
          </div>

          <div className="paso">
          <p><span>Paso 2:</span> Rellena los datos solicitados</p>
            <div className="container-img">
              <picture><img loading="lazy" src={paso2} alt="paso 2" /></picture>
            </div>
          </div>

          <div className="paso">
            <div className="container-img"></div>
          </div>
        </div>

        <div className="container-uso-text">
          <p>Modo de uso</p>
          <h2>
            Como <span>Empezar</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
