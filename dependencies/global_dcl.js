import { default as BaseTrigger } from "./base.js";
import axios from "axios";

const baseInstance = new BaseTrigger();

const net = axios.create({
  baseURL: "http://localhost:8888",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

net.interceptors.request.use((config) => {
  let token;

  if (baseInstance.Bearer.length !== 0 && baseInstance.Pre_Bearer.length == 0 ) {

    token = baseInstance.Bearer;

    config.headers.Authorization = `Bearer ${token}`;

  } else if (baseInstance.Pre_Bearer.length !== 0 && baseInstance.Bearer.length == 0) {

    token = baseInstance.Pre_Bearer;

    config.headers.Authorization = `Pre_Bearer ${token}`;

  }

  return config; // Always return the config object
});

export default net;
