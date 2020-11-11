import React from "react";
import Hija from "./Hija";

class Madre extends React.Component {
  constructor(props) {
    super(props);
    this.recordarLLamarALaAbuela = this.recordarLLamarALaAbuela.bind(this);
  }
  pagarLaClase() {
    console.log("La madre pagó a la profesora");
  }
  recordarLLamarALaAbuela() {
    this.props.pagaClaseAbuela();
  }
  render() {
    return (
      <div className="Madre">
        <Hija
          pagarClase={this.pagarLaClase}
          RecordarLLamarAbuela={this.recordarLLamarALaAbuela}
          story1={this.props.story1}
          story2={this.props.story2}
          story3={this.props.story3}
          story4={this.props.story4}
          story5={this.props.story5}
          story6={this.props.story6}
          story7={this.props.story7}
          story8={this.props.story8}
          story9={this.props.story9}
          story10={this.props.story10}
          story11={this.props.story11}
        />
      </div>
    );
  }
}

export default Madre;
