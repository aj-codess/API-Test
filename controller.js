import { default as BaseTrigger } from "./dependencies/base.js";
import { default as newbie } from "./dependencies/newbie.js";
import {default as signup_trigger} from "./dependencies/signup_trigger.js";
import {default as pusher} from "./dependencies/make_push.js";

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
            const returned_payload_grabber=()=>{
                let response=this.signup(payload);

                if(callback){
                    callback(response);
                };

            };

            returned_paylaod_grabber();

        } catch(error){
            console.error("error with signup: ",error.message);
        };

    };


    push(token_payload,callback){

      try{

        let response=this.pusher(token_payload);

        if(callback){
          callback(response.)
        }

      } catch(error){
        console.error("error with push: ",error.message)
      }

    }

};

export default controller;