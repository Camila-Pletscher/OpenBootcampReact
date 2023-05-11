import React, { Component, useEffect } from "react";

export default class DidMount extends Component {

  componentDidMount() {
    console.log(
      "Comportamiento antes de que el componente sea añadido al DOM (renderice)"
    );
  }

  render() {
    return <div>DidMount</div>;
  }
}

export const DidMountHook = () => {
    
  useEffect(() => {
    console.log(
      "Comportamiento antes de que el componente sea añadido al DOM (renderice)"
    );
  }, []);

  return <div>DidMount</div>;
};
