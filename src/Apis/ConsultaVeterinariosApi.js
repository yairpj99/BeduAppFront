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

export default { getAll };