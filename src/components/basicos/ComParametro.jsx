import React from "react";
export default function ComParametro(params) {
  console.log(params);
  return (
    <div>
      <h2>{params.titulo}</h2>
      <p>{params.subtitulo}</p>
    </div>
  );
}
