import axios from "axios";

const URL = 'http://localhost:8080';

const getAll = async () => {
    try {
        const response = await axios.get(`${URL}/citas`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const newPost= async (data)=>{
    try{
        const response = await axios.post(`${URL}/citas`,data);
        return response.data;
    }catch(error){
        throw error;
    }
}

const deleteCita = async(id)=>{
    try {
        const response = await axios.delete(`${URL}/citas/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default { getAll, newPost, deleteCita };