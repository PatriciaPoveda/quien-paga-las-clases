import React from "react";
import Madre from "./Madre";

class Abuela extends React.Component {
  pagaLaClaseAbuela() {
    console.log("La abuela pagó a la profesora");
  }

  render() {
    return (
      <div className="App">
        {" "}
        <Madre
          pagaClaseAbuela={this.pagaLaClaseAbuela}
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
        ></Madre>
      </div>
    );
  }
}

export default Abuela;
