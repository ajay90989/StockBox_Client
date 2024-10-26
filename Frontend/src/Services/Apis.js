import axios from 'axios';
import * as Config from "../Utils/config";




export const login_Api = async (data) => {

    const response = await axios.post(`${Config.base_url}user/login`, {
        UserName: data.UserName,
        password: data.password,
    });
    return response

}




