const baseUrl = "https://shopper-back-server.herokuapp.com/";

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
