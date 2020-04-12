import auth0 from "../../Lib/auth0";

const Callback = async (req, res) => {
  await auth0.handleCallback(req, res, { redirectTo: "/app" });
};

export default Callback;
