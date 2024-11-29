import { default as BaseTrigger } from "./dependencies/base.js";
import { default as newbie } from "./dependencies/newbie.js";
import {default as signup_trigger} from "./dependencies/signup_trigger.js";

class controller{

    constructor(){

        this.base=new BaseTrigger();
        this.signup=new signup_trigger();
        this.init();

    }

    init(){

        if (this.base.Pre_Bearer.length === 0 && this.base.Bearer.length === 0) {
            
          const auth_grabber = async (callback) => {
        
            try {
              const auth = await newbie();
        
            //   if (callback) {
        
            //     callback(auth);
        
            //   }
        
            } catch (error) {
        
              console.error("Error in auth_grabber:", error.message);
        
            }
        
          };
        
          auth_grabber(/*(value) => console.log("Auth token:", value)*/);
        
        };
    };

    signup(payload,callback){
        try{
            const returned_payload_grabber=async ()=>{
                let payload=await this.signup(payload);

                if(callback){
                    callback()
                };
            };

            returned_paylaod_grabber();

        } catch(error){
            console.error("error with signup: ",error.message);
        };

    };

};

export default controller;