import axios from "axios";


axios.interceptors.request.use(
    async (request) => {
        const token = ""

        if (token) {
            request.headers['Authorization'] = `Bearer ${token}`;
        }
        return request;
    },
    (error) => Promise.reject(error)
);


export * from "./generated-client"