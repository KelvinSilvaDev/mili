// resources/js/Pages/TestRelacionamentos.jsx

import React from 'react';

const Teste = ({ aluna, aulas, escalaEmocional }) => {

  console.log(aluna)
  return (
    <div>
      <h1>{aluna.nome}</h1>
      <ul>
        {aulas.map((aula) => (
          <li key={aula.id}>
            {aula.nome} - Medo: {escalaEmocional.medo}
          </li>
        ))}
      </ul>
      {/* <p>{JSON.stringify(aluna)}</p>
      <p>{JSON.stringify(aulas)}</p> */}
      {/* <p>{JSON.stringify(escalaEmocional)}</p> */}
    </div>
  );
};

export default Teste;
