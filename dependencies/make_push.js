import {net} from "./global_dcl";

async function make_push(payload,callback){
    try{

        let query=await net.post(`/make_push`,payload);

        let response=query.data;

    } catch(error){

        if(error.response){

        } else if(error.request){

        } else{

        };

    };
};