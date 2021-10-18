import axios from "axios";

const axiosInterceptors = axios.create({
    baseURL: "https://localhost:44359/api/",
    headers: { "Content-Type": "application/json" },
});

axiosInterceptors.interceptors.request.use(async (config) => {
    return config;
});

axiosInterceptors.interceptors.response.use(
    (response) => {
        const responseData = {
            status: true,
            data: response.data,
            message: null,
        };

        return responseData;
    },
    (error) => {
        let errorMessage;

        if (typeof error === "string") {
            errorMessage = error;
        } else {
            errorMessage = error.message;
        }

        const err = {
            status: false,
            data: null,
            message: errorMessage,
        };

        return Promise.reject(err);
    }
);

const httpService = {
    //This is common get api request.
    async Get(path) {
        try {
            const result = await axiosInterceptors.get(path);
            return result;
        } catch (error) {
            return error;
        }
    },

    //This is common post api request.
    async Post(path, data) {
        try {
            const result = await axiosInterceptors.post(path, data);
            return result;
        } catch (error) {
            return error;
        }
    },

    //This is common put api request.
    async Put(path, data) {
        try {
            const result = await axiosInterceptors.put(path, data);
            return result;
        } catch (error) {
            return error;
        }
    },

    //This is common delete api request.
    async Delete(path) {
        try {
            const result = await axiosInterceptors.delete(path);
            return result;
        } catch (error) {
            return error;
        }
    },
};

//export HTTP service
export default httpService;
