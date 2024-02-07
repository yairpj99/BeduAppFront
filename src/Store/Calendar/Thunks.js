import CitasApi from "../../Apis/CitasApi";
import { deleteCitaById, setCitaSelect, setCitas, setError, setNewCita, setView } from "./Calendar"

export const startChangeView = (view) => {
  return async (dispatch, getState) => {
    dispatch(setView(view));
  }
}

export const startSetCitaSelect = (event) => {
  return async (dispatch, getState) => {
    const serializableEvent = {
      title: event.title,
      notes: event.notes,
      start: event.start.toISOString(),
      end: event.end.toISOString(),
      sourceResource: event.sourceResource,
    };
    dispatch(setCitaSelect(serializableEvent));
    dispatch(setView('cita'));
  };
};

export const startSetCitas = () => {
  return async (dispatch) => {
    try {
      const resp = await CitasApi.getAll();
      if (resp.length <= 0) { dispatch(setError('No hay datos disponibles')); }
      if (resp.message) { dispatch(setError(resp.message)); }
      if (resp.length > 0) { dispatch(setCitas(resp)) }
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
}

export const startAddNewCita = (formState) => {

  return async (dispatch) => {
    dispatch(startChangeView('calendar'));
    try {
      const resp = await CitasApi.newPost(formState);
      if (resp.code) {
        return { ok: false, message: resp.message }
      } else if (resp.lngCitaID) {
        dispatch(setNewCita(resp));
        return { ok: true, id: resp.lngCitaID }
      } else { return { ok: false } };
    } catch (error) {
      return { ok: false, message: error.message }
    }
  }
}

export const startDeleteCita = (id, index) => {
  return async (dispatch) => {
    try{
      const resp = await CitasApi.deleteCita(id);
      dispatch(deleteCitaById(index));
      return resp;
    }catch(error){
      return {message: error.message }
    }
  }
}