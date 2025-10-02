import Register from "../models/RegisterModel.js";
import { sendRegistrationEmail } from "../utils/sendEmail.js";
import cloudinary from "../utils/cloudinary.js";
import fs from "fs";




export const register = async (req, res, next) => {
  const { name, age, state, gender, email, phone, bio } = req.body;

  try {
    let photoUrl = null;
    let idCardUrl = null;
    let otherDocumentsUrl = null;

    // Upload photo to Cloudinary
    if (req.files.photo && req.files.photo[0]) {
      const photoResult = await cloudinary.uploader.upload(req.files.photo[0].path, {
        folder: 'contestants/photos',
        public_id: `photo_${Date.now()}`,
        resource_type: 'image'
      });
      photoUrl = photoResult.secure_url;
      fs.unlinkSync(req.files.photo[0].path); // Clean up temp file
    }

    // Upload ID card to Cloudinary
    if (req.files.id && req.files.id[0]) {
      const idResult = await cloudinary.uploader.upload(req.files.id[0].path, {
        folder: 'contestants/id_cards',
        public_id: `id_${Date.now()}`,
        resource_type: 'image'
      });
      idCardUrl = idResult.secure_url;
      fs.unlinkSync(req.files.id[0].path); // Clean up temp file
    }

    // Upload other documents to Cloudinary
    if (req.files.otherDocuments && req.files.otherDocuments[0]) {
      const docResult = await cloudinary.uploader.upload(req.files.otherDocuments[0].path, {
        folder: 'contestants/documents',
        public_id: `doc_${Date.now()}`,
        resource_type: 'auto'
      });
      otherDocumentsUrl = docResult.secure_url;
      fs.unlinkSync(req.files.otherDocuments[0].path); // Clean up temp file
    }

    const contestant = new Register({
      name,
      age,
      state,
      gender,
      email,
      phone,
      photo: photoUrl,
      idCard: idCardUrl,
      otherDocuments: otherDocumentsUrl,
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

  // endpoint to retrive all contestants and also filter by gender and state
  export const contestants = async (req, res, next) => { 
    try {
      const registeredContestants = await Register.find()
      .select("name photo gender bio _id")
        .sort({ createdAt: -1 }); // Sort by most recent
      res.status(200).json(registeredContestants);
    } catch (error) {
      
    }
  }
