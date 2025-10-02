import mongoose from "mongoose";
import { contestants } from "../controllers/RegisterController";

const VoteSchema = new mongoose.Schema({
  contestantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Register',
    required: true
  },
  voterIp: {} 
})