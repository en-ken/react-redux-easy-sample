import axios from "axios";

export const fetchUserList = () => axios.get("http://localhost:3000/users");

export const addUser = (name, info) => axios.post(
  "http://localhost:3000/users",
  {
    name: name,
    info: info,
  }
);