import React from "react";
import { useTranslation } from "react-i18next"; //use translation lisätty

export default function Tiedot({ quake }) {
  let props = quake ? Object.keys(quake["properties"]) : [];

  props = props.filter((x) => x !== "i_d");
  let {t} = useTranslation()
  let content = quake ? (
    props.map((x) => (
      <div className="kentta">
        {" "}
        <span>{x}:</span>
        <span>{quake.properties[x]}</span>{" "}
      </div>
    ))
  ) : (
    <h3>{t('choose')}</h3>
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
