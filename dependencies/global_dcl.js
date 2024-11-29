import {base_trigger} from "./base.js"

const axios=require("axios");

const net=axios.create({
    baseURL:"https://localhost",
    timeout:5000,
    headers:{
        'Content-Type':'application/json',
    }
});

net.interceptor.request.use((config)=>{

    const token=

})

export default net;