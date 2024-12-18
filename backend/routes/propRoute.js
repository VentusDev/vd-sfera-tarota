import express from 'express';
import {
	addProp,
	listProps,
	removeProp,
    updateProp
} from '../controllers/propController.js';
import { adminMiddleware } from '../middleware/auth.js';
import uploadImageHandler  from '../middleware/uploadImageMiddleware.js';


const propRoute = express.Router();
propRoute.post('/add',adminMiddleware,uploadImageHandler,addProp)
propRoute.post('/remove', adminMiddleware, removeProp);
propRoute.post('/list', listProps);
propRoute.post('/update',adminMiddleware,uploadImageHandler,updateProp)

export default propRoute;
