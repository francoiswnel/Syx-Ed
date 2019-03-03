import React from "react";
import PropTypes from "prop-types";
import { isNullOrUndefined } from "../lib/isNullOrUndefined";
import { readFileAsArrayBuffer } from "../lib/readFileAsArrayBuffer";

const FileInput = (props) => {
  const { updateState } = props;

  const handleFile = (event) => {
    if (
      isNullOrUndefined(event) ||
      isNullOrUndefined(event.target) ||
      isNullOrUndefined(event.target.files)
    )
      return;

    const file = event.target.files[0];

    readFileAsArrayBuffer(file).then((result) => {
      const sysex = new Uint8Array(result);
      updateState({ sysex: sysex });
    });
  };

  return <input type="file" id="input" accept=".syx" onChange={handleFile} />;
};

FileInput.propTypes = {
  updateState: PropTypes.func.isRequired
};

export default FileInput;
