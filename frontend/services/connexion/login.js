import axios from "axios";

const login = async (email, password) => {
  axios
    .post(`http://localhost:3060/api/user/simpleUser/login`, {
      email: email,
      password: password,
    })
      .then((data) => {
        console.log(data);
      return true;
    });
};

export default login;
