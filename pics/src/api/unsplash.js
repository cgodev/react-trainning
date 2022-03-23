import axios from "axios";

export default axios.create({
    baseURL: `https://api.unsplash.com`,
    headers: {
        Authorization: 'Client-ID QNI_0TsHjFscDwXu7ceFeY_TalD87izlQi_whV0CAY0'
    },
});