import axios from "axios";


axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://185.8.174.74:8090"

axios.interceptors.request.use(
    async (request) => {
        const token = ""


        console.log(request, "ggg")
        if (token) {
            request.headers['Authorization'] = `Bearer ${token}`;
        }
        return request;
    },
    (error) => Promise.reject(error)
);

axios.interceptors.response.use(
    (response) => {
        // Get the cookies from the response headers
        const cookies = response;
        console.log(cookies, "hhh")
        // alert("po")
        // if (cookies) {
        //     // Set the cookie manually
        //     cookies.forEach(cookie => {
        //         document.cookie = cookie; // Set each cookie
        //     });
        // }

        return response; // Return the response for further processing
    },
    (error) => {
        return Promise.reject(error);
    }
);

export * from "./generated-client"