import { ConfigContext } from "antd/lib/config-provider";
import axios from "axios"

const SKIN_HEAL_APIS_URL = "http://localhost:4040";

var config = {
    headers: {
        "Content-Type": "application/json",
    },
};

class Application {
    async createAccount(data){
        try{
            const response = await axios.post(
                SKIN_HEAL_APIS_URL + "/user/create",
                data,
                config
            );
            return response;
        } catch(error){
            console.log(error.response);
        }
    }
    async getAllproducts() {
        try {
            const response = await axios.get(
                SKIN_HEAL_APIS_URL + "/product/allproducts",
                config
            );

            // console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    };
    async createProduct(data){
        try{
            const response = await axios.post(
                SKIN_HEAL_APIS_URL + "/product/register",
                data,
                config
            );
            return response;
        } catch(error){
            console.log(error.response);
        }
    }
    
}
export default new Application();
