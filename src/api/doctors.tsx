import axios from "axios";
import { API_PATH, BASE_URL } from "./constants"
import { doctorsData } from "@/utlis/appContent";

export const fetchDoctors = async () => {
    const url = BASE_URL + API_PATH?.DOCTOR

    // const { data } = await axios.get(url);
    // return data;

    return doctorsData;
}

export const fetchDoctorById = async (id: any) => {
    const url = BASE_URL + API_PATH?.DOCTOR

    // const { data } = await axios.get(url);
    // return data;

    return doctorsData?.find((item: any) => item?.id === id);
}