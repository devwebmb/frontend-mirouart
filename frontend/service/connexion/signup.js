import axios from "axios";

const signup = async (email, username, password) => {
  return axios
    .post(`http://localhost:3060/api/user/simpleUser/signup`, {
      email: email,
      username: username,
      password: password,
    })
    .then(() => {
      alert("Votre compte a été créé, veuillez vous connecter merci.");
    });
};

export default signup;
