import React from "react";
import FileInput from "./fileinput";

/* eslint-disable react/prefer-stateless-function */
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sysex: [] };
  }

  updateState = (newState) => {
    this.setState(newState);
  };

  render = () => {
    /* eslint-disable-next-line no-console */
    console.log("state", this.state);

    const { sysex } = this.state;

    return (
      <>
        <FileInput updateState={this.updateState} />
        {/* TODO: Add form component for displaying and editing sysex. */}
      </>
    );
  };
}
/* eslint-enable react/prefer-stateless-function */

export default Editor;
