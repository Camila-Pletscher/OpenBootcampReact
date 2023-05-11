import React, { useEffect, useState } from "react";

const Prueba = () => {
  const defaultState = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martin",
    apellidos: "San José",
  };

  const [user, setUser] = useState(defaultState);

  useEffect(() => {
    const intervalAge = setInterval(() => {
      actualiceUser();
    }, 1000);
    return () => {
      clearInterval(intervalAge);
    };
  });

  const actualiceUser = () => {
    return setUser({
      fecha: user.fecha,
      edad: user.edad + 1,
      nombre: user.nombre,
      apellidos: user.apellidos,
    });
  };

  return (
    <div>
      Hora actual: {user.fecha.toLocaleDateString()}
      Nombre y apellido: {user.nombre} {user.apellidos}
      Edad: {user.edad}
    </div>
  );
};

export default Prueba;
