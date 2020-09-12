import React, { Component } from "react";
import mirador from "mirador";

class Mirador extends Component {
  useEffect() {
    const { config } = this.props;
    mirador.viewer(config);
  }
  render() {
    const { config } = this.props;
    return <div id={config.id} />;
  }
}

export default Mirador;
