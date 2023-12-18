import { Web5 } from "@web5/api";

const { web5, did: userDid } = await Web5.connect();

console.log(userDid);

web5;
