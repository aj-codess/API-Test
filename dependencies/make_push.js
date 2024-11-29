import {default as net} from "./global_dcl.js";

async function make_push(payload){
    try{

        let query=await net.post(`/make_push`,JSON.stringify(payload));

        let response=query.data;

    } catch (error) {

        console.error({
          message: error.message,
          name: error.name,
          stack: error.stack,
        });
    
        throw error;
    
      };

};