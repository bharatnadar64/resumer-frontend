// @ts-nocheck
import axios from "axios";

export const baseURL = import.meta.env.VITE_BASE_URL // "http://localhost:8080"

export const axiosObj = axios.create({
    baseURL: baseURL
})



export const generateResume = async (desc) => {
    const responseJson = await axiosObj.post("/api/v1/resume/generate", {
        userDesc: desc
    })
    return responseJson
}

