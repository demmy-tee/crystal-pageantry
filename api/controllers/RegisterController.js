import Register from "../models/RegisterModel.js";

export const register = async (req, res, next) => {
  const { name, age, state, gender, email, phone, photo, idCard } = req.body;

  try {
    const newUser = new Register({
      name,
      age,
      state,
      gender,
      email,
      phone,
      photo,
      idCard
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    next(error);
  }
}
