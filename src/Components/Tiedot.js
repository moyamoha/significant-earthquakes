import React from "react";

export default function Tiedot({ quake }) {
  let props = quake ? Object.keys(quake["properties"]) : [];

  props = props.filter((x) => x !== "i_d");

  let content = quake ? (
    props.map((x) => (
      <div className="kentta">
        {" "}
        <span>{x}:</span>
        <span>{quake.properties[x]}</span>{" "}
      </div>
    ))
  ) : (
    <h3>Select earthquake to display infromation</h3>
  );

  return (
    <div
      id="tiedot"
      className="col-3"
      style={{ padding: "5px", textAlign: "justify", lineHeight: "1.8rem" }}
    >
      {content}
    </div>
  );
}
