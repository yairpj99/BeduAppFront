import axios from "axios";

const URL = 'http://localhost:8080';

const getAll = async () => {
    try {
        const response = await axios.get(`${URL}/veterinarios`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const newVeterinario = async (data) => {
    try {
        const response = await axios.post(`${URL}/veterinarios`,data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteVeterinario = async (id) => {
    try {
        const response = await axios.delete(`${URL}/veterinarios/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default { getAll, newVeterinario, deleteVeterinario };