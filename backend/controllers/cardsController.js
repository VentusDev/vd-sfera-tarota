import cardsModel from '../models/cardsModel.js';
//import fs from 'fs';
import { customErrors } from '../utils/variables.js';



const cardsList = async (req, res) => {
	try {
		const cards = await cardsModel.find({});

		res.json({ success: true, data: cards });
	} catch (error) {
		res.json({ success: false, message: customErrors.default });
	}
};





export { cardsList };
