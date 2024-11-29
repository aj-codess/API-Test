import { default as net } from "./global_dcl.js";
import { default as BaseTrigger } from "./base.js";

const baseInstance = new BaseTrigger();

async function newbie() {

  try {

    let query = await net.get(`/world`);

    const headers = query.headers;

    const headerValue = headers["authorization"];

    baseInstance.token_setter(headerValue);

  } catch (error) {

    console.error({
      message: error.message,
      name: error.name,
      stack: error.stack,
    });

    throw error;

  }

}

export default newbie;
