import { addMinutes } from 'date-fns';

const useTransformarCitas = (citas) => {
  const transformarCita = (cita, index) => {
    const fechaInicio = new Date(`${cita.clsDate}T${cita.clsTime}`);
    const fechaFin = new Date(`${cita.clsDate}T${cita.clsFin}`);

    return {
      title: cita.clsMascota.strNombre,
      notes: {tratamiento: cita.strTratamiento, id: cita.lngCitaID, index: index},
      start: fechaInicio,
      end: fechaFin,
    };
  };

  const transformarCitas = () => {
    if (Array.isArray(citas)) {
      return citas.map(transformarCita);
    } else if (typeof citas === 'object' && citas !== null) {
      const citasArray = Object.values(citas);
      return citasArray.map(transformarCita);
    } else {
      console.error('La variable "citas" no es un array ni un objeto válido.');
      return [];
    }
  };

  return { transformarCitas };
};

export default useTransformarCitas;
