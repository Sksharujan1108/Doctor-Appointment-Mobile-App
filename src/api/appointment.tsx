/* eslint-disable @typescript-eslint/no-unused-vars */
import { API_PATH, BASE_URL } from './constants';

export const createAppintment = async (data: any) => {
    const url = BASE_URL + API_PATH.APPOINTMENT;

    // const response = await axios(url, {
    //     data: data,
    //     method: 'POST',
    //     headers: getHeaders()
    // })

    // return response.data;
    console.log('data', data);
    return {
        id:new Date().getTime().toString(),
        ...data,
    };

};
