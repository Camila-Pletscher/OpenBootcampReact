import React, { useEffect, useState } from 'react'


const ActSesions = () => {

    const initialDates = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellidos: 'San José'
    };

    const [dates, setDates] = useState(initialDates);

    useEffect(() => {
      const intervalAge = setInterval(() => {
         
            actualiceUser();
            
         
        
    }, 1000)
    
      return () => {
        clearInterval(intervalAge);
      }
    });
    

    const actualiceUser = () => {
        return setDates({
                nombre: dates.nombre,
                apellidos: dates.apellidos,
                fecha: dates.fecha,
                edad: dates.edad +1
            });
    };

  return (
    <div>
        Hora actual: {dates.fecha}
        Nombre y apellido: {dates.nombre} {dates.apellidos}
        Edad: {dates.edad}
    </div>
  );
};

export default ActSesions;


