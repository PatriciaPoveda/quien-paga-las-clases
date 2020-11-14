import React from "react";
import "./App.scss";

class Hija extends React.Component {
  constructor(porps) {
    super(porps);
    this.llamarAMama = this.llamarAMama.bind(this);
    this.recordarMamallamarAbuela = this.recordarMamallamarAbuela.bind(this);
    this.state = {
      isClosed: true,
      isOpen: false,
    };
  }
  llamarAMama() {
    this.props.pagarClase();

    this.setState((prevState) => {
      return { isClosed: !prevState.isClosed };
    });
  }
  recordarMamallamarAbuela() {
    this.props.RecordarLLamarAbuela();
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  }
  render() {
    const hiddenClass = this.state.isClosed ? "hidden" : "";
    const hiddenClass2 = this.state.isOpen ? "" : "hidden";
    return (
      <>
        <section className="actOne">
          <p>
            {this.props.story1}
            <strong>
              (función <em>pagarLaClase</em> en Madre.js)
            </strong>
          </p>
          <p>
            {this.props.story2}
            <strong>
              (pasa la función <em>pagarClase</em> en Madre.js)
            </strong>
          </p>
          <p>
            {this.props.story3}
            <strong>
              (recoge la función <em>pagarClase</em> en las props del
              constructor en Hija.js)
            </strong>
            {this.props.story4}
            {this.props.story5}
          </p>

          <button onClick={this.llamarAMama}>Dar la clase</button>
          <div className={hiddenClass}>
            <p>
              <strong>
                (evento: al hacer click en botón llama a la función{" "}
                <em>llamarAMama</em> en Hija.js)
              </strong>
            </p>
            <p>
              {this.props.story6}{" "}
              <strong>
                (llama a la función <em>pagarClase</em> en Madre.js)
              </strong>
            </p>
            <p>Y ahora mira la consola</p>
          </div>
        </section>
        <section className="actTwo">
          <p>
            {this.props.story7}
            <strong>
              (función <em>pagaLaClaseAbuela</em> en Abuela.js)
            </strong>
            <strong>
              (pasa la función <em>pagaClaseAbuela</em> en Abuela.js)
            </strong>
          </p>
          <p>
            {this.props.story8}
            <strong>
              (recoge la función <em>pagaClaseAbuela</em> en las props del
              constructor en Madre.js)
            </strong>
          </p>
          <p>
            {this.props.story9}{" "}
            <strong>
              (pasa la función <em>RecordarLLamarAbuela</em> en Madre.js)
            </strong>
          </p>
          <p>
            {this.props.story3}
            <strong>
              (recoge la función <em>RecordarLLamarAbuela</em> en las props del
              constructor en Hija.js)
            </strong>
            {this.props.story10}
            {this.props.story5}
          </p>
          <button onClick={this.recordarMamallamarAbuela}>Dar la clase</button>
          <div className={hiddenClass2}>
            <p>
              <strong>
                (evento: al hacer click en botón llama a la función{" "}
                <em>recordarMamallamarAbuela</em> en Hija.js)
              </strong>
            </p>
            <p>
              {this.props.story11}{" "}
              <strong>
                (llama a la función <em>recordarLLamarALaAbuela</em> en
                Madre.js)
              </strong>
            </p>
            <p>Y ahora mira la consola</p>
          </div>
        </section>
      </>
    );
  }
}
export default Hija;
