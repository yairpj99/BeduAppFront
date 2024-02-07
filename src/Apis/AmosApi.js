import axios from "axios";

const URL = 'http://localhost:8080';

const getAll = async () => {
    try {
        const response = await axios.get(`${URL}/tutores`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const newAmo= async (data)=>{
    try{
        const response = await axios.post(`${URL}/tutores`,data);
        return response.data;
    }catch(error){
        throw error;
    }
}

const deleteAmo = async(id)=>{
    try {
        const response = await axios.delete(`${URL}/tutores/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default { getAll, newAmo, deleteAmo };