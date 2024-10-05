import axios from "axios";


axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://185.8.174.74:8090"

axios.interceptors.request.use(
    async (request) => {

        return request;
    },
    (error) => Promise.reject(error)
);

axios.interceptors.response.use(
    (response) => {
        // Get the cookies from the response headers


        return response; // Return the response for further processing
    },
    (error) => {
        return Promise.reject(error);
    }
);

export * from "./generated-client"