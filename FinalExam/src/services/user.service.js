const User = require("../models/user")

/* ------------------------- Create user Service ------------------------- */

const createUser = async (reqBody) => {
    return User.create(reqBody)
};

/* ------------------------- List user Service ------------------------- */

const listUser = async () => {
    return User.find()
};

/* ------------------------- Find all Id Service ------------------------- */

const getId = async (id) => {
    return User.findById(id);
};

/* ------------------------- Delete user Service ------------------------- */

const deleteUser = async (Id) => {
    return User.findByIdAndDelete(Id)
};

/* ------------------------- Update user Service ------------------------- */

const updateUser = async (Id, updatebody) => {
    return User.findByIdAndUpdate(Id, { $set: updatebody })
};

/* ------------------------- User get Email user Service ------------------------- */

const getUserByEmail = async (email) => {
    return User.findOne({ email });
};

/* ------------------------- user Delete Email Service ------------------------- */

const deleteUserByEmail = async (email) => {
    return User.findOneAndDelete({ email: email });
  };

module.exports = { createUser, listUser, deleteUser, getId, updateUser, getUserByEmail, deleteUserByEmail }