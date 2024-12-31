import { getUsers } from "../models/userModel.js";

export const getUserConntroller = (req, resp) => {
    getUsers((error, users) => {
        if (error){
            return error;
        }
        return resp.json(users);
    });
}