import axios from 'axios';

export default function AxiosInstance(Logger = null) {

    const axiosApi = axios.create({
        baseURL: "http://127.0.0.1:8000",
        //timeout: 10000
        // headers: {
        //     'Accept': 'application/json',
        // }
    })

    axiosApi.interceptors.request.use(
        (config) => {
            const token = Logger ? Logger.token : null
            if (token) {
                config.headers['Authorization'] = 'Bearer ' + token
            }

            return config
        },

        (error) => {
            return Promise.reject(error)
        }
    )

    axiosApi.interceptors.response.use(
        (response) => {
            // console.log("REPONSE", response)
            return response.data
        },
        (error) => {
            console.log("ERREUR", error)
            return Promise.reject(error)
        }
    )

    return axiosApi
}
