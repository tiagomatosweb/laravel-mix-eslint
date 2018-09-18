export default {
    getUsers() {
        const url = 'http://jsonplaceholder.typicode.com/users';
        return axios.get(url);
    },
};
