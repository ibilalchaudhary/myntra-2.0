import React from "react";

export default function Radio({ label }) {
  return (
    <label class="container-radio">
      {label}
      <input type="radio" />
      <span class="checkmark"></span>
    </label>
  );
}
