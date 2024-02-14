import axios from "axios";

export const  BASE_URL ="https://sojonewsbackendv1.bestaffix.com/api/v1/";

export default axios.create({
    baseURL: BASE_URL,
})