
import axios from "axios";

const SKIN_HEAL_APIS_URL = "http://localhost:4040";


var Config = {
  headers: {
    "Content-Type": "application/json",
  },
};

class Application {
  async createAccount(data) {
    try {
      const response = await axios.post(
        SKIN_HEAL_APIS_URL + "/user/create",
        data,
        Config
      );
      return response;
    } catch (error) {
      console.log(error);
      return error.response;
    }
  }
  async getAllUsers() {
    try {
      const response = await axios.get(
        SKIN_HEAL_APIS_URL + "/user/all",
        Config
      );
      //console.log response
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Application;





















