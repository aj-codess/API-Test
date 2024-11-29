import {net} from "./global_dcl";


async function signup_trigger(payload,callback){
    try{

        let query=await net.post(`/signup`,payload);

        let response=query.data;

    } catch(error){

        if(error.response){

        } else if(error.request){

        } else{

        };

    };
};