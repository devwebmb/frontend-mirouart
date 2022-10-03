import axios from "axios";

const login = async (email, password) => {
  return axios
    .post(`http://localhost:3060/api/user/simpleUser/login`, {
      email: email,
      password: password,
    })
};

export default login;
