export const validateUserRegistration = (req, res, next) => {
  const { username, email, phone, password } = req.body;
  if (!username || !email || !phone || !password) {
    res.status(400).json({
      message: "All fields are required.",
    });
    return;
  }

  if (username.trim() === "") {
    res.status(400).json({
      message: "Username cannot be empty",
    });
    return;
  }

  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

  if (!emailRegex.test(email)) {
    res.status(400).json({
      message: "Email is invalid ",
    });
    return;
  }
  // Force the user to use a password that is at least 6 characters long, and contains a number, small letter, and capital letter
  // Eg, Passw0 is a valid password
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()~¥=_+}{":;'?/>.<,`\-\|\[\]]{6,50}$/;

  if (!passwordRegex.test(password)) {
    res.status(400).json({ message: "Password to be atleast 6 digits" });
    return;
  }
  next();
};

export const validateUserLogin = (req, res, next) => {
  console.log("Validating user login");
  next();
};
