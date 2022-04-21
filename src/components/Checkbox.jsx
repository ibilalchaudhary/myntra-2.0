import React from "react";

export default function Checkbox({ label, span }) {
  return (
    <label class="container-checkbox">
      {label} {span ? <span>({span})</span> : null}
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
  );
}
