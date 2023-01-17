import axios from "axios";
import configData from "../configs/config.json";


const usersAPI = configData.USERS_SERVICE_API + "users"; 
const professeursAPI = configData.USERS_SERVICE_API + "professeurs"; 
const chefImmAPI = configData.USERS_SERVICE_API + "chef-imm"; 
const regigsseurAPI = configData.USERS_SERVICE_API + "regigsseurs"; 
const adminAPI = configData.USERS_SERVICE_API + "admins"; 

class UserService {
    
    findAllUsers(){
        return axios.get(`${usersAPI}`).then(
            (res) => {
              console.log(res.data);
              return res.data;
            },
            (err) => {
              console.error("error in getting findAllUsers");
            }
        );
    }

    findUserById(id){
        return axios.get(`${usersAPI}` + "/id", id).then(
            (res) => {
              console.log(res.data);
              return res.data;
            },
            (err) => {
              console.error("error in getting findUserById");
            }
        );
    }

    findUserByEmail(email){
        return axios.get(`${usersAPI}` + "/email", email).then(
            (res) => {
              console.log(res.data);
              return res.data;
            },
            (err) => {
              console.error("error in getting findUserByEmail");
            }
        );
    }

    addsUser(user){
        return axios.post(`${usersAPI}` + "/add", user).then(
            (res) => {
              console.log(res.data);
              return res.data;
            },
            (err) => {
              console.error("error in getting addsUser");
            }
        );
    }
    updateUser(user){
        return axios.put(`${usersAPI}` + "/update", user).then(
            (res) => {
              console.log(res.data);
              return res.data;
            },
            (err) => {
              console.error("error in getting updateUser");
            }
        );
    }
    deleteUser(user){
        return axios.delete(`${usersAPI}` + "/delete", user).then(
            (res) => {
              console.log(res.data);
              return res.data;
            },
            (err) => {
              console.error("error in getting deleteUser");
            }
        );
    }

    findAllProfesseurs(){
        return axios.get(`${professeursAPI}`).then(
            (res) => {
              console.log(res.data);
              return res.data;
            },
            (err) => {
              console.error("error in getting findAllProfesseurs");
            }
        );
    }
    findProfesseurById(id){
        return axios.get(`${professeursAPI} + "/id"`, id).then(
            (res) => {
              console.log(res.data);
              return res.data;
            },
            (err) => {
              console.error("error in getting findProfesseurById");
            }
        );
    }

    findAllChefImm(){
        return axios.get(`${chefImmAPI}`).then(
            (res) => {
              console.log(res.data);
              return res.data;
            },
            (err) => {
              console.error("error in getting findAllChefImm");
            }
        );
    }
    findChefImmById(id){
        return axios.get(`${chefImmAPI}`+ "/id", id).then(
            (res) => {
              console.log(res.data);
              return res.data;
            },
            (err) => {
              console.error("error in getting findChefImmById");
            }
        );
    }

    findAllRegisseurs(){
        return axios.get(`${regigsseurAPI}`).then(
            (res) => {
              console.log(res.data);
              return res.data;
            },
            (err) => {
              console.error("error in getting findAllRegisseurs");
            }
        );
    }
    findRegisseursById(id){
        return axios.get(`${regigsseurAPI}`+ "/id", id).then(
            (res) => {
              console.log(res.data);
              return res.data;
            },
            (err) => {
              console.error("error in getting findRegisseursById");
            }
        );
    }

    findAllAdmins(){
        return axios.get(`${adminAPI}`).then(
            (res) => {
              console.log(res.data);
              return res.data;
            },
            (err) => {
              console.error("error in getting findAllAdmins");
            }
        );
    }
    findAdminById(id){
        return axios.get(`${adminAPI}`+ "/id", id).then(
            (res) => {
              console.log(res.data);
              return res.data;
            },
            (err) => {
              console.error("error in getting findAdminById");
            }
        );
    }

}

export default new UserService();