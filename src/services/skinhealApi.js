<<<<<<< HEAD
import axios from "axios";

const SKIN_HEAL_APIS_URL = "http://localhost:4040";

=======

import axios from "axios";
const SKIN_HEAL_APIS_URL = "http://localhost:4040";
>>>>>>> fae237c (cart)
var Config = {
  headers: {
    "Content-Type": "application/json",
  },
};
<<<<<<< HEAD

=======
>>>>>>> fae237c (cart)
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
<<<<<<< HEAD

=======
>>>>>>> fae237c (cart)
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
<<<<<<< HEAD
export default new Application();
=======
export default new Application;




















>>>>>>> fae237c (cart)
