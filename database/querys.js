const { NumberOfAcesses, User } = require("./schema");

/**
 * Saves a new user to the database.
 * 
 * @async
 * @function postUser
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the user is successfully saved.
 * @throws {Error} - If there is an error saving the user.
 */
async function postUser(req, res) {
  const { nome, email } = req.body;
  const newUser = new User({
    nome: nome,
    email: email,
  });

  try {
    await newUser.save().then((e) => {
      return ;
    });
  } catch (err) {
    console.log(err);
    return ;
  }
}

/**
 * Saves the number of accesses to the database.
 * 
 * @async
 * @function postNumberOfAcess
 * @param {number} index - The number of accesses to be saved.
 * @returns {Promise<void>} - A promise that resolves when the number of accesses is successfully saved.
 * @throws {Error} - If there is an error saving the number of accesses.
 */
async function postNumberOfAcess(index) {
  // console.log(req.body);
  const newAcess = new NumberOfAcesses({
    count: index,
  });
  try {
    await newAcess.save().then((doc) => {
      // console.log(e);
      return ;
    });
  } catch (err) {
    console.log(err);
    return ;
  }
}

/**
 * Retrieves all accesses from the database.
 * 
 * @async
 * @function getAllAcess
 * @param {Function} next - The callback function to handle the retrieved accesses.
 * @returns {Promise<void>} - A promise that resolves when all accesses are retrieved.
 * @throws {Error} - If there is an error retrieving the accesses.
 */
async function getAllAcess(next){
  const rs = await NumberOfAcesses.find().clone();
  return next(rs);
}

module.exports = {
  postNumberOfAcess,
  postUser,
  getAllAcess,
};
