import AmosApi from "../../Apis/AmosApi"
import { startChangeView } from "../Calendar/Thunks";
import { setAmos, setErrorMessage } from "./Amos";

export const startSetAmos=()=>{
    return async(dispatch)=>{
        try{
            const resp = await AmosApi.getAll();
            if(resp.length>0){dispatch(setAmos(resp))}
            if(resp.message){dispatch(setErrorMessage(resp))}
        }catch(error){

        }
    }
}

export const startDeleteAmo=(id)=>{
    return async(dispatch)=>{
        try{
            const resp = await AmosApi.deleteAmo(id);
            return resp;
        }catch(error){

        }
    }
}

export const startNewAmo=(clsTutor)=>{
    return async(dispatch)=>{
      const data={clsTutor};
      console.log(data);
        dispatch(startChangeView('calendar'));
        try {
          const resp = await AmosApi.newAmo(data);
          if (resp.code) {
            return { ok: false, message: resp.message }
          } else if (resp.lngTutorID) {
            return { ok: true, id: resp.lngTutorID }
          } else { return { ok: false } };
        } catch (error) {
          return { ok: false, message: error.message }
        }
    }
}