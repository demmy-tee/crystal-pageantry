import express from 'express';
import multer from 'multer';
import { register, contestants } from '../controllers/RegisterController.js';

const router = express.Router();

const upload = multer({ dest: 'temp/' });



router.post('/register', upload.fields([{ name: 'photo' }, { name: 'id' }, { name: 'otherDocuments' }]), register);

router.get('/contestants', contestants);

export default router;
