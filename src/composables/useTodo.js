import axios from "axios";
import {ref} from "vue";

export function useTodo() {
    const todos = ref('');

    const getTodos = async () => {
        let response = await axios.get("https://62503098e3e5d24b341d4f7c.mockapi.io/api/v1/todos");
        todos.value = response.data;
    }

    const saveTodo = async(data) => {
        await axios.post("https://62503098e3e5d24b341d4f7c.mockapi.io/api/v1/todos", data);
        getTodos();
    }

    const deleteTodo = async(id) => {
        await axios.delete(`https://62503098e3e5d24b341d4f7c.mockapi.io/api/v1/todos/${id}`);
        getTodos();
    }

    return {getTodos, todos, saveTodo, deleteTodo}
}
