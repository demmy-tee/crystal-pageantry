import express from 'express';
import multer from 'multer';
import { register } from '../controllers/RegisterController.js';

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/register', upload.fields([{ name: 'photo' }, { name: 'id' }, { name: 'otherDocuments' }]), register);

export default router;
