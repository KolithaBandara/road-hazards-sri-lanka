const validator = require("validator");

const signupValidation = (req) => {
  const { firstName, lastName, age, city, job, email, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("PLEASE ENTER A VALID NAME💔");
  } else if (firstName.length < 2 || lastName.length < 2) {
    throw new Error("CHECK THE NAME LENGTH AGAIN!");
  } else if (age < 18) {
    throw new Error("YOU'RE TOO YOUNG! CAN'T REGISTER ON THIS PLATFORM.");
  }
};

module.exports = { signupValidation };
