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
  static generatePathWithCallbackUrl(path: string, callbackUrl?: string) {
    if (callbackUrl) {
      return `${path}?callbackUrl=${callbackUrl}`;
    } else if (window) {
      const pathname = window.location.pathname;
      const search = window.location.search;
      return `${path}?callbackUrl=${pathname}${search}`;
    } else {
      return path;
    }
  }
}

export default Helper;
