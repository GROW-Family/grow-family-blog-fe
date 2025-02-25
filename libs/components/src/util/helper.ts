import NodeRSA from "node-rsa";

class Helper {
  static encryptPkcs1Base64(data: any, keyData: string) {
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
  static stringToBase64(str: string) {
    return window.btoa(str);
  }
}

export default Helper;
