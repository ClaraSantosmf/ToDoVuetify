import axios from "axios";
import settings from "@/settings";

const api = axios.create({
  baseURL: settings.apiBaseUrl,
});

function beforeRequest(config) {
  const loggedUser = window.localStorage.getItem("userId");
  const loggedUserToken = window.localStorage.getItem("userToken");

  if (loggedUser) {
    config.headers["X-Authorization-UserId"] = `${loggedUser}`;
    config.headers["X-Authorization-UserToken"] = `${loggedUserToken}`;
  }
  return config;
}

function requestError(error) {
  return Promise.reject(error);
}

api.interceptors.request.use(beforeRequest, requestError);

//Configuração que injera o retorno da função beforeRequest e requestError em qualquer solicitação HTTP que houver no código.
// beforeRequest insere no localstorage as credenciais necessárias para autenitação.

export default api;
