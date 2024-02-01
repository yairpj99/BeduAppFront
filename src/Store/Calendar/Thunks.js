import CitasApi from "../../Apis/CitasApi";
import { setCitaSelect, setCitas, setError, setView } from "./Calendar"

export const startChangeView =(view)=>{
    return async(dispatch, getState)=>{
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

  export const startSetCitas=()=>{
    return async(dispatch)=>{
      try{
        const resp = await CitasApi.getAll();
        if(resp.length<=0){dispatch(setError('No hay datos disponibles'));}
        if(resp.message){dispatch(setError(resp.message));}
        if(resp.length>0){dispatch(setCitas(resp))}
      }catch(error){
        dispatch(setError(error.message));
      }
    }
  }