import { find } from "../utils/users";

function loginc(req, res) {
  const {email, password} = req.query;

  const found = find(
    (user) => user.email === email && user.password === password
  );

  const access = found ? true : false;
  res.status(200).json({access});
}

export default loginc;
