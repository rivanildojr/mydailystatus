import auth0 from "../../Lib/auth0";

const login = async (request, response) => {
  await auth0.handleLogin(request, response);
};

export default login;
