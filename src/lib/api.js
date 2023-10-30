import axios from 'axios'

const apiKey = '1d9d5b90b0537fa0035c9eedcb326b56'
const baseUrl ='https://api.themoviedb.org/3'

const apiAxios = axios.create({
    baseURL: baseUrl,
    params: {
        api_key: apiKey,
    }
})

export default apiAxios