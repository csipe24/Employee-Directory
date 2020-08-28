import axios from "axios";

export default {
  getUser(){
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};