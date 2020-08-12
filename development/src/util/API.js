import axios from "axios";

export default {
  getUser(){
    return axios.get("random");
  }
};