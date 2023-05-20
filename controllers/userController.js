const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");

const register_user = async (req, res) => {
  const securePassword = async (password) => {
    try {
      const passwordHash = await bcryptjs.hash(password, 10);
      return passwordHash;
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  try {
    const spassword = await securePassword(req.body.Password);
    const user = new User({
      name: req.body.name,
      Email: req.body.Email,
      Country: req.body.Country,
      Phone: req.body.Phone,
      Timezone: req.body.Timezone,
      Password: spassword,
    });

    const userData = await User.findOne({ email: req.body.email });
    // console.log(userData, "hhhhhhhhhhhhh");
    
    if (userData) {
      res
        .status(200)
        .send({ success: false, msg: "this email is already exist" });
    } else {
      const user_data = await user.save();
      res.status(200).send({ success: true, data: user_data });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  register_user,
};
