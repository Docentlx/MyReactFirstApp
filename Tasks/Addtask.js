import React, { useState } from "react";
import PropTypes from "prop-types";
import { clear } from "@testing-library/user-event/dist/clear";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);
  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function Addtask({ onCreate }) {
  const input = useInputValue("");
  function submitHandler(event) {
    event.preventDefault();
    if (input.value().trim()) onCreate(input.value());
    input.clear();
  }
  return (
    <form style={{ marginBottom: ".5rem" }} onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type="submit">Add task</button>
    </form>
  );
}

Addtask.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
export default Addtask;
