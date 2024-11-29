import {default as net} from "./global_dcl.js";


async function signup_trigger(payload){

    try{

        let query=await net.post(`/signup`,JSON.stringify(payload));

        let response=query.data;

        return response;

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