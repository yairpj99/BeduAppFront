import ConsultaVeterinariosApi from "../../Apis/ConsultaVeterinariosApi";
import { setErrorMessage, setVeterinarios } from "./Veterinarios";

export const startSetVeterinarios = () => {
    return async (dispatch) => {
        try {
            const resp = await ConsultaVeterinariosApi.getAll();
            if(resp.length<=0){dispatch(setErrorMessage('No hay datos disponibles'));}
            if(resp.length>0){dispatch(setVeterinarios(resp))}
            if(resp.message){dispatch(setErrorMessage(resp.message));}
        } catch (error) {
            dispatch(setErrorMessage(error.message));
        }
    };
};

export const startDeleteVeterinario=(index, lngVetID)=>{
    return async(dispatch)=>{
        try{
            const resp = await ConsultaVeterinariosApi.deleteVeterinario(lngVetID);
            return resp;
        }catch(error){

        }
    }
}
