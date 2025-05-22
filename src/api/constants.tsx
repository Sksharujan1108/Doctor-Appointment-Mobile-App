export const BASE_URL = 'http://localhost:8080';

export const API_PATH = {
    DOCTOR: 'api/doctors',
    SPECIALITY: 'api/speacialities',
    APPOINTMENT: 'api/appointments',
    AUTH_LOGIN: 'api/auth/login',
};

export const getHeaders = () => {
    return {
        'Authorization': 'Bearer',
    };
};
