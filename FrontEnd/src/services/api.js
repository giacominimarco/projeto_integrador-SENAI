import axios from 'axios';
import { getToken } from "./auth";

const api = axios.create({
    baseURL: 'http://localhost:3333'
});
//Verifica e intercepta se houver o token e o repassa para o cabeçalho de autenticação
api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
export default api;