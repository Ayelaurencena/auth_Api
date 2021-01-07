const User = require("../models/userModel");

class UserService {
  async getByName(name) {
    const query = await User.findOne({ name }).exec();
    return query;
  }

    createUser(data) {
     bcrypt.hash(data.password, 10).then(hash => {
     data.password = hash;
     const newUser = new User(data);
     return newUser.save();
     });
    }
    }


    module.exports = UserService;

