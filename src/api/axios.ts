import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async (request) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (apiKey && request.headers) {
    request.headers.set({ 'x-api-key': apiKey });
  }

  return request;
});

export default axiosInstance;