import axios from "axios";

const URL = 'http://localhost:8080';

const getAll = async () => {
    try {
        const response = await axios.get(`${URL}/mascotas`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const newMascota = async (data) => {
    try {
        const response = await axios.post(`${URL}/mascotas`,data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteMascota = async (id) => {
    try {
        const response = await axios.delete(`${URL}/mascotas/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default { getAll, newMascota, deleteMascota };