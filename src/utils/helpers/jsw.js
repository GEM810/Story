import { SignJWT, jwtVerify } from "jose";
// کلید خصوصی برای امضا
const key = new TextEncoder().encode("this is a secret key");
const encryptJWT = async (payload) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(key);
};
const decryptJWT = async (token) => {
  try {
    const { payload } = await jwtVerify(token, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch  {
    return null;
  }
};
export { encryptJWT, decryptJWT };
