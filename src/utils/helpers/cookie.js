import Cookies from "js-cookie";
import { decryptJWT, encryptJWT } from "./jsw";

const setCookie = async (key, data) => {
  Cookies.set(key, await encryptJWT(data));
  
  
};
const getCookie = async (key) => await decryptJWT(Cookies.get(key));
const removeCookie = async (key) =>  Cookies.remove(key);

export { setCookie, getCookie, removeCookie };
