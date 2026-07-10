import { refreshToken } from '@/store/auth';
import { getAccessToken } from '@/utils/token-service';
import axios from 'axios'
export const url = 'http://localhost:3000/api/v1'

const axiosInstance = axios.create({
    baseURL: url,
    withCredentials: true,
})

// Request Interceptor
axiosInstance.interceptors.request.use((config) => {
    const token = getAccessToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            try {
                const newToken = await refreshToken();

                originalRequest.headers.Authorization = `Bearer ${newToken}`;

                return axiosInstance(originalRequest);
            } catch (err) {
                // logout user
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);
export default axiosInstance