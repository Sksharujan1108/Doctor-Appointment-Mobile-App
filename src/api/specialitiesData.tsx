import { specialtiesData } from "@/utlis/appContent";
import { API_PATH, BASE_URL } from "./constants";

export const fetchspecialtiesData = async () => {
    const url = BASE_URL + API_PATH?.SPECIALITY

    // const { data } = await axios.get(url);
    // return data;
    return specialtiesData;
}