const User = require("../models/userModel");

class UserService {
  async getByName(name) {
    const query = await User.findOne({ name }).exec();
    return query;
  }
}

module.exports = UserService;