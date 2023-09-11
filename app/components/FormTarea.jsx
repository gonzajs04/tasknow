import { Form } from "@remix-run/react";
import styled from "styled-components";
export const Select = styled.select`
  width: 100%;
  color: black;
  border-radius: 15px;
  border: 1px grey solid;
  padding: 0.7rem 0;
  font-size: 1rem;
  outline: none;
  &:hover {
    cursor: pointer;
    transition: border 0.5s ease-in-out;
    border: 1.5px solid var(--lightBlue);
    outline: none;
  }
`;

export default function FormTarea({ categorias }) {
  return (
    <div className="crear-tarea">
      <h2 style={{ margin: "0 0 2rem 0" }}>Crear Tarea</h2>

      <Form noValidate method="POST" action="#" className="form">
        <div className="tarea">
          <label htmlFor="taskname">Tarea</label>
          <input
            type="text"
            className="taskname"
            placeholder="Pj: Lavar los platos"
          />
        </div>

        <div className="tarea-desc">
          <label htmlFor="">Descripcion</label>

          <textarea
            placeholder="Pj: Lavar los platos de la cocina"
            name=""
            id=""
            cols="30"
            rows="10"
            style={{ resize: "none" }}
          ></textarea>
        </div>

        <div className="tarea-fecha">
          <label htmlFor="">Fecha limite</label>
          <p>Buscar calendario para fechas</p>
        </div>

        <div className="tarea-categoria">
          <label htmlFor="">Categoria</label>

          <Select>
            <option value="Seleccione">Seleccione</option>
            {categorias.map((categoria, i) => (
              <option value={i} key={i} style={{ color: "black" }}>
                {categoria}
              </option>
            ))}
          </Select>
        </div>
      </Form>
    </div>
  );
}
