import axios from "axios";
import {ref} from "vue";

export function useUser() {
    const user = ref('');

    const getUser = async (id) => {
       let response = await axios.get(`https://62503098e3e5d24b341d4f7c.mockapi.io/api/v1/users/${id}`);
       user.value = response.data;
    }

    const updateUser = async(data) => {
        console.log(data);
        let response = await axios.put(`https://62503098e3e5d24b341d4f7c.mockapi.io/api/v1/users/${data.id}`, data);
        user.value = response.data
    }
    return { getUser, user, updateUser }
}
