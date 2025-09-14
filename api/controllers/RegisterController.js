import Register from "../models/RegisterModel.js";
import { sendRegistrationEmail } from "../utils/sendEmail.js";


export const register = async (req, res, next) => {
  const { name, age, state, gender, email, phone, bio } = req.body;

  try {
    const photoPath = req.files.photo ? req.files.photo[0].path : null;
    const idCardPath = req.files.id ? req.files.id[0].path : null;
    const otherDocumentsPath = req.files.otherDocuments ? req.files.otherDocuments[0].path : null;

    const contestant = new Register({
      name,
      age,
      state,
      gender,
      email,
      phone,
      photo: photoPath,
      idCard: idCardPath,
      otherDocuments: otherDocumentsPath,
      bio
    });

    await contestant.save();
    // Generate a contestant ID (optional, more human-readable than _id)
    const contestantId = `KWASU-${new Date().getFullYear()}-${contestant._id.toString().slice(-5)}`;

    // Send registration email
    try {
      await sendRegistrationEmail(contestant, contestantId);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Continue with response even if email fails
    }

    res.status(201).json({ message: "User registered successfully", contestantId });

  } catch (error) {
    next(error);
  }
}
