import NodeRSA from "node-rsa";

class AuthHelper {
  static encryptBase64(data: any, keyData: string) {
    try {
      const rsa = new NodeRSA(keyData, "pkcs1-public", {
        encryptionScheme: "pkcs1",
      });
      return rsa.encrypt(data, "base64");
    } catch (error) {
      console.log(error);
      return "";
    }
  }
}

export default AuthHelper;
