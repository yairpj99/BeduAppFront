import MascotasApi from "../../Apis/MascotasApi"
import { startChangeView } from "../Calendar/Thunks";
import { setErrorMessage, setMascotas } from "./Mascotas";

export const startSetMascotas=()=>{
    return async(dispatch)=>{
        try{
            const resp = await MascotasApi.getAll();
            if(resp.length>0){dispatch(setMascotas(resp))}
        }catch(error){
            dispatch(setErrorMessage(error));
        }
    }
}

export const startNewMascota=(data)=>{
    return async(dispatch)=>{
        console.log(data);
          dispatch(startChangeView('calendar'));
          try {
            const resp = await MascotasApi.newMascota(data);
            if (resp.code) {
              return { ok: false, message: resp.message }
            } else if (resp.lngMascotaID) {
              return { ok: true, id: resp.lngMascotaID }
            } else { return { ok: false } };
          } catch (error) {
            return { ok: false, message: error.message }
          }
    }
}