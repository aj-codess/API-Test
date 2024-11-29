const os=require("node:os");

class base_trigger{

    constructor(){

        this.device=()=>{
            return os.cpus()
        };

        this.Pre_Bearer=()=>{

        };

        this.Bearer=()=>{

        }

    };

    Pre_Bearer;
    Bearer;
    device;
};

export default base_trigger;