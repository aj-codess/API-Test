import {default as net} from "./global_dcl.js";


async function signup_trigger(payload){

    try{

      net.interceptors.request.use(async (config)=>{

        const query = await net.post(`/signup`,JSON.stringify(payload));

        return config;

      });

      net.transformRequest((data,headers))

    } catch (error) {

        console.error({
          message: error.message,
          name: error.name,
          stack: error.stack,
        });
    
        throw error;
    
      };

};

export default signup_trigger;