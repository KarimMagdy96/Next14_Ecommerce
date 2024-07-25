const { default: axiosClient } = require("./axiosClient");

const getLatestProdacts = () => {
  return axiosClient.get("/prodacts?populate=*");
};

export default { getLatestProdacts };
