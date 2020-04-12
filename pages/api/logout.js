import auth0 from "../../Lib/auth0";

const Logout = async (req, res) => {
  await auth0.handleLogout(req, res);
};

export default Logout;
