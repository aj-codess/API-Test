import os from "node:os";

class base_trigger {

    constructor() {

        this.device = () => {
            return os.cpus()
        };

        this.Pre_Bearer = "";
        this.Bearer = "";
    }

    token_setter(auth_value) {

        if (auth_value.startsWith("Bearer")) {

          this.Bearer = auth_value.replace("Bearer ", "");

          this.token_localizer("Bearer",this.Bearer);

        } else if (auth_value.startsWith("Pre_Bearer")) {

          this.Pre_Bearer = auth_value.replace("Pre_Bearer ", "");

          this.token_localizer("Pre_Bearer",this.Pre_Bearer);

        }

      }
      

    token_localizer(name,token) {

    };

    token_local_getter(name){

    };

};

export default base_trigger;