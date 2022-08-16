import axios from "axios";

const signup = async (email, username, password) => {
  axios
    .post(`http://localhost:3060/api/user/simpleUser/signup`, {
      email: email,
      username: username,
      password: password,
    })
    .then((data) => {
      console.log(data.data.simpleUser);
      alert("Votre compte a été créé");
    });
};

export default signup;
