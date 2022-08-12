import axios from "axios";

const signup = async (email, username, password) => {
  axios
    .post(`http://localhost:3060/api/user/simpleUser/signup`, {
      email: email,
      username: username,
      password: password,
    })
    .then((data) => {
      alert("Votre compte a été créé");
      console.log(data);
    });
};

export default signup;
